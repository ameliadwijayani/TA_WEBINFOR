$(function () {
	$(".delete-item").click(function () {
		return confirm('Apakah anda yakin ingin menghapus item ini?');
	});
});

function browseServer(identifier,tipeImg) {
	var tipeImg = tipeImg || 0;
	CKFinder.popup({
		resourceType: 'Images',
		chooseFiles: true,
		height: 500,
		onInit: function (finder) {
			finder.on('files:choose', function (evt) {
				var file = evt.data.files.first();
				var url = file.getUrl();
				if(url.indexOf("http://") <= -1){
					url = 'http://'+url;
				}
				if(tipeImg == 1){
					$(".preview-image").css('background-image','url("'+url+'")');
				}else{
					$(".preview-image img").attr('src',url);
				}
				document.getElementById(identifier).value = url;
			});
			finder.on('file:choose:resizedImage', function (evt) {
				var url = evt.data.resizedUrl;
				if(url.indexOf("http://") <= -1){
					url = 'http://'+url;
				}
				if(tipeImg == 1){
					$(".preview-image").css('background-image','url("'+url+'")');
				}else {
					$(".preview-image img").attr('src', url);
				}
				document.getElementById(identifier).value = url;
			});
		}
	});
}