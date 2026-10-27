/* Loads the Oct 1, 2026 SNAP excerpt of the SNAP & Medicaid timeline into a
   Squarespace Code Block. Paste this into the Code Block ("Display Source" OFF):

     <div id="snap-oct-2026-embed"></div>
     <script src="https://hawaii-appleseed.github.io/reports/snap-oct-1-2026-timeline/embed.js"></script>

   The excerpt itself is squarespace-inject.html next to this file; edit that. */
(function () {
    var SRC = 'https://hawaii-appleseed.github.io/reports/snap-oct-1-2026-timeline/squarespace-inject.html';
    var slot = document.getElementById('snap-oct-2026-embed');
    if (!slot) {
        var me = document.currentScript;
        if (!me) return;
        slot = document.createElement('div');
        me.parentNode.insertBefore(slot, me);
    }
    if (slot.dataset.loaded) return;
    slot.dataset.loaded = '1';
    fetch(SRC).then(function (r) { return r.text(); }).then(function (html) {
        slot.innerHTML = html;
        // Scripts set through innerHTML don't run; swap in live copies, in order
        slot.querySelectorAll('script').forEach(function (old) {
            var s = document.createElement('script');
            s.textContent = old.textContent;
            old.replaceWith(s);
        });
    });
})();
