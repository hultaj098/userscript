/*
Best Items by PK & S Лучшие_вещи - ver3
*/

// ==UserScript==
// @name           tw_pk_s3_test
// @namespace      www.the-west.ru
// @description    West: Артур, ПоросячийКот; Александр, Сторан
// @description    Лучшие_вещи - ver3
// @include        http://*.beta.the-west.*
// @include        http://zz1w1.tw.innogames.net/game.php*
// @exclude        http://www.the-west.*
// @exclude        http://forum.the-west.*     
// ==/UserScript==


function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {return;}
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

var menu_pk_s3 = document.createElement("div");
menu_pk_s3.id="menu_pk_s3";
menu_pk_s3.innerHTML = '<a id=\"_menu_pk_s3\" title=\"Открыть окно настроек сундучка-переодевалки\" href=\"javascript:PK_S3_TEST.show_window_settings(false);void(0);\"></a>';
addGlobalStyle('#menu_pk_s3 { background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAZCAIAAAB2NbEXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAADHNJREFUaEPtWllXVUcWBrTXcvVKoyDjBeGCRkRkHkRFQ1ACooKILYOAM4OAglwUiIkax1ZRZBCHGDsMMWlX/4x+7Jf+MemXFvqr+ursW9zDvZDV/RhXrWudc/bZtfe3x6pDeFFaclhY2OLSEn7Xr4tYXFoMWwr/9d+/RkRErF//B/yqB2Fh68LD3WR4C0+XFhc1SVi4/ofJZ59t4J3FxU/h4RHrIsI/LS7hES4jItYFPFrkAsGJscgSpFL8I8BEr6nWwm9EeNhimJ5AiqUwN+XaycDqP5+MtKuKZCT+v/x3YNdW37mvfh+/CQGA1n58L0dPS8WVtkoOzLubyjEwkcH7HJxfPFnGd8EnbH9WOtY+vHvn6ZqSM7V7McFlw5f5+d6kwrSk/FRPXkoiBi4x5yV+ETcYBWmGJndLvLrp9RR4PdnJcTlbEkBflK5GydYtMnDpfhSC2P26zQ1zSEhJjHhaZrVuWnIhBPaa1VclAwFHgVazdHuqLAQoiA/AAUTEhwboOLV/6Hzl7d5jtwaa8Ivx3ZX6sZvtk3c7pu51vHzQPf2ga/p+55PhlvfPR0Z6Tgx2N5Ds686ajsbypppiZQAsBo7gjrUxxxpYEssXQActU2gNlVW02rYCNBIGeAoWQASX7kchiCEDmIMARt3liYGpwAEDrDQ35Q2wvXDgJYjpBLhcIxnZUmD8Ums11yYEIIAF4EAeACUGGLpQPTbUMDB64+NE38/jl+ee9SzMDM+9HJ5/NTr/amR+ZmT25fDb8cEX9y/PTl2ffdIx+/jSvettMBIGLGcioDxbpSDwhcSMAOVNDliraqgotay2AuTgH9oYZrgfBScWzjQePZT4cizjmeqBCn57aCOtkUx5jyUGnY++RSgYAbgjBoALw5ff3GkD+kgsE/e6FPQzI/jFeDPW7+usLy9Mz/du3JEU+fDmpfcTvr9N9IGYA+8iU6kIoAGwAOwMI6tQYJ5xco7IgYlbQ7phgALMWsoqcGEHenouH9l2DUFMGYzLM7ekG0RocjqpSZLac4kj1jVJcs1k9ouCO5ljFcACcACRpCCA/uDaSTjy3avHX4/1w+UXXo2+etrfd7bmywJv6faoQ7s21+TFfJUT443/U++FOoTCwvT1Hx9fWhjrmvqmBe+iGCgDSBGmhRnOxh0YkiE1FD1tBeB3DGEmhOUpIkEwJVJ4cUViv3drw9OXmYj8vukALWIErGigXJVMVzUJYlVUUlUxw1B6OYWQ7s8UBAM88jUCzYWXN6Yf9V5qqtiblXggM/pIXmxVblxNkaeuMO5EScKRgriM5I19F+q/hwFejfw82c8IQBYyESBFmDVNd3KB/6heKJiWK8BEYZuT2ZxYu/nQQmJ7EnOoVGAyvnlXkGIvgF/J+ysw0fG3OplTnFjJ6HPsLNBoUAwlebrKRTQA4Hs4UDf7rAeJfmda3BeZ0YdzY48WxgP0P5cmNO71NO3znCpNqCuKy0mLunLxBAwwPzM8jzQ11oVigBSEGu4vwgeyUlSGTUsm9rQ/hOBlKA2tPMDyZbKnVpvK5HvV/VBI6ZgjMTsrf0YOkveYl4AIkTJtmLOiMFkjGYMSbzHiIYByRwd39QgEKarA4BENgFYSIKK6IuPvzd92KDumoTQRoJ8sTWze54ENGnYnHCuI3Z8ZneWNvtZ98v3EEMvDT5MDqNiwgTEAa0CAAcQZxQDBNJRSYSsgLmNET00MjZRppZz2hqVCgeKUQWNaJ78zV2j3TGa/SOBYMAUsf3/lkK2IKcjYqqkXGTG6keUA4mzDOGAkMcCdK8fh0YiAYwfza4vjWw9saS5LPlnqqS+Kr8mL3ZcRVeCNPJCfWLR9c3/HifeTQygSqNLz09eZhZYVYRhA9/UmAqCSHQHiDnZuMv2G12QtKCDRwwDCr01fnK7AIgRuPswSAblPHDmAnt4QQAzOezK2Eiz7Ea0C/u7USkx5H9VlZ0I05wpoRx3ekYIP2/hTkO8UMW2u219ToJLP0YJ45KKSbZt2b48qzYq92Jjt6yzpas0rzIx/ePPCX3W4zE7fQOVABKCKqBRUttNrIkCXRK5HOART+gIf2RrSDUUxUYA6iz1W5QO/Y4jIK0ZtHfVyU8SzrUh/J82ejHTwwaTQ64G9RWYGh6gGPzBzvU+U+5ywUBF0xrcQ4D6EpAHQwzwZOQ0DLLwe7T5zrDB9Y743sqrEM9xVMnSx6Pyp7MaajPb6nR9f17XUZg5eKi4vToUN3o37fngx+P7heTavwWuARlC8gz24CE0laSf/fR3mApbIzV7IABqEj2r1rNeFp+2htlFth7BpshI305HxK25Bp/E7gS5IK8pPjRj9qvYuDzLcBH8QiAEeDTXOTl9HCnrzbCAnNfJya17n6dxfXtXdurq392zB9P3K24Nlz28fnLpf6esoaanLzNsW+/ROB8oG0McmzqQgtqFIQYDJdjE7J9gK24qJs1B08Tj6jk1pO5EYQ6KE+yx53T9JT4Iju/mwJwm4L1lb/EBAZyl21lWNjX/uXZbKYDn20IK+WIstFvhICkIvPzfpm5sZRm7ZlR5zZ7Ds2/59o317rneV/P1tfUdL7sR3B79/Ut3dljfSVXJ0d1JZRtTFluqZx31IQXB/U4TZhsIA7MolDLmJl0v/XLcKuOTwg67bQdLbXol5boo6QlB5w+KpXzdAqIKxPEs4BvNHHltDaWRx7iSGtA0mQNOR/UA7aYqV1uil2i3h46QafZwlzO1QhgzYhfgjwNf4YXpwQe9+P/cmFmdEP/3my5cPKh+NfPFu7PDk3cretvzztTuOlyRgf6BqctrG881Vrx92oQtawQBKMscAyKocRg57boWw7hf9HiRGstOFslYQPnbSl7ly5JXAZafo9lzdEZniwU5GnECMgdRhF1jBlE4tPMUqdmhKKJtNhhMB3AkvTA7MaQNUlRfGRm6oK0/rbs27cq6wrizldEVqbVF8eW5yxa7N8P381Mhsb9Tlc7W/vOhlAXBSUPY2dwqCuMynlInzgO6CDbjtZaKA2awuz6HCM4CPHRbubMM4s+8b53B3QdobQLz789QAPnY+4dmJAd0yAN+ViHenOHYcUgOAIHazON6Zn7mBRuj12EBCTOTW+D/Wl6WcKkuqzo+rzImt2BUD3y/eumlPlqe+qvhcc/XdG2fmn3aiBUINNynogDYANnjcCctuCNJw90QI9EGYczSto1gfkvgLGhWQvMQyYPYTIfhYoSZhx2accKh1U83ZKh1ZvEFko2+qGuZVIsnQkOn9hL5JBGXITXMYpZUyylo7+WA7YR5FzD3p+PgSO6wbKMW3h9riNm7YvyP6UA5OI2L379hcuj26et/O0ycqus8du+Vrn/5L3/jXrTw6BfrYyoU8C3JQCC26P0VaCijDWDYLBgHNI6Em4Oal8LxIGcAEvhbGVBG9kIobdXpjPlHQGzicXaQ5m7PJ3IJRzgBb8syRPV6Is6AfJ0a5pfowdQ39KErxicOlRVs37d4WVZad1FBdcrap6lrXyce3Ot4+v4ZMtTBxFcRwf/z6I0DOggJOQ0UlQhBMdAnbZQ6lz8vM1hE+7vidhiYRl/JIaZ6qDlMVvjrIbEz1UwMow1/Oy5Qj64wvW3E6MkMh4NR2VTIeZshRNkHX8oQ6DUUK4pZKj47ZF/048LnQfKi1oaLnfN23g+3j93t+mPBh5zU3PTw35UP7T/Txi2PUZW2o+3uAimg5DHC+hbk1JLgBCohD8fxSDjLh4+5HwYhz1ecX4Gs+7NgJzZzQafdkXwRHttMLg0D98mPRamSUkBtsmpbLkQPM4P4eABeGAZBM8HkLA5cwxocXve+e9r54cBk7g9np4Z+mBucmBmafdOIRDo5weDd1q/31vQs4jsY+YNlZkDqLXv5FTGu1uuh5OloDFKAXM2gC8q/7UQhif3bm4Y/GmuhQNtzkly8DlhNqypedL2JrIbOOknQIWt9CQn8RYwoCmv/65z9udh3BHJkdlzCJYD0+2oIBlwcBGicM0KCErPJNWL6lhNZQZydziKidRSmAtIaBQw78os7w0p67H61IHPCuXNrENo2s4l40NBmfumlwM9g3YXzRFawBN97FAPS4z8/FxBpRAtxBgAjAhN0nK7D5Jswa8Pv4TQgAa8AnWAumTOsc8kcSwBqDfy1B6GEhvq66IO7g6cUIN57EsuJxYsqdbgkYqjJhqmWlYhZiKgj42wX7ryKCPXLft/8kgh8j3XdWfMumdP9lBl8JYBjAeVW2gvL/PvkvhoCByM5QvQAAAAAASUVORK5CYII%3D); }');

addGlobalStyle('.bug_mini { width:35px; height:35px; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAlwSFlzAAALEQAACxEBf2RfkQAAAAd0SU1FB9oLHgkGAg/ieXEAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAAIC0lEQVRYR72Y2W/UVRTHZ0rAmBiXCIEYH3gwpkCVQDcKGOk20326TDvdN3a60H2nQEspWjb9F+TF6MT4QBMffDTyJ2kMXM/nnHtnplNeteHk/ub+7u+e7/2e9RKNRCJR+TtYUBB9N+Iih1zEFTCn/zJ/zj/lz+X+zlmuj+Gb/PncTaNv3Js3f8vKv2T2H5C8U/TZpyVd8dIXydqSn1J1Zenu+nKRc+nexvPpnoYKGSvSfU0XRM7rfCpertLTcC7dJ2t41998IT2Y+EpH1jH2ytgVL0t3yZ7sG54ZRRfy4+fHjzXKkY4KmEORAwcKPpSXL273174WcTNDcTc1gMTkuU5lbqTBTQ/GVWaH6/S9rbX3C5cb3dLVZrd8rWWPLF5p8mtsP2SasT+m36Ozvab4N7FKsYB5P3KgoOBIKl72M4oyYIbqMx/rBoMGbG6kPrM5AOdGRWQMYNZutro7t9rc2s2EgmJ+drjezY82ujkZ0THRW+PGe6rdZF+NPrdVnf1DwNQKmMMReTjWKbSZ0vhbmcmePHv6JVHGyWGE94tXGt3K9Rb9vXK9WQC1qixfS2TWcCD0AGKyr1ZBJSrP/FkQjTYKmKMKBnuycHakzgOqk9M06IlU4TUUJPTU62PtMra61RsJt3KjRQEE4f2KzAOCufXxdl2/JusDS4DxJtIxUXX2lYBpyoDBYfGFIAuXGxQEG67esBMi62Nt7u54h4goEWG8N2G/GTenu7Jzfv7+7aRnqEUPyKExEcy8FQzejuOag9YLrQYEAPcnk6ZwQpR7uTfZ4VDC742ppNuc6lR5MJPS9bxD7LsOz5SZCx8zdmIKqOXSmb3M9DSUp0O0gH5ZzIIpYALFqnDaFG6IEpQ+nOvR8dFCrzx36+9tGbfnZV4YgqUHMzYG9jAX5laHFlBYoq26eC+YXsklMMJLIoQT3BEgCCcECEq2ZlMq3yz2uUfyGwCPVwbdt0v9Mm9AeMezAexWwBv+EPgPB1243OQWRRg7YqV7waTEZ9SBBQyOhp+oo3owKIUBgKCQZ5Ruz/e6J6uDbmdpQJ93lgf09+OVAXnfLyD7dN3DWQ7SrQxheo1AYWdWUkhrVR4zZETLJXEBY8wQLdgbJZw+mAMlT1eH3NO1IVX8dG3YPbsz4p6LfLc+Ks/DOgdbgNqREXPB8Pq45SDzHXJZ3LXmmyk4MMwQRcuSJ4iWexNJpXpHwMDItjDESe30WXki4ADzfH1E3z3LgJE1wpayI/vgb7BNQsRv0LcvtEl6M5rwMJNFEpTycaCfTTEDJ1cmRDFMMDIHINjKghpSdgyI+dfmVEpDHzcIvpOMl72SXJfNMyS9kH0xEws3prrUzsE3oBzF39+9rCPMmFkAYxKAhBFz7Sz3q6k4FGA0McphQx1TMLlJD5+Z8UkPMGTRzWmLGpwQMVYMjDEiogzZyFwuU8FkfLcj32/P92kOghnL0AlxiWaXjEs05TKjYHw0WY1JiMMRzr3quGwI5SgLzGAaFGKa4MT4Cj7zRFhjPoQ97LAXAQEzBAfMoGefmSgHIekBBgfmQ5wOMChTH/GswFAuMJ4BkBtdAAOQsuv9hogCTDAR5hJ/3c9MqNpE06qvQwamR22uDBA13mExTzANzqv5RvxKo0nAWv7BgSXfiGCmULtgZukqLUaT66x7iwMHMIQcPkMpIJyJIs0XQjWA1Fn9qXnWnIKTioSwD+aybwWUvCOaYNsiyYDMjzSamfIdOMuM9SLkGVI+QAL96rDeRMqQB4VPPVqQEiEmfexBm89YjkFghQOu3WzLsEJ90nKQ68CdsbI0VRRAVg6MGcyUOa1nARA4M6ygLCiFIVjAZBpBnhWrad1uy9coygyOaw0ZZirfDybXZ2CGEKTIsRm2R8leANAflGbNwbqQnfnWEl53JqxXCWk1kTVv6sC5ZuqMlWbaTurG+piFoCU9Cl5/TnHsyWRczbBiGg1nAcFvE0wTiqmAkX2015F0gZlghTpIp5DcV7X3ZGCJJq3abVr6sbX1LtafsKk5pLUI5I+QFEMrEYokzOj3AoZeyBqtNjWPNeoN+x0YnwlXE6tN5sQUyiwg2VAbppRvrsQPUCJzodd5IFn74Rythr2zXqZLapwA8Zk3VOyQZNtrSvL6mTp64HrtvrAnQn2yDq1DN92SnsSotpYSkKFxsgZMlOqc1bStGQOj8wqGsE7YdSdzB6OfyWvIU4DRcmB3HAPT4u9A0gfLZqEPxnxEBGI9Cs/SqEs/rEwCTAripmeEtpW2wa4t2aY8ZPx9YKy5soY8e0vEd+Q64htz/IjfIQfZZU0Knl/DOubs9mCyJr8xCz6Cf9C/6N3JpxH07etnAMO1YaK3OnOrtNDjxijmk1H7Vn9po7EGWCh4zGtTJie3A9ghrOmmt7bbJCDC5Q1dk3KZa6nMux1YoYzpDc+unrX+rg1bMQWFD3FKO2n2tIDlxPOj9QqId4Qu5g7363BpC1fbsVSVG+s2af769J4b5ZH26uIfuIRPDdTqBYuPAZFpuPzNMmRNu20a7dk7unWJAZzO+0OFNQFMuGvfSlW+rr/45e+S9Kr1rs3t//gnh6vjF754UV1+8tdLpYUvq8pO7FaVn9iV3zrWVJzarT1ftFtbUaTPMXlmRGzNyd3qcydtTka+qZQ9KksLd9mLNfyWvXcvlRSG+ZeVZYW/HDv8wYRgOK3/CyF/B0EVjUaKZLwoUiUC0v9a0IO+U54VcOh/UfHwnshHIh//j4I+9KI/+i+/f7oer6phJgAAAABJRU5ErkJggg==); }');
addGlobalStyle('#window_pereodevalka_setting_title {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAAAZCAMAAAAc2dwqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAMAUExURf9A/3RhWFtHP76xoY19cKWWiHZjWUIuJ0QsJ11HP458cKaWiI99cdjMuZB+cGBKP3ViV11IP0QuJkYvKaeXidfLuaaXiI59cEIsJ6WXiI18cEgwJr+xoYNxaUwzMFxEQF5FP1A3MUwzL0EpJFpBPop4cG1WT0kwLlI5NmNLR2VNSW5WUE41Mj4lIE41ME01MFU9Olg/PEYuKFQ8NlpBPFA3NE42Ml5FQ19GRFI6Nk83NEw0L2dPSnhgWoFqY2JJRjAYEDQcFjAWFFpCPm1UUIh3b2tTTjAYEi0TEW9XUpSCe25VUHphXJOCemhQSmxUTXtjXox7dGxTTox7c39rZKWXjlhAPGFJRWlSSmdQSIBsZjAWEj8mImRMRnlkXpJ/d21UT1A3MjQbFlI5NH9sZV5GQlY+OJSEfFQ8NUgvKU41L1c/N56Ph66hmFY+OlpCPS8YE0gwKlhAOqyglqmakTkhG0UtKFg/OV5GQKGSipqJgWpSTFg/OjUeGD4mIEYuKlI6NI18c41wXH1iWXpiXVE4NFA4MmJGPI1uVkwyKmZOSGFIQkIqJDMcF0MqJk42MFQ7NlA2L0oyLUoxLD0kHjAXDjIZEzwjHlxEPkQsJkgwLDwlIDEZFC4VEVQ8OGJLRTgfGkIrKDkiHSoUDywSDywUDioSD0AoI0ozLjwoIjwqJDoqJUAxLD4vKEY2MD4sJUUxLEk5MkMwKE09NEU1LUEuKEArJkAtJvDm0rm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///z83gm8AAAABdFJOUwBA5thmAAAD4ElEQVR42ryX+1cbRRTH5x9R6xMftaENoLRWzwnVU63W+sIHok0ftKKGBGwbyqasj42PIIkEkiZkAjLzvdTUuhQ7JH+eP2SzyWYfQQ70e84ms/fezH7mzp2ZDavvKKUe/KvUtlLq/pZSStVNUym19Y/a3t5WO/WdHVW/97d5t1ar1Wp/maZ5T9UsmaZ6YJqmWTfvbymlHA7rxmH7vx2zO5sEQJIlAIAgIdBsCQhBgoQQJKUMcBFISklSBnbgiLICSNg3aGFIABt/rrO1KrcMZBMKYbcFmr8VACQCXIAAODjQK4qIeItMCEFCoOPhNklltVxia7eLBZtZSkmCnAKoNTIe4EI79UFR6JykrsBmdlvu5VJ+if2Ryy7+ziEAASmIiOAYCEmCJEBKKYW/y4EjySULxcNDJIjI7lo2UVBZyPz2K/vl52p6uWCNTQr3iOysSgpw7UnWQ72MWDZ++vEHxtj3+vytVIXz7sokImpYoococA6+rs3dZIwxxmaTN64XCxBoLiUnXfvzYUmAF64tzX3HLM1MG4l1cAAc0oF3wHQA3OXCES/mp2aYrZlYejUOAaxwIu5NZ02wPdHd365GwyeifTUaJNG9UgSQKhnfsg598/XkRry5A8GbrtflbnhEtOgcZlc6N766OsscujIxWYwDXELCh849cj+6Lk87me2cOXJqHxCSA0jlLt9kXbqUubgODt7aV71y151HIr/ckXNmqYuOOs0dBcfBcSF6/kvm0hfjn4+Bo1l7+0PnnvuO3LXM6JxUjlQ+8xnz0KdXU83DBgdTd412wXnXHTiAW2ufeMGx2Y/vpPgKd+Dtfs127Ntekd60XTPLV3hhYfQjTzp2KXm9IuAsPJf89r592BkBQddyHzIfZW4nxoRz0e6abj/OCDFWzGX84NgH749v9kjdQZ4bHCn9/Hu+dOzKuXdThL32v5dXFdhkAF3Inn2HBejtuQTHXtladNj1EGTzVG+9mxYzZ4Lg2Ftvjm/6dx4Azk9zznkvus4o699DM20AgELpjdcD6dipEc2r83ikEuGRSIBrLBKJx/3p3FFExE8DUlqpI7maey0Yjr168pUTx4ePx15+qTo0WB3WBtInwtFj2WhuOKdPZnWjOnK0fyA2OBgqh8JHFl5cSCSObXqZveIOl8vR8MTE1JSmR5NzZ14YTz7/XMx4NnZ0sG+of6BfP3XumR50T58dyOsXJ43pEU17qprTNCNkGIYx1Bc1Ek8uLi4+kT0SzS6VH09nw1o4m75xKJk85GX2iouG5kv6qB4qL833aSOjlx/TNK16+NHQkJ6dz+emo9r4I100/w0AyLGvNxhiQwwAAAAASUVORK5CYII%3D); background-repeat:no-repeat; background-position: center top;}');
addGlobalStyle('#window_pereodevalka_informer_title {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAAAZCAMAAAAc2dwqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAMAUExURf9A/3RhWFtHP76xoY19cKWWiHZjWUIuJ0QsJ11HP458cKaWiI99cdjMuZB+cGBKP3ViV11IP0QuJkYvKaeXidfLuaaXiI59cEIsJ6WXiI18cEgwJr+xoYNxaUwzMFxEQF5FP1A3MUwzL0EpJFpBPop4cG1WT0kwLlI5NmNLR2VNSW5WUE41Mj4lIE41ME01MFU9Olg/PEYuKFQ8NlpBPFA3NE42Ml5FQ19GRFI6Nk83NEw0L2dPSnhgWoFqY2JJRjAYEDQcFjAWFFpCPm1UUIh3b2tTTjAYEi0TEW9XUpSCe25VUHphXJOCemhQSmxUTXtjXox7dGxTTox7c39rZKWXjlhAPGFJRWlSSmdQSIBsZjAWEj8mImRMRnlkXpJ/d21UT1A3MjQbFlI5NH9sZV5GQlY+OJSEfFQ8NUgvKU41L1c/N56Ph66hmFY+OlpCPS8YE0gwKlhAOqyglqmakTkhG0UtKFg/OV5GQKGSipqJgWpSTFg/OjUeGD4mIEYuKlI6NI18c41wXH1iWXpiXVE4NFA4MmJGPI1uVkwyKmZOSGFIQkIqJDMcF0MqJk42MFQ7NlA2L0oyLUoxLD0kHjAXDjIZEzwjHlxEPkQsJkgwLDwlIDEZFC4VEVQ8OGJLRTgfGkIrKDkiHSoUDywSDywUDioSD0AoI0ozLjwoIjwqJDoqJUAxLD4vKEY2MD4sJUUxLEk5MkMwKE09NEU1LUEuKEArJkAtJvDm0rm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///z83gm8AAAABdFJOUwBA5thmAAAD80lEQVR42sSXaXfbRBSG548AZQ1LqdM6CaRlOccpnEKhlC0swVB3SUsAx05o6zRyYxaZxSE2cWLXjscJmXlviqEoDZ1YP48PkmXZluQkbO85I0tzr0bPvXNnJLPmrlLq3p9K7Sil7m4rpVTTMJRS23+onZ0dtdvc3VXNO78bvzUajUbjV8Mw7qiGLcNQ9wzDMJrG3W2lVIfBvujo2+/A7PYWAZBkCwAgSAhYZwJCkCAhBEkpA0wEklKSlIEDdHjZDiScC7QwJIDNXzbYep3bHeQQCuGcC1j3CgASASZAABwc6OdFRLxFJoQgIeB6uENSW6tW2PqtcslhllKSoE4B1IqMB5jQTn2QF9yT1OVoZbdlXqkUl9nPhfzSTxwCEJCCiAgdgZAkSAKklFL4mzpwJPXIRvGwEAkicoaWFgpqi7kff2Dff1fPrpTs2KTojcjJqqQA04FkP9SrEyv6t998zRj7KrNwM13jvLsy3TLN9vHfFjgH39DmbzDGGGNzqevXyiUIWEvp/6YT4KWry/NfMluzM3pyAxwAh/TEM00iMrvp/jYtgN5y4UiUi9OzzNFsPLuWgABWORH3oTNN69imcugsE5nOrysgk9o3tVsrUonulSKAdEX/grn0+WdTmwlrB4IPndlFZ9ryfjiZvZ1Oc0fokc7NT6/MsQ5dnpwqJwAuIb1n1nSN2r+ZrTIwzR4yXzoJyQGkC5dusC5dzF3YAAdv7au9dK5J6U/XzmqvwT2znQXHwXE+du4T1qOPox9NgMOqPQ86on3kjsyApLbrkYhcqwIAR7qY+5B56IMraetlg6AdZa+tL77psdEBuLn+vhccm3vvdpqvck+8Xjr3qghes66pDl4VnK/y0uL4u5507GLqWk3Au/DIf4/e6/7Xd3cEBF0tvMN8lLuVnBDei/Y/oBMQE+VCzg+Ovf1WdGsfqaN/9N0BcKQz5970pWOXz76RJhx0/IN8qsAhA+h8/szrLECvzSc5DsrWosOeQ5DWW731bVrOnQ6CY6++Et3yHzwAnJ/inPN+dG4v+9+DlTYAQKny8kuBdOzkmOY1eCJSi/BIJMA0EYkkEv50vV5ExE8BUtqpI7lWeDEYjr3w/HMnjo8ejz/7TH1kuD6qDWVPhGPH8rHCaCEzlc/o9bGjg0Px4eFQNRQ+svj0YjJ5bMur28vvcLUaC09OTk9rmVhq/vRT0dSTT8T1x+NHhwdGBocGMyfPPtaH7tEzQ8XMhSl9ZkzTHqkXNE0P6bqujwzE9OTDS0tLD+WPxPLL1Qez+bAWzmevH0qlDnl1e/nFQguVzHgmVF1eGNDGxi89oGla/fD9oZFMfqFYmIlp0fu6aP4aAGR0roPNX+KaAAAAAElFTkSuQmCC); background-repeat:no-repeat; background-position: center top;}');
addGlobalStyle('#window_pereodevalka_rezult_title {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAAAZCAMAAAAc2dwqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAMAUExURf9A/3RhWFtHP76xoY19cKWWiHZjWUIuJ0QsJ11HP458cKaWiI99cdjMuZB+cGBKP3ViV11IP0QuJkYvKaeXidfLuaaXiI59cEIsJ6WXiI18cEgwJr+xoYNxaUwzMFxEQF5FP1A3MUwzL0EpJFpBPop4cG1WT0kwLlI5NmNLR2VNSW5WUE41Mj4lIE41ME01MFU9Olg/PEYuKFQ8NlpBPFA3NE42Ml5FQ19GRFI6Nk83NEw0L2dPSnhgWoFqY2JJRjAYEDQcFjAWFFpCPm1UUIh3b2tTTjAYEi0TEW9XUpSCe25VUHphXJOCemhQSmxUTXtjXox7dGxTTox7c39rZKWXjlhAPGFJRWlSSmdQSIBsZjAWEj8mImRMRnlkXpJ/d21UT1A3MjQbFlI5NH9sZV5GQlY+OJSEfFQ8NUgvKU41L1c/N56Ph66hmFY+OlpCPS8YE0gwKlhAOqyglqmakTkhG0UtKFg/OV5GQKGSipqJgWpSTFg/OjUeGD4mIEYuKlI6NI18c41wXH1iWXpiXVE4NFA4MmJGPI1uVkwyKmZOSGFIQkIqJDMcF0MqJk42MFQ7NlA2L0oyLUoxLD0kHjAXDjIZEzwjHlxEPkQsJkgwLDwlIDEZFC4VEVQ8OGJLRTgfGkIrKDkiHSoUDywSDywUDioSD0AoI0ozLjwoIjwqJDoqJUAxLD4vKEY2MD4sJUUxLEk5MkMwKE09NEU1LUEuKEArJkAtJvDm0rm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19fb29vf39/j4+Pn5+fr6+vv7+/z8/P39/f7+/v///z83gm8AAAABdFJOUwBA5thmAAAD4klEQVR42rSX+1cbRRTH5x9R6xMftaENoLRWzwnVU63W+sIHok0ftKKGBGwbyqbEx8ZHkEQCSRMyAZn5XmpqXYodkj/PH3Y37Ca7m5hTvudkH3Pv3vnMvTOzG9bYU0o9+FepXaXU/R2llGoYhlJq5x+1u7ur9hp7e6px72/jbr1er9f/MgzjnqpbMgz1wDAMo2Hc31FKuQzWjavt/wZmd7YJgCRLAABBQsC8EhCCBAkhSEoZYCKQlJKkDAzg8rIcSLRuYGNIAFt/brKNGrcaqEUoROtawHxWAJAIMAEC4OBANy8i4jaZEIKEgKPzFkl1vVJmG7dLxRazlJIEuQWQPTIeYMJ+6oO84CxSm6OZXdu8Wi6ssD/yueXfOQQgIAUREVwDIUmQBEgppfA3uXAkdchC8bAQCSJqhZYmCqpL2d9+Zb/8XMusFq2xSdE5olZWJQWY+pLVqVcjVvWffvyBMfZ9evFWqsp5+8xsV9MUHbTAOfimtnCTMcYYm0/euF4qQsBcSv50+8eDlAAvXltZ+I5ZmpvVE5vgADikL94B0AHonC4c8VJhZo61NBfLrMchgDVOxLvS2QU2zw5qd4N9Zx+bzc4RSrSvFAGkyvq3zKFvvp7eips7ELrS2QTWz03d3O/cAnZc9JB/AFtfXZ1nLl2Zmi7FAS4h0W1VOFeHk9RJ7oCwnLvTSUgOIJW/fJO16VL24iY4uL2v+uXOFbzZkR5HCt3J3i9904/O7P1C9PyXrENfTH4+AQ5z7vVI55puXlX3qmzbtgRnUTlShexnzEOfXk2ZLxv0QNdGYJ/6oHNudABubXziBcfmP76T4mvcF89V0Kbz7FoYnZVt9lpZvsaLS+MfedKxS8nrVQH/ieevh7MJAoKu5T9kPsreTkwI/0V7wHACYqKUz/rBsQ/en9zuI3UPK3McqfT593zp2JVz76YI/cbv51MFLTKALuTOvsMC9PZCgqNfNpsOPQ9Bmm91+9u0lD0TBMfeenNy2z94ADg/zTnn3eicXta/BzNtAIBi+Y3XA+nYqTHNK3g8Uo3wSCTANBGJxOP+dJ1eRMRPA1JaqSO5nn8tGI69evKVE8dHj8defqk2Mlwb1YYyJ8LRY7lofjSfns6l9drY0cGh2PBwqBIKH1l6cSmROLbt1ezld7hSiYanpmZmtHQ0uXDmhcnk88/F9GdjR4cHRgaHBtOnzj3The7ps0OF9MVpfXZM056q5TVND+m6ro8MRPXEk8vLy0/kjkRzK5XHM7mwFs5lbhxKJg95NXv5RUOL5fR4OlRZWRzQxsYvP6ZpWu3wo6GRdG6xkJ+NapOPtNH8NwAZT6i/Na5mfgAAAABJRU5ErkJggg%3D%3D); background-repeat:no-repeat; background-position: center top;}');
addGlobalStyle('.bug_mini_red { width:35px; height:35px; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFdiYcdycdeCcdfCYbfCcdeCgdeSkeeikfeiofeC0idDIkdDMmdDQndTQodzYoeDMmeDcpeDgpeDgqeTkra1ZAa1dCa1hCbFlDbVpDbVpEbltFb1xFb1xGcFtEcF1FcFxGcF1HcV5GcV5Hcl9IcV9JcmBIc2BJdGBJdGFKdWFLdWJJdWJKdWJLdmNMd2RLd2RMd2RNeGVMeGVNeGVOeWZNeWZOemZPemhOemhPfGlPe2hQfGlQfGlRfGpQfWpRfmtSfmtTfmxRfmxSf2xTnAoGiCccjC8igTIlijAjizAkjDEkjTEljDIkjTIljjMmjzQmjzQnjzQokCwgki8ikDUokTYpswMAtAMAugMAvAIAvwwHgG1TgG5TgG1UgW5UgW9VgnBUgnBVgnBWg3BXhHFWhHFXhHJWhHJXhXJYhXNZhnRYhnRZhnRah3VbiHVZiHZZiHZaiXZbiXdcinhbinhci3hdi3pdi3pejHlcjHldjHpdjHpejXtfjnxfjnxgj31hkH1hkH5hkH5ikX9jwwMAxAkFzAMA0QMA1AMA0woF5wMA6AMA7AMA8QMA+QMA/gMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAibcs2gAAAAlwSFlzAAALEAAACxABrSO9dQAAAAd0SU1FB9oLHgkGAg/ieXEAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41Ljg3O4BdAAADwElEQVQ4T32U/WObRBjH2bR1Ot9flqWs0h4jiXKUyiCy0F4U5lyzdHauvsy01FAtjMtmaEBtjkCg07mxdv+yV1p/nA+/HNzn+T7PPTzPMS+Oj4ri2cusKI6OXzDHT+/d7K6vb9z55u7G+u3b6xt3N7/b3Njc6HS7nW7n1s2fimPm+b15FixwPN8AQFhgeR4qGjWZBxw1dv7rv4+YogNYcJW+LvJ1HjTEBlQMdF2DNVgH1Uq1+s6PBVOscaDUgYp64q/AJU1RDaOpQJ6rzlUu/lAwz7q8AHgRymoTtVf1zymHdEMz26uwxrEs++b3lFkXBEGUtZZhIMs0zZ7Zc8yeZdqGJvLVuVOmC0DtM82wexTYss2f+33Xtu2eRaM1uCtzF0sdAER1FW3RTdvF7tDHPv7F2XN65moTNoS3Tpg7NUFUELL72HWDR5iEHg4833f7dluVJOndUocXYKuNbDx08TAYkGgQkfH+KHjg9QwFXi11OotAVHRrQIb+fjwhSTrNkyQch3v2l9eV+kLJdIEgq+a2/wfGAaEWTzOShOQg8G2kQaE81xrgJa1nD6KDKEmzPEviyTSLwwDjXbOlSu+fnV1UHS8YjLPDjORpmk6zaZaE4WAX0YKWTIeWUN8NRqMoPczzKX2oVkai0UPbNJrL75UMLyw1dwbDKMwP6eYkSRNCJoTqWEjXmqUOreGSavnDJDvMU4rlhJ4tmQQBpjn/F4sDcgv5v4WTOEvyPI/J7yQl4f7+Q8fUr53lzAGoI3wwDifUPaXJBiQhByTEVkuTPjnNmQPLhvloTJLplGY7iYLhn5PJOAgctHJNapT/Yu0KR3X8gKRJFqbjyTghcRQR7Ln9dhPKH5QMzccwXRzGFCBRNCZhTAjGvm02pQYsY93igPIF8vbDYYCTOBySOAxHdO25OysQ1MpYtMekFuo7eG/PDX1/MIpCLxxjx+tbK3JNLHXWOF5Sje2+4zuu63sOdn8deJ7r7JiGUueFt8sa1hqSpPYs9wHt0T5tLae/VzKWXqdtfNrzfA1KGjJ2eiZqt20Tmdv2rrOzhU6aHoCS6QDA85KuGS3dMJGh09mxLAspsijwHHfGsJdZOp91UZKVVV3XZFnTm1qjVgPcXOVy9XQuFiuVOQ4siqqiLMtiXfhUXoaQjjpbrXx06dIbdE6Lb+c/rrKLAEAZyqIoAJaX6gKgXpSpVD98/X7BHP311avM+ZmZmdkLr81emJ09Wc3MnKOfzjEMc/6VG0+OmOPiyeP7L7fH/9D7h95jz//P6D32LzEDhBUz1GjIAAAAAElFTkSuQmCC); }');
    
    // добавляем меню "Лево" под "Багаж"

var menu_inventory = document.getElementById('menu_achievement');
if (menu_inventory) {
    menu_inventory.parentNode.insertBefore(menu_pk_s3, menu_inventory.nextSibling);
}

var pk_s3_code='';
var pk_s3_body, pk_s3_script, pk_s3_style, pk_s3_head; 
pk_s3_body = document.getElementsByTagName('body')[0];
pk_s3_script = document.createElement('script');
pk_s3_script.type = 'text/javascript';


PK_S3_TEST = new Object();

PK_S3_TEST.init = function(){

    PK_S3_TEST.types = ['head', 'body', 'foot', 'belt', 'neck', 'pants', 'animal', 'right_arm', 'left_arm', 'yield'];
    PK_S3_TEST.types_name = ['Пояс', 'Одежда', 'Обувь', 'Головной убор', 'Шейная повязка', 'Штаны', 'Верховое животное', 'Дуэльное оружие', 'Фортовое оружие', 'Продукт'];
    PK_S3_TEST.nabory=['set_farmer', 'set_mexican', 'set_indian', 'set_quackery', 'set_pilgrim_male', 'set_pilgrim_female', 'set_gentleman', 'set_dancer', 'fireworker_set', 'gold_set', 'greenhorn_set', 'set_sleeper', 'season_set'];
    PK_S3_TEST.skills = ['build', 'punch', 'tough', 'endurance', 'health', 'ride', 'reflex', 'dodge', 'hide', 'swim', 'aim', 'shot', 'pitfall', 'finger_dexterity', 'repair', 'leadership', 'tactic', 'trade', 'animal', 'appearance'];
    PK_S3_TEST.skillsi = {build: 0, punch:1, tough:2, endurance:3, health:4, ride:5, reflex:6, dodge:7, hide:8, swim:9, aim:10, shot:11, pitfall:12, finger_dexterity:13, repair:14, leadership:15, tactic:16, trade:17, animal:18, appearance:19}
    PK_S3_TEST.attributes = ['strength', 'flexibility', 'dexterity', 'charisma'];
    PK_S3_TEST.skill2atr = {build:'strength', punch:'strength', tough:'strength', endurance:'strength', health:'strength',ride:'flexibility', reflex:'flexibility', dodge:'flexibility', hide:'flexibility', swim:'flexibility',aim:'dexterity', shot:'dexterity', pitfall:'dexterity', finger_dexterity:'dexterity', repair:'dexterity', leadership:'charisma', tactic:'charisma', trade:'charisma', animal:'charisma', appearance:'charisma'};
    PK_S3_TEST.informer = '';
    PK_S3_TEST.rezultat = '';
    PK_S3_TEST.fort_affects = ['defense', 'offense', 'damage'];
    PK_S3_TEST.vsego_s_TO = 10;
    
    
    PK_S3_TEST.bonus = {};
    PK_S3_TEST.bonus.speed = (Character.characterClass != 'duelist') ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.2 : 1.1;
    PK_S3_TEST.bonus.money = (PremiumBoni.hasBonus('money')) ? 1.5 : 1.0;
    PK_S3_TEST.bonus.drop = (Character.characterClass != 'adventurer') ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.2 : 1.1;
    PK_S3_TEST.bonus.life = (Character.characterClass != 'soldier') ? 10 : (PremiumBoni.hasBonus('character')) ? 20 : 15;
    PK_S3_TEST.bonus.exp = (Character.characterClass) != 'worker' ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.1 : 1.05;
    PK_S3_TEST.bonus.build = (Character.characterClass) != 'worker' ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.1 : 1.05;
    PK_S3_TEST.bonus.weapon = (Character.characterClass != 'soldier') ? 0 : (PremiumBoni.hasBonus('character')) ? 6 : 3;
    PK_S3_TEST.bonus.leader = (Character.characterClass != 'soldier') ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.5 : 1.25;

    
    PK_S3_TEST.items = [];
    PK_S3_TEST.raboty = [];
    PK_S3_TEST.komplekty = {};
    
    PK_S3_TEST.raboty.max = 127;
    PK_S3_TEST.raboty.build = 199;
    PK_S3_TEST.raboty.moving = 200;
    PK_S3_TEST.raboty.health = 201;
    PK_S3_TEST.raboty.energy = 202;
    PK_S3_TEST.raboty.fort_min = 301;
    PK_S3_TEST.raboty.fort_max = 400;
    PK_S3_TEST.raboty.fort_middle = 304;
    PK_S3_TEST.raboty.duel_min = 401;
    PK_S3_TEST.raboty.duel_max = 500;
    //PK_S3_TEST.raboty.surprise = 999;
    

    PK_S3_TEST.rekurs = {};
    PK_S3_TEST.rekurs.max_count = 2000;
    PK_S3_TEST.rekurs.time = 0;
    PK_S3_TEST.rekurs.working = 1024;
    PK_S3_TEST.rekurs.delay = 32;
    PK_S3_TEST.rekurs.itteration = 0;
    PK_S3_TEST.rekurs.overflow = 5;

    PK_S3_TEST.vyvod = {};
    PK_S3_TEST.vyvod.type = 'name';
    PK_S3_TEST.vyvod.negativ = false;
    PK_S3_TEST.vyvod.nativ = false;
    PK_S3_TEST.vyvod.to = 0;
//    PK_S3_TEST.vyvod.type_old = 'nothing';
    PK_S3_TEST.cookies = {};
    PK_S3_TEST.cookies.save = [];


    PK_S3_TEST.progress = {};
    PK_S3_TEST.progress.percent = 0;
    PK_S3_TEST.progress.id = 0;
    PK_S3_TEST.progress.array_mask = [];
    var temp_progress_summ = 0;
    var max_mask = Math.pow(2, PK_S3_TEST.types.length) - 1;
    for (var i = 0; i <= max_mask / 2; ++i){
	PK_S3_TEST.progress.array_mask[i] = 0;
	for (var j = i + 1; j < max_mask; ++j){
	    if (!(i&j)){
		++temp_progress_summ;
	    }
	}
	PK_S3_TEST.progress.array_mask[i] = temp_progress_summ;
    }
    for (var i = 0; i <= max_mask / 2; ++i){
	PK_S3_TEST.progress.array_mask[i] /= temp_progress_summ;
    }

    PK_S3_TEST.text_info = '';
    

    PK_S3_TEST.odevalo4ka = {};
    PK_S3_TEST.odevalo4ka.items = [];
    PK_S3_TEST.odevalo4ka.wait_inventory = 2000;
    PK_S3_TEST.odevalo4ka.wait_carry = 1000;
    PK_S3_TEST.odevalo4ka.repeat = 10;
    PK_S3_TEST.odevalo4ka.count = 0;
    PK_S3_TEST.odevalo4ka.bagazh = false;
    
    PK_S3_TEST.forty = {};
    PK_S3_TEST.forty.ves = {aim:1, dodge:1, leadership:1, skill:1};
    PK_S3_TEST.forty.is_zero = true;

    
    PK_S3_TEST.items[0] = {item_id:0, nshort:'nothing', name:'заглушка', type:'zaty4ka', level:0, price:0, image:'/images/items/unknown.png?1', image_mini:'/images/items/unknown.png?1', set:{}, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:1, damage_max:7}, sub_type:'hand'};
    PK_S3_TEST.items[1] = {item_id:1, nshort:'clayjug', name:'Разбитый глиняный кувшин', type:'right_arm', level:1, price:16, image:'/images/items/right_arm/clayjug.png?1', image_mini:'/images/items/right_arm/mini/clayjug.png?1', set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:1, damage_max:7}, sub_type:'hand'};
    PK_S3_TEST.items[2] = {item_id:2, nshort:'winebottle', name:'Разбитая винная бутылка', type:'right_arm', level:5, price:26, image:'/images/items/right_arm/winebottle.png?1', image_mini:'/images/items/right_arm/mini/winebottle.png?1', set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:2, damage_max:10}, sub_type:'hand'};
    PK_S3_TEST.items[3] = {item_id:3, nshort:'whiskeybottle', name:'Разбитая бутылка виски', type:'right_arm', level:7, price:40, image:'/images/items/right_arm/whiskeybottle.png?1', image_mini:'/images/items/right_arm/mini/whiskeybottle.png?1', set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:3, damage_max:13}, sub_type:'hand'};
PK_S3_TEST.items[4] = {item_id:4, nshort:'rotty_club', name:'Гнилая дубинка', type:'right_arm', level:7, price:26, image:'/images/items/right_arm/rotty_club.png?1', image_mini:'/images/items/right_arm/mini/rotty_club.png?1', set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:3, damage_max:9}, sub_type:'hand'};
    PK_S3_TEST.items[5] = {item_id:5, nshort:'club', name:'Дубинка', type:'right_arm', level:10, price:63, image:'/images/items/right_arm/club.png?1', image_mini:'/images/items/right_arm/mini/club.png?1', set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:6, damage_max:12}, sub_type:'hand'};
    PK_S3_TEST.items[6] = {item_id:6, nshort:'nail_club', name:'Дубинка с шипом', type:'right_arm', level:13, price:125, image:'/images/items/right_arm/nail_club.png?1', image_mini:'/images/items/right_arm/mini/nail_club.png?1', set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:8, damage_max:16}, sub_type:'hand'};
    PK_S3_TEST.items[7] = {item_id:7, nshort:'rusty_razor', name:'Ржавая бритва', type:'right_arm', level:12, price:64, image:'/images/items/right_arm/rusty_razor.png?1', image_mini:'/images/items/right_arm/mini/rusty_razor.png?1', set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:7, damage_max:11}, sub_type:'hand'};
    PK_S3_TEST.items[8] = {item_id:8, nshort:'razor', name:'Бритва', type:'right_arm', level:15, price:146, image:'/images/items/right_arm/razor.png?1', image_mini:'/images/items/right_arm/mini/razor.png?1', set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:11, damage_max:15}, sub_type:'hand'};
    PK_S3_TEST.items[9] = {item_id:9, nshort:'sharp_razor', name:'Острая бритва', type:'right_arm', level:18, price:354, image:'/images/items/right_arm/sharp_razor.png?1', image_mini:'/images/items/right_arm/mini/sharp_razor.png?1', bonus:{skills:{aim:1}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:14, damage_max:20}, sub_type:'hand'};
    PK_S3_TEST.items[10] = {item_id:10, nshort:'figaros_razor', name:'Бритва Фигаро', type:'right_arm', level:25, price:1740, image:'/images/items/right_arm/figaros_razor.png?1', image_mini:'/images/items/right_arm/mini/figaros_razor.png?1', bonus:{skills:{finger_dexterity:3, aim:3}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:32, damage_max:48}, sub_type:'hand'};
    PK_S3_TEST.items[11] = {item_id:11, nshort:'rusty_skewer', name:'Ржавый кинжал', type:'right_arm', level:17, price:122, image:'/images/items/right_arm/rusty_skewer.png?1', image_mini:'/images/items/right_arm/mini/rusty_skewer.png?1', set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:7, damage_max:17}, sub_type:'hand'};
    PK_S3_TEST.items[12] = {item_id:12, nshort:'skewer', name:'Кинжал', type:'right_arm', level:20, price:384, image:'/images/items/right_arm/skewer.png?1', image_mini:'/images/items/right_arm/mini/skewer.png?1', bonus:{skills:{punch:1}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:13, damage_max:23}, sub_type:'hand'};
    PK_S3_TEST.items[13] = {item_id:13, nshort:'sharp_skewer', name:'Острый кинжал', type:'right_arm', level:23, price:554, image:'/images/items/right_arm/sharp_skewer.png?1', image_mini:'/images/items/right_arm/mini/sharp_skewer.png?1', bonus:{skills:{punch:1}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:18, damage_max:28}, sub_type:'hand'};
    PK_S3_TEST.items[14] = {item_id:14, nshort:'codys_skewer', name:'Кинжал Коди', type:'right_arm', level:30, price:2600, image:'/images/items/right_arm/codys_skewer.png?1', image_mini:'/images/items/right_arm/mini/codys_skewer.png?1', bonus:{skills:{health:4, punch:3}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:42, damage_max:60}, sub_type:'hand'};
    PK_S3_TEST.items[15] = {item_id:15, nshort:'rusty_bowie', name:'Ржавый нож', type:'right_arm', level:27, price:450, image:'/images/items/right_arm/rusty_bowie.png?1', image_mini:'/images/items/right_arm/mini/rusty_bowie.png?1', bonus:{skills:{appearance:1}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:16, damage_max:24}, sub_type:'hand'};
    PK_S3_TEST.items[16] = {item_id:16, nshort:'bowie', name:'Нож', type:'right_arm', level:30, price:850, image:'/images/items/right_arm/bowie.png?1', image_mini:'/images/items/right_arm/mini/bowie.png?1', bonus:{skills:{appearance:2}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:22, damage_max:34}, sub_type:'hand'};
    PK_S3_TEST.items[17] = {item_id:17, nshort:'sharp_bowie', name:'Острый нож', type:'right_arm', level:33, price:1220, image:'/images/items/right_arm/sharp_bowie.png?1', image_mini:'/images/items/right_arm/mini/sharp_bowie.png?1', bonus:{skills:{appearance:2}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:32, damage_max:40}, sub_type:'hand'};
    PK_S3_TEST.items[18] = {item_id:18, nshort:'bowies_knife', name:'Нож Бови', type:'right_arm', level:40, price:4600, image:'/images/items/right_arm/bowies_knife.png?1', image_mini:'/images/items/right_arm/mini/bowies_knife.png?1', bonus:{skills:{appearance:4, pitfall:5}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:68, damage_max:80}, sub_type:'hand'};
    PK_S3_TEST.items[19] = {item_id:19, nshort:'rusty_foil', name:'Ржавая рапира', type:'right_arm', level:32, price:730, image:'/images/items/right_arm/rusty_foil.png?1', image_mini:'/images/items/right_arm/mini/rusty_foil.png?1', bonus:{skills:{tactic:2}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:18, damage_max:32}, sub_type:'hand'};
    PK_S3_TEST.items[20] = {item_id:20, nshort:'foil', name:'Рапира', type:'right_arm', level:35, price:1134, image:'/images/items/right_arm/foil.png?1', image_mini:'/images/items/right_arm/mini/foil.png?1', bonus:{skills:{tactic:2}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:24, damage_max:44}, sub_type:'hand'};
    PK_S3_TEST.items[21] = {item_id:21, nshort:'sharp_foil', name:'Острая рапира', type:'right_arm', level:38, price:1655, image:'/images/items/right_arm/sharp_foil.png?1', image_mini:'/images/items/right_arm/mini/sharp_foil.png?1', bonus:{skills:{tactic:3}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:30, damage_max:54}, sub_type:'hand'};
    PK_S3_TEST.items[22] = {item_id:22, nshort:'athos_foil', name:'Рапира Атоса', type:'right_arm', level:45, price:5775, image:'/images/items/right_arm/athos_foil.png?1', image_mini:'/images/items/right_arm/mini/athos_foil.png?1', bonus:{skills:{finger_dexterity:5, endurance:6}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:68, damage_max:100}, sub_type:'hand'};
    PK_S3_TEST.items[23] = {item_id:23, nshort:'rusty_machete', name:'Ржавый мачете', type:'right_arm', level:37, price:940, image:'/images/items/right_arm/rusty_machete.png?1', image_mini:'/images/items/right_arm/mini/rusty_machete.png?1', bonus:{skills:{tough:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:5, damage_max:55}, sub_type:'hand'};
    PK_S3_TEST.items[24] = {item_id:24, nshort:'machete', name:'Мачете', type:'right_arm', level:40, price:1560, image:'/images/items/right_arm/machete.png?1', image_mini:'/images/items/right_arm/mini/machete.png?1', bonus:{skills:{tough:3}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:10, damage_max:70}, sub_type:'hand'};
    PK_S3_TEST.items[25] = {item_id:25, nshort:'sharp_machete', name:'Острый мачете', type:'right_arm', level:43, price:2150, image:'/images/items/right_arm/sharp_machete.png?1', image_mini:'/images/items/right_arm/mini/sharp_machete.png?1', bonus:{skills:{tough:3}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:15, damage_max:85}, sub_type:'hand'};
    PK_S3_TEST.items[26] = {item_id:26, nshort:'nats_machete', name:'Мачете Ната', type:'right_arm', level:50, price:6750, image:'/images/items/right_arm/nats_machete.png?1', image_mini:'/images/items/right_arm/mini/nats_machete.png?1', bonus:{skills:{leadership:6, tough:6}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:20, damage_max:163}, sub_type:'hand'};
    PK_S3_TEST.items[27] = {item_id:27, nshort:'rusty_conquistador', name:'Ржавый меч конкистадора', type:'right_arm', level:47, price:1710, image:'/images/items/right_arm/rusty_conquistador.png?1', image_mini:'/images/items/right_arm/mini/rusty_conquistador.png?1', bonus:{skills:{reflex:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:37, damage_max:49}, sub_type:'hand'};
    PK_S3_TEST.items[28] = {item_id:28, nshort:'conquistador', name:'Меч конкистадора', type:'right_arm', level:50, price:2560, image:'/images/items/right_arm/conquistador.png?1', image_mini:'/images/items/right_arm/mini/conquistador.png?1', bonus:{skills:{reflex:4}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:48, damage_max:60}, sub_type:'hand'};
    PK_S3_TEST.items[29] = {item_id:29, nshort:'sharp_conquistador', name:'Острый меч конкистадора', type:'right_arm', level:53, price:3370, image:'/images/items/right_arm/sharp_conquistador.png?1', image_mini:'/images/items/right_arm/mini/sharp_conquistador.png?1', bonus:{skills:{reflex:5}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:54, damage_max:74}, sub_type:'hand'};
    PK_S3_TEST.items[30] = {item_id:30, nshort:'henandos_conquistador', name:'Меч Эрнандо', type:'right_arm', level:50, price:8700, image:'/images/items/right_arm/henandos_conquistador.png?1', image_mini:'/images/items/right_arm/mini/henandos_conquistador.png?1', bonus:{skills:{trade:6, reflex:7}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:95, damage_max:125}, sub_type:'hand'};
    PK_S3_TEST.items[31] = {item_id:31, nshort:'rusty_tomahawk', name:'Ржавый Томагавк', type:'right_arm', level:57, price:2900, image:'/images/items/right_arm/rusty_tomahawk.png?1', image_mini:'/images/items/right_arm/mini/rusty_tomahawk.png?1', bonus:{skills:{hide:2, dodge:3}}, set:{}, traderlevel:12, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:43, damage_max:71}, sub_type:'hand'};
    PK_S3_TEST.items[32] = {item_id:32, nshort:'tomahawk', name:'Томагавк', type:'right_arm', level:60, price:3800, image:'/images/items/right_arm/tomahawk.png?1', image_mini:'/images/items/right_arm/mini/tomahawk.png?1', bonus:{skills:{hide:3, dodge:3}}, set:{}, traderlevel:12, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:50, damage_max:88}, sub_type:'hand'};
    PK_S3_TEST.items[33] = {item_id:33, nshort:'sharp_tomahawk', name:'Острый томагавк', type:'right_arm', level:63, price:4900, image:'/images/items/right_arm/sharp_tomahawk.png?1', image_mini:'/images/items/right_arm/mini/sharp_tomahawk.png?1', bonus:{skills:{hide:3, dodge:3}}, set:{}, traderlevel:12, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:65, damage_max:95}, sub_type:'hand'};
    PK_S3_TEST.items[34] = {item_id:34, nshort:'taschunkas_tomahawk', name:'Томагавк Ташунки', type:'right_arm', level:70, price:10100, image:'/images/items/right_arm/taschunkas_tomahawk.png?1', image_mini:'/images/items/right_arm/mini/taschunkas_tomahawk.png?1', bonus:{skills:{swim:7, hide:3, dodge:5}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:100, damage_max:140}, sub_type:'hand'};
    PK_S3_TEST.items[35] = {item_id:35, nshort:'rusty_axe', name:'Ржавый топор лесоруба', type:'right_arm', level:62, price:3400, image:'/images/items/right_arm/rusty_axe.png?1', image_mini:'/images/items/right_arm/mini/rusty_axe.png?1', bonus:{skills:{punch:4}}, set:{}, traderlevel:13, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:20, damage_max:112}, sub_type:'hand'};
    PK_S3_TEST.items[36] = {item_id:36, nshort:'axe', name:'Топор лесоруба', type:'right_arm', level:65, price:4400, image:'/images/items/right_arm/axe.png?1', image_mini:'/images/items/right_arm/mini/axe.png?1', bonus:{skills:{punch:5}}, set:{}, traderlevel:13, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:25, damage_max:127}, sub_type:'hand'};
    PK_S3_TEST.items[37] = {item_id:37, nshort:'sharp_axe', name:'Острый топор лесоруба', type:'right_arm', level:68, price:5600, image:'/images/items/right_arm/sharp_axe.png?1', image_mini:'/images/items/right_arm/mini/sharp_axe.png?1', bonus:{skills:{punch:6}}, set:{}, traderlevel:13, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:30, damage_max:144}, sub_type:'hand'};
    PK_S3_TEST.items[38] = {item_id:38, nshort:'boones_axe', name:'Топор Буна', type:'right_arm', level:75, price:10200, image:'/images/items/right_arm/boones_axe.png?1', image_mini:'/images/items/right_arm/mini/boones_axe.png?1', bonus:{skills:{punch:8, build:8}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:35, damage_max:205}, sub_type:'hand'};
    PK_S3_TEST.items[39] = {item_id:39, nshort:'rusty_sabre', name:'Ржавая кавалерийская сабля', type:'right_arm', level:67, price:4200, image:'/images/items/right_arm/rusty_sabre.png?1', image_mini:'/images/items/right_arm/mini/rusty_sabre.png?1', bonus:{skills:{tactic:5}}, set:{}, traderlevel:14, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:64, damage_max:84}, sub_type:'hand'};
    PK_S3_TEST.items[40] = {item_id:40, nshort:'sabre', name:'Кавалерийская сабля', type:'right_arm', level:70, price:5230, image:'/images/items/right_arm/sabre.png?1', image_mini:'/images/items/right_arm/mini/sabre.png?1', bonus:{skills:{tactic:6}}, set:{}, traderlevel:14, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:75, damage_max:93}, sub_type:'hand'};
    PK_S3_TEST.items[41] = {item_id:41, nshort:'sharp_sabre', name:'Острая кавалерийская сабля', type:'right_arm', level:73, price:6350, image:'/images/items/right_arm/sharp_sabre.png?1', image_mini:'/images/items/right_arm/mini/sharp_sabre.png?1', bonus:{skills:{tactic:6}}, set:{}, traderlevel:14, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:85, damage_max:105}, sub_type:'hand'};
    PK_S3_TEST.items[42] = {item_id:42, nshort:'grants_sabre', name:'Сабля генерала Гранта', type:'right_arm', level:80, price:10800, image:'/images/items/right_arm/grants_sabre.png?1', image_mini:'/images/items/right_arm/mini/grants_sabre.png?1', bonus:{skills:{tactic:9, ride:9}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:110, damage_max:134}, sub_type:'hand'};
    PK_S3_TEST.items[43] = {item_id:43, nshort:'screwdriver', name:'Отвёртка', type:'right_arm', level:10, price:114, image:'/images/items/right_arm/screwdriver.png?1', image_mini:'/images/items/right_arm/mini/screwdriver.png?1', characterClass:'worker', bonus:{skills:{finger_dexterity:1}}, set:{}, sellable:true, damage:{damage_min:4, damage_max:14}, sub_type:'hand'};
    PK_S3_TEST.items[44] = {item_id:44, nshort:'spanner', name:'Гаечный ключ', type:'right_arm', level:21, price:628, image:'/images/items/right_arm/spanner.png?1', image_mini:'/images/items/right_arm/mini/spanner.png?1', characterClass:'worker', bonus:{skills:{build:2}}, set:{}, sellable:true, damage:{damage_min:20, damage_max:24}, sub_type:'hand'};
    PK_S3_TEST.items[45] = {item_id:45, nshort:'crowbar', name:'Фомка', type:'right_arm', level:36, price:1594, image:'/images/items/right_arm/crowbar.png?1', image_mini:'/images/items/right_arm/mini/crowbar.png?1', characterClass:'worker', bonus:{skills:{repair:3}}, set:{}, sellable:true, damage:{damage_min:30, damage_max:46}, sub_type:'hand'};
    PK_S3_TEST.items[46] = {item_id:46, nshort:'whips', name:'Кнут', type:'right_arm', level:30, price:594, image:'/images/items/right_arm/whips.png?1', image_mini:'/images/items/right_arm/mini/whips.png?1', characterClass:'adventurer', bonus:{skills:{reflex:5}}, set:{}, sellable:true, damage:{damage_min:30, damage_max:46}, sub_type:'hand'};
    PK_S3_TEST.items[47] = {item_id:47, nshort:'pillow', name:'Подушка', type:'right_arm', level:45, price:450, image:'/images/items/right_arm/pillow.png?1', image_mini:'/images/items/right_arm/mini/pillow.png?1', set:{key:'set_sleeper', name:'Набор сони'}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:0, damage_max:1}, sub_type:'hand'};
    PK_S3_TEST.items[48] = {item_id:48, nshort:'bowie_xmas', name:'Рождественский нож', type:'right_arm', level:1, price:512, image:'/images/items/right_arm/bowie_xmas.png?1', image_mini:'/images/items/right_arm/mini/bowie_xmas.png?1', bonus:{skills:{appearance:2}}, set:{}, traderlevel:100, auctionable:true, tradeable:true, sellable:true, damage:{damage_min:1, damage_max:2}, sub_type:'hand'};

    PK_S3_TEST.items[50] = {item_id:50, nshort:'goldensable', name:'Золотая сабля', type:'right_arm', level:70, price:22500, image:'/images/items/right_arm/goldensable.png?1', image_mini:'/images/items/right_arm/mini/goldensable.png?1', bonus:{skills:{aim:4, punch:8}}, set:{key:'gold_set', name:'Золотой набор'}, traderlevel:100, tradeable:true, damage:{damage_min:101, damage_max:149}, sub_type:'hand'};
    PK_S3_TEST.items[51] = {item_id:51, nshort:'fakegoldensable', name:'Дубликат золотой сабли', type:'right_arm', level:80, price:10500, image:'/images/items/right_arm/fakegoldensable.png?1', image_mini:'/images/items/right_arm/mini/fakegoldensable.png?1', bonus:{skills:{aim:2, punch:5}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, traderlevel:100, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:81, damage_max:119}, sub_type:'hand'};
    PK_S3_TEST.items[52] = {item_id:52, nshort:'greenhorn_axe', name:'Топор следопыта', type:'right_arm', level:6, price:550, image:'/images/items/right_arm/greenhorn_axe.png?1', image_mini:'/images/items/right_arm/mini/greenhorn_axe.png?1', bonus:{skills:{punch:1}}, set:{key:'greenhorn_set', name:'Набор чечако'}, sellable:true, damage:{damage_min:6, damage_max:14}, sub_type:'hand'};
PK_S3_TEST.items[53] = {item_id:53, nshort:'xmas_rod', name:'Розга', type:'right_arm', level:0, price:250, image:'/images/items/right_arm/xmas_rod.png?1', image_mini:'/images/items/right_arm/mini/xmas_rod.png?1', bonus:{skills:{appearance:-2, aim:2}}, set:{}, traderlevel:1, sellable:true, damage:{damage_min:1, damage_max:7}, sub_type:'hand'};

    PK_S3_TEST.items[55] = {item_id:55, nshort:'bouquet', name:'Букет', type:'right_arm', level:1, price:22, image:'/images/items/right_arm/bouquet.png?1', image_mini:'/images/items/right_arm/mini/bouquet.png?1', set:{}, sellable:true, damage:{damage_min:0, damage_max:0}, sub_type:'hand'};

    PK_S3_TEST.items[57] = {item_id:57, nshort:'hacketts_pickaxe', name:'Кирка Хэккета', type:'right_arm', level:10, price:75, image:'/images/items/right_arm/hacketts_pickaxe.png?1', image_mini:'/images/items/right_arm/mini/hacketts_pickaxe.png?1', bonus:{skills:{punch:2, build:1}}, set:{}, damage:{damage_min:8, damage_max:20}, sub_type:'hand'};
    PK_S3_TEST.items[58] = {item_id:58, nshort:'collector_saber', name:'Сабля Плюшкина', type:'right_arm', level:100, price:10000, image:'/images/items/right_arm/collector_saber.png?1', image_mini:'/images/items/right_arm/mini/collector_saber.png?1', bonus:{skills:{animal:15, hide:15}, attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{key:'collector_set', name:'Набор коллекционера'}, damage:{damage_min:75, damage_max:175}, sub_type:'hand'};
    PK_S3_TEST.items[59] = {item_id:59, nshort:'sam_hawkens_knive', name:'Sam Hawken\'s knife', type:'right_arm', level:70, price:10000, image:'/images/items/right_arm/sam_hawkens_knive.png?1', image_mini:'/images/items/right_arm/mini/sam_hawkens_knive.png?1', bonus:{skills:{trade:20}, attributes:{}, fortbattle:{offense:1, defense:1}, fortbattlesector:{damage:1, offense:1, defense:1}}, set:{}, traderlevel:100, tradeable:true, damage:{damage_min:110, damage_max:140}, sub_type:'hand'};

    PK_S3_TEST.items[100] = {item_id:100, nshort:'stone_left', name:'Stone', type:'left_arm', level:1, price:0, image:'/images/items/left_arm/stone_left.png?1', image_mini:'/images/items/left_arm/mini/stone_left.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, auctionable:true, sellable:true, damage:{damage_min:50, damage_max:110}};     PK_S3_TEST.items[101] = {item_id:101, nshort:'bow_rusty', name:'Трухлявый лук', type:'left_arm', level:5, price:400, image:'/images/items/left_arm/bow_rusty.png?1', image_mini:'/images/items/left_arm/mini/bow_rusty.png?1', set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:50, damage_max:130}};
    PK_S3_TEST.items[102] = {item_id:102, nshort:'bow_normal', name:'Лук', type:'left_arm', level:10, price:650, image:'/images/items/left_arm/bow_normal.png?1', image_mini:'/images/items/left_arm/mini/bow_normal.png?1', set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:70, damage_max:150}};
    PK_S3_TEST.items[103] = {item_id:103, nshort:'bow_best', name:'Точный лук', type:'left_arm', level:13, price:1275, image:'/images/items/left_arm/bow_best.png?1', image_mini:'/images/items/left_arm/mini/bow_best.png?1', set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:100, damage_max:188}};
    PK_S3_TEST.items[104] = {item_id:104, nshort:'crossbow_rusty', name:'Трухлявый арбалет', type:'left_arm', level:10, price:520, image:'/images/items/left_arm/crossbow_rusty.png?1', image_mini:'/images/items/left_arm/mini/crossbow_rusty.png?1', set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:75, damage_max:129}};
    PK_S3_TEST.items[105] = {item_id:105, nshort:'crossbow_normal', name:'Арбалет', type:'left_arm', level:20, price:755, image:'/images/items/left_arm/crossbow_normal.png?1', image_mini:'/images/items/left_arm/mini/crossbow_normal.png?1', set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:90, damage_max:150}};
    PK_S3_TEST.items[106] = {item_id:106, nshort:'crossbow_best', name:'Точный арбалет', type:'left_arm', level:23, price:1600, image:'/images/items/left_arm/crossbow_best.png?1', image_mini:'/images/items/left_arm/mini/crossbow_best.png?1', set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:120, damage_max:192}};
    PK_S3_TEST.items[107] = {item_id:107, nshort:'arkebuse_rusty', name:'Ржавая пищаль', type:'left_arm', level:18, price:684, image:'/images/items/left_arm/arkebuse_rusty.png?1', image_mini:'/images/items/left_arm/mini/arkebuse_rusty.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:80, damage_max:160}};
    PK_S3_TEST.items[108] = {item_id:108, nshort:'arkebuse_normal', name:'Пищаль', type:'left_arm', level:30, price:1070, image:'/images/items/left_arm/arkebuse_normal.png?1', image_mini:'/images/items/left_arm/mini/arkebuse_normal.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:90, damage_max:190}};
    PK_S3_TEST.items[109] = {item_id:109, nshort:'arkebuse_best', name:'Точная пищаль', type:'left_arm', level:33, price:2444, image:'/images/items/left_arm/arkebuse_best.png?1', image_mini:'/images/items/left_arm/mini/arkebuse_best.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:112, damage_max:232}};
    PK_S3_TEST.items[110] = {item_id:110, nshort:'blunderbuss_rusty', name:'Ржавое охотничье ружьё', type:'left_arm', level:20, price:775, image:'/images/items/left_arm/blunderbuss_rusty.png?1', image_mini:'/images/items/left_arm/mini/blunderbuss_rusty.png?1', set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:1, damage_max:256}};
    PK_S3_TEST.items[111] = {item_id:111, nshort:'blunderbuss_normal', name:'Охотничье ружьё', type:'left_arm', level:35, price:1300, image:'/images/items/left_arm/blunderbuss_normal.png?1', image_mini:'/images/items/left_arm/mini/blunderbuss_normal.png?1', set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:1, damage_max:300}};
    PK_S3_TEST.items[112] = {item_id:112, nshort:'blunderbuss_best', name:'Точное охотничье ружьё', type:'left_arm', level:38, price:2950, image:'/images/items/left_arm/blunderbuss_best.png?1', image_mini:'/images/items/left_arm/mini/blunderbuss_best.png?1', set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:1, damage_max:360}};
    PK_S3_TEST.items[113] = {item_id:113, nshort:'musket_rusty', name:'Ржавый мушкет', type:'left_arm', level:25, price:920, image:'/images/items/left_arm/musket_rusty.png?1', image_mini:'/images/items/left_arm/mini/musket_rusty.png?1', set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:83, damage_max:193}};
    PK_S3_TEST.items[114] = {item_id:114, nshort:'musket_normal', name:'Мушкет', type:'left_arm', level:40, price:1580, image:'/images/items/left_arm/musket_normal.png?1', image_mini:'/images/items/left_arm/mini/musket_normal.png?1', set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:100, damage_max:220}};
    PK_S3_TEST.items[115] = {item_id:115, nshort:'musket_best', name:'Точный мушкет', type:'left_arm', level:43, price:3850, image:'/images/items/left_arm/musket_best.png?1', image_mini:'/images/items/left_arm/mini/musket_best.png?1', set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:126, damage_max:266}};
    PK_S3_TEST.items[116] = {item_id:116, nshort:'flint_rusty', name:'Ржавый дробовик', type:'left_arm', level:35, price:1350, image:'/images/items/left_arm/flint_rusty.png?1', image_mini:'/images/items/left_arm/mini/flint_rusty.png?1', set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:120, damage_max:192}};
    PK_S3_TEST.items[117] = {item_id:117, nshort:'flint_normal', name:'Дробовик', type:'left_arm', level:50, price:2440, image:'/images/items/left_arm/flint_normal.png?1', image_mini:'/images/items/left_arm/mini/flint_normal.png?1', set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:135, damage_max:225}};
    PK_S3_TEST.items[118] = {item_id:118, nshort:'flint_best', name:'Точный дробовик', type:'left_arm', level:53, price:6300, image:'/images/items/left_arm/flint_best.png?1', image_mini:'/images/items/left_arm/mini/flint_best.png?1', set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:168, damage_max:268}};
    PK_S3_TEST.items[119] = {item_id:119, nshort:'shotgun_rusty', name:'Ржавая винтовка', type:'left_arm', level:40, price:1600, image:'/images/items/left_arm/shotgun_rusty.png?1', image_mini:'/images/items/left_arm/mini/shotgun_rusty.png?1', set:{}, traderlevel:11, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:1, damage_max:242}};
    PK_S3_TEST.items[120] = {item_id:120, nshort:'shotgun_normal', name:'Винтовка', type:'left_arm', level:55, price:3000, image:'/images/items/left_arm/shotgun_normal.png?1', image_mini:'/images/items/left_arm/mini/shotgun_normal.png?1', set:{}, traderlevel:11, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:1, damage_max:380}};
    PK_S3_TEST.items[121] = {item_id:121, nshort:'shotgun_best', name:'Точная винтовка', type:'left_arm', level:58, price:7000, image:'/images/items/left_arm/shotgun_best.png?1', image_mini:'/images/items/left_arm/mini/shotgun_best.png?1', set:{}, traderlevel:11, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:1, damage_max:444}};
    PK_S3_TEST.items[122] = {item_id:122, nshort:'percussion_rusty', name:'Ржавый карабин', type:'left_arm', level:45, price:2000, image:'/images/items/left_arm/percussion_rusty.png?1', image_mini:'/images/items/left_arm/mini/percussion_rusty.png?1', set:{}, traderlevel:12, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:126, damage_max:226}};
    PK_S3_TEST.items[123] = {item_id:123, nshort:'percussion_normal', name:'Карабин', type:'left_arm', level:60, price:3800, image:'/images/items/left_arm/percussion_normal.png?1', image_mini:'/images/items/left_arm/mini/percussion_normal.png?1', set:{}, traderlevel:12, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:150, damage_max:250}};
    PK_S3_TEST.items[124] = {item_id:124, nshort:'percussion_best', name:'Точный карабин', type:'left_arm', level:63, price:8800, image:'/images/items/left_arm/percussion_best.png?1', image_mini:'/images/items/left_arm/mini/percussion_best.png?1', set:{}, traderlevel:12, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:172, damage_max:292}};
    PK_S3_TEST.items[125] = {item_id:125, nshort:'breechloader_rusty', name:'Ржавая казнозарядка', type:'left_arm', level:55, price:3150, image:'/images/items/left_arm/breechloader_rusty.png?1', image_mini:'/images/items/left_arm/mini/breechloader_rusty.png?1', set:{}, traderlevel:14, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:160, damage_max:232}};
    PK_S3_TEST.items[126] = {item_id:126, nshort:'breechloader_normal', name:'Казнозарядка', type:'left_arm', level:70, price:6000, image:'/images/items/left_arm/breechloader_normal.png?1', image_mini:'/images/items/left_arm/mini/breechloader_normal.png?1', set:{}, traderlevel:14, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:190, damage_max:250}};
    PK_S3_TEST.items[127] = {item_id:127, nshort:'breechloader_best', name:'Точная казнозарядка', type:'left_arm', level:73, price:12600, image:'/images/items/left_arm/breechloader_best.png?1', image_mini:'/images/items/left_arm/mini/breechloader_best.png?1', set:{}, traderlevel:14, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:200, damage_max:296}};
    PK_S3_TEST.items[128] = {item_id:128, nshort:'winchester_rusty', name:'Ржавый винчестер', type:'left_arm', level:60, price:3900, image:'/images/items/left_arm/winchester_rusty.png?1', image_mini:'/images/items/left_arm/mini/winchester_rusty.png?1', set:{}, traderlevel:15, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:160, damage_max:252}};
    PK_S3_TEST.items[129] = {item_id:129, nshort:'winchester_normal', name:'Винчестер', type:'left_arm', level:75, price:7600, image:'/images/items/left_arm/winchester_normal.png?1', image_mini:'/images/items/left_arm/mini/winchester_normal.png?1', set:{}, traderlevel:15, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:180, damage_max:280}};
    PK_S3_TEST.items[130] = {item_id:130, nshort:'winchester_best', name:'Точный винчестер', type:'left_arm', level:78, price:15400, image:'/images/items/left_arm/winchester_best.png?1', image_mini:'/images/items/left_arm/mini/winchester_best.png?1', set:{}, traderlevel:15, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:200, damage_max:312}};

    PK_S3_TEST.items[132] = {item_id:132, nshort:'bear', name:'Медвежонок', type:'left_arm', level:45, price:2600, image:'/images/items/left_arm/bear.png?1', image_mini:'/images/items/left_arm/mini/bear.png?1', set:{key:'set_sleeper', name:'Набор сони'}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:0, damage_max:1}};
    PK_S3_TEST.items[133] = {item_id:133, nshort:'muzzleloader_bowie', name:'Дульнозарядное ружьё Бови', type:'left_arm', level:30, price:1480, image:'/images/items/left_arm/muzzleloader_bowie.png?1', image_mini:'/images/items/left_arm/mini/muzzleloader_bowie.png?1', set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:145, damage_max:155}};

PK_S3_TEST.items[135] = {item_id:135, nshort:'elephantgun', name:'Ружьё на слона', type:'left_arm', level:40, price:12480, image:'/images/items/left_arm/elephantgun.png?1', image_mini:'/images/items/left_arm/mini/elephantgun.png?1', set:{}, traderlevel:1, sellable:true};
    PK_S3_TEST.items[136] = {item_id:136, nshort:'golden_rifle', name:'Золотой винчестер', type:'left_arm', level:75, price:65480, image:'/images/items/left_arm/golden_rifle.png?1', image_mini:'/images/items/left_arm/mini/golden_rifle.png?1', bonus:{attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}, fortbattle:{offense:3, defense:3}, fortbattlesector:{damage:15, offense:2, defense:2}}, set:{key:'gold_set', name:'Золотой набор'}, sellable:true, damage:{damage_min:232, damage_max:348}};
    PK_S3_TEST.items[137] = {item_id:137, nshort:'deathsythe', name:'Коса Смерти', type:'left_arm', level:50, price:17400, image:'/images/items/left_arm/deathsythe.png?1', image_mini:'/images/items/left_arm/mini/deathsythe.png?1', bonus:{attributes:{charisma:1, dexterity:1, flexibility:1, strength:1}}, set:{key:'season_set', name:'Праздничный наряд'}, sellable:true, damage:{damage_min:42, damage_max:158}};
    
    PK_S3_TEST.items[139] = {item_id:139, nshort:'high_wall', name:'Винчестер Хай-Волл 1885', type:'left_arm', level:1, price:13400, image:'/images/items/left_arm/high_wall.png?1', image_mini:'/images/items/left_arm/mini/high_wall.png?1', set:{}, traderlevel:100, tradeable:true, damage:{damage_min:200, damage_max:400}}; 

    PK_S3_TEST.items[140] = {item_id:140, nshort:'collector_rifle', name:'Ружьё Плюшкина', type:'left_arm', level:100, price:10000, image:'/images/items/left_arm/collector_rifle.png?1', image_mini:'/images/items/left_arm/mini/collector_rifle.png?1', bonus:{skills:{repair:15, health:15}, attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{key:'collector_set', name:'Набор коллекционера'}, traderlevel:100, tradeable:true, damage:{damage_min:100, damage_max:300}};

    PK_S3_TEST.items[200] = {item_id:200, nshort:'band_red', name:'Красная бандана', type:'head', level:1, price:4, image:'/images/items/head/band_red.png?1', image_mini:'/images/items/head/mini/band_red.png?1', bonus:{skills:{trade:1, tough:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[201] = {item_id:201, nshort:'band_green', name:'Зелёная бандана', type:'head', level:2, price:4, image:'/images/items/head/band_green.png?1', image_mini:'/images/items/head/mini/band_green.png?1', bonus:{skills:{trade:1, dodge:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[202] = {item_id:202, nshort:'band_blue', name:'Синяя бандана', type:'head', level:2, price:4, image:'/images/items/head/band_blue.png?1', image_mini:'/images/items/head/mini/band_blue.png?1', bonus:{skills:{trade:1, finger_dexterity:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[203] = {item_id:203, nshort:'band_yellow', name:'Жёлтая бандана', type:'head', level:2, price:4, image:'/images/items/head/band_yellow.png?1', image_mini:'/images/items/head/mini/band_yellow.png?1', bonus:{skills:{trade:2}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[204] = {item_id:204, nshort:'band_brown', name:'Коричневая бандана', type:'head', level:3, price:18, image:'/images/items/head/band_brown.png?1', image_mini:'/images/items/head/mini/band_brown.png?1', bonus:{skills:{trade:1, swim:1, health:2}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[205] = {item_id:205, nshort:'band_black', name:'Чёрная бандана', type:'head', level:3, price:18, image:'/images/items/head/band_black.png?1', image_mini:'/images/items/head/mini/band_black.png?1', bonus:{skills:{trade:2, repair:2}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[206] = {item_id:206, nshort:'slouch_cap_grey', name:'Серая кепка', type:'head', level:3, price:46, image:'/images/items/head/slouch_cap_grey.png?1', image_mini:'/images/items/head/mini/slouch_cap_grey.png?1', bonus:{skills:{tough:5}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[207] = {item_id:207, nshort:'slouch_cap_brown', name:'Коричневая кепка', type:'head', level:5, price:112, image:'/images/items/head/slouch_cap_brown.png?1', image_mini:'/images/items/head/mini/slouch_cap_brown.png?1', bonus:{skills:{ride:3, tough:6}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[208] = {item_id:208, nshort:'slouch_cap_black', name:'Чёрная кепка', type:'head', level:5, price:112, image:'/images/items/head/slouch_cap_black.png?1', image_mini:'/images/items/head/mini/slouch_cap_black.png?1', bonus:{skills:{leadership:3, pitfall:3, tough:3}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[209] = {item_id:209, nshort:'slouch_cap_fine', name:'Знатная кепка', type:'head', level:6, price:520, image:'/images/items/head/slouch_cap_fine.png?1', image_mini:'/images/items/head/mini/slouch_cap_fine.png?1', bonus:{skills:{tactic:4, aim:4, reflex:4, tough:6}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[210] = {item_id:210, nshort:'cap_grey', name:'Серая шапка', type:'head', level:4, price:90, image:'/images/items/head/cap_grey.png?1', image_mini:'/images/items/head/mini/cap_grey.png?1', bonus:{skills:{swim:8}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[211] = {item_id:211, nshort:'cap_red', name:'Красная шапка', type:'head', level:5, price:175, image:'/images/items/head/cap_red.png?1', image_mini:'/images/items/head/mini/cap_red.png?1', bonus:{skills:{swim:6, endurance:5}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[213] = {item_id:213, nshort:'cap_blue', name:'Синяя шапка', type:'head', level:5, price:175, image:'/images/items/head/cap_blue.png?1', image_mini:'/images/items/head/mini/cap_blue.png?1', bonus:{skills:{swim:6, pitfall:5}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[212] = {item_id:212, nshort:'cap_green', name:'Зелёная шапка', type:'head', level:5, price:175, image:'/images/items/head/cap_green.png?1', image_mini:'/images/items/head/mini/cap_green.png?1', bonus:{skills:{swim:6}, attributes:{flexibility:1}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[213] = {item_id:213, nshort:'cap_blue', name:'Синяя шапка', type:'head', level:5, price:175, image:'/images/items/head/cap_blue.png?1', image_mini:'/images/items/head/mini/cap_blue.png?1', bonus:{skills:{pitfall:5, swim:6}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};    
    PK_S3_TEST.items[214] = {item_id:214, nshort:'cap_yellow', name:'Жёлтая шапка', type:'head', level:5, price:175, image:'/images/items/head/cap_yellow.png?1', image_mini:'/images/items/head/mini/cap_yellow.png?1', bonus:{skills:{appearance:5, swim:6}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[215] = {item_id:215, nshort:'cap_brown', name:'Коричневая шапка', type:'head', level:6, price:300, image:'/images/items/head/cap_brown.png?1', image_mini:'/images/items/head/mini/cap_brown.png?1', bonus:{skills:{swim:10, tough:4}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[216] = {item_id:216, nshort:'cap_black', name:'Чёрная шапка', type:'head', level:6, price:300, image:'/images/items/head/cap_black.png?1', image_mini:'/images/items/head/mini/cap_black.png?1', bonus:{skills:{tactic:4, finger_dexterity:4, swim:6}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[217] = {item_id:217, nshort:'cap_fine', name:'Знатная шапка', type:'head', level:8, price:1100, image:'/images/items/head/cap_fine.png?1', image_mini:'/images/items/head/mini/cap_fine.png?1', bonus:{skills:{animal:5, shot:5, swim:10, tough:5}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[218] = {item_id:218, nshort:'slouch_hat_grey', name:'Серая панама', type:'head', level:7, price:220, image:'/images/items/head/slouch_hat_grey.png?1', image_mini:'/images/items/head/mini/slouch_hat_grey.png?1', bonus:{skills:{pitfall:12}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[219] = {item_id:219, nshort:'slouch_hat_brown', name:'Коричневая панама', type:'head', level:9, price:520, image:'/images/items/head/slouch_hat_brown.png?1', image_mini:'/images/items/head/mini/slouch_hat_brown.png?1', bonus:{skills:{pitfall:9, dodge:4, punch:5}}, set:{key:'set_farmer', name:'Набор фермера'}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[220] = {item_id:220, nshort:'slouch_hat_black', name:'Чёрная панама', type:'head', level:9, price:520, image:'/images/items/head/slouch_hat_black.png?1', image_mini:'/images/items/head/mini/slouch_hat_black.png?1', bonus:{skills:{tactic:4, pitfall:9}, attributes:{dexterity:1}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[221] = {item_id:221, nshort:'slouch_hat_fine', name:'Знатная панама', type:'head', level:12, price:1920, image:'/images/items/head/slouch_hat_fine.png?1', image_mini:'/images/items/head/mini/slouch_hat_fine.png?1', bonus:{skills:{leadership:6, pitfall:10, reflex:6, endurance:6}, attributes:{dexterity:1}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[222] = {item_id:222, nshort:'bowler_grey', name:'Серый котелок', type:'head', level:10, price:420, image:'/images/items/head/bowler_grey.png?1', image_mini:'/images/items/head/mini/bowler_grey.png?1', bonus:{skills:{trade:11}, attributes:{charisma:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[223] = {item_id:223, nshort:'bowler_brown', name:'Коричневый котелок', type:'head', level:12, price:808, image:'/images/items/head/bowler_brown.png?1', image_mini:'/images/items/head/mini/bowler_brown.png?1', bonus:{skills:{trade:11, reflex:5, build:6}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[224] = {item_id:224, nshort:'bowler_black', name:'Чёрный котелок', type:'head', level:12, price:808, image:'/images/items/head/bowler_black.png?1', image_mini:'/images/items/head/mini/bowler_black.png?1', bonus:{skills:{trade:11, shot:6}, attributes:{charisma:1}}, set:{key:'set_quackery', name:'Набор знахаря'}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[225] = {item_id:225, nshort:'bowler_fine', name:'Знатный котелок', type:'head', level:15, price:1850, image:'/images/items/head/bowler_fine.png?1', image_mini:'/images/items/head/mini/bowler_fine.png?1', bonus:{skills:{trade:11, repair:5, ride:5, tough:6}, attributes:{charisma:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[226] = {item_id:226, nshort:'cloth_hat_grey', name:'Шляпа из серого фетра', type:'head', level:14, price:655, image:'/images/items/head/cloth_hat_grey.png?1', image_mini:'/images/items/head/mini/cloth_hat_grey.png?1', bonus:{skills:{aim:10, health:10}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[227] = {item_id:227, nshort:'cloth_hat_brown', name:'Шляпа из коричневого фетра', type:'head', level:20, price:1270, image:'/images/items/head/cloth_hat_brown.png?1', image_mini:'/images/items/head/mini/cloth_hat_brown.png?1', bonus:{skills:{aim:7, swim:7, health:13}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[228] = {item_id:228, nshort:'cloth_hat_black', name:'Шляпа из чёрного фетра', type:'head', level:20, price:1270, image:'/images/items/head/cloth_hat_black.png?1', image_mini:'/images/items/head/mini/cloth_hat_black.png?1', bonus:{skills:{appearance:7, aim:13, health:7}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[229] = {item_id:229, nshort:'cloth_hat_fine', name:'Знатная фетровая шляпа', type:'head', level:22, price:3900, image:'/images/items/head/cloth_hat_fine.png?1', image_mini:'/images/items/head/mini/cloth_hat_fine.png?1', bonus:{skills:{tactic:8, aim:9, dodge:8, health:9}, attributes:{dexterity:1, strength:1}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[230] = {item_id:230, nshort:'cylinder_grey', name:'Серый цилиндр', type:'head', level:18, price:1270, image:'/images/items/head/cylinder_grey.png?1', image_mini:'/images/items/head/mini/cylinder_grey.png?1', bonus:{skills:{leadership:14, finger_dexterity:13}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[231] = {item_id:231, nshort:'cylinder_red', name:'Красный цилиндр', type:'head', level:24, price:1900, image:'/images/items/head/cylinder_red.png?1', image_mini:'/images/items/head/mini/cylinder_red.png?1', bonus:{skills:{leadership:10, finger_dexterity:9, punch:8}, attributes:{strength:1}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[232] = {item_id:232, nshort:'cylinder_green', name:'Зелёный цилиндр', type:'head', level:24, price:1900, image:'/images/items/head/cylinder_green.png?1', image_mini:'/images/items/head/mini/cylinder_green.png?1', bonus:{skills:{leadership:10, finger_dexterity:9, hide:8}, attributes:{flexibility:1}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[233] = {item_id:233, nshort:'cylinder_blue', name:'Синий цилиндр', type:'head', level:24, price:1900, image:'/images/items/head/cylinder_blue.png?1', image_mini:'/images/items/head/mini/cylinder_blue.png?1', bonus:{skills:{leadership:10, finger_dexterity:12}, attributes:{dexterity:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[234] = {item_id:234, nshort:'cylinder_yellow', name:'Жёлтый цилиндр', type:'head', level:24, price:1900, image:'/images/items/head/cylinder_yellow.png?1', image_mini:'/images/items/head/mini/cylinder_yellow.png?1', bonus:{skills:{leadership:13, finger_dexterity:9}, attributes:{charisma:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[235] = {item_id:235, nshort:'cylinder_brown', name:'Коричневый цилиндр', type:'head', level:25, price:2700, image:'/images/items/head/cylinder_brown.png?1', image_mini:'/images/items/head/mini/cylinder_brown.png?1', bonus:{skills:{leadership:10, finger_dexterity:9, ride:9, health:8}}, set:{key:'set_gentleman', name:'Набор джентльмена'}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[236] = {item_id:236, nshort:'cylinder_black', name:'Чёрный цилиндр', type:'head', level:25, price:2700, image:'/images/items/head/cylinder_black.png?1', image_mini:'/images/items/head/mini/cylinder_black.png?1', bonus:{skills:{leadership:13, finger_dexterity:13}, attributes:{charisma:1, dexterity:1}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[237] = {item_id:237, nshort:'cylinder_fine', name:'Цилиндр Линкольна', type:'head', level:27, price:5400, image:'/images/items/head/cylinder_fine.png?1', image_mini:'/images/items/head/mini/cylinder_fine.png?1', bonus:{skills:{leadership:13, finger_dexterity:12, ride:8, build:9}, attributes:{charisma:1, dexterity:1}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[238] = {item_id:238, nshort:'leather_hat_grey', name:'Серая шляпа', type:'head', level:24, price:2000, image:'/images/items/head/leather_hat_grey.png?1', image_mini:'/images/items/head/mini/leather_hat_grey.png?1', bonus:{skills:{animal:11, reflex:12}, attributes:{charisma:1, flexibility:1}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[239] = {item_id:239, nshort:'leather_hat_brown', name:'Коричневая шляпа', type:'head', level:28, price:3500, image:'/images/items/head/leather_hat_brown.png?1', image_mini:'/images/items/head/mini/leather_hat_brown.png?1', bonus:{skills:{animal:11, reflex:12, punch:10}, attributes:{flexibility:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[240] = {item_id:240, nshort:'leather_hat_black', name:'Чёрная шляпа', type:'head', level:28, price:3500, image:'/images/items/head/leather_hat_black.png?1', image_mini:'/images/items/head/mini/leather_hat_black.png?1', bonus:{skills:{animal:11, repair:10, reflex:12}, attributes:{charisma:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[241] = {item_id:241, nshort:'leather_hat_fine', name:'Знатная шляпа', type:'head', level:30, price:4100, image:'/images/items/head/leather_hat_fine.png?1', image_mini:'/images/items/head/mini/leather_hat_fine.png?1', bonus:{skills:{animal:14, aim:8, reflex:15, tough:9}, attributes:{charisma:1, flexibility:1}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[242] = {item_id:242, nshort:'stetson_grey', name:'Серый стетсон', type:'head', level:30, price:2555, image:'/images/items/head/stetson_grey.png?1', image_mini:'/images/items/head/mini/stetson_grey.png?1', bonus:{skills:{finger_dexterity:14, health:13}, attributes:{dexterity:1, strength:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[243] = {item_id:243, nshort:'stetson_brown', name:'Коричневый стетсон', type:'head', level:33, price:4500, image:'/images/items/head/stetson_brown.png?1', image_mini:'/images/items/head/mini/stetson_brown.png?1', bonus:{skills:{finger_dexterity:13, dodge:12, health:13}, attributes:{strength:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[244] = {item_id:244, nshort:'stetson_black', name:'Чёрный стетсон', type:'head', level:33, price:4500, image:'/images/items/head/stetson_black.png?1', image_mini:'/images/items/head/mini/stetson_black.png?1', bonus:{skills:{leadership:12, finger_dexterity:13, health:13}, attributes:{dexterity:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[245] = {item_id:245, nshort:'stetson_fine', name:'Знатный стетсон', type:'head', level:36, price:7100, image:'/images/items/head/stetson_fine.png?1', image_mini:'/images/items/head/mini/stetson_fine.png?1', bonus:{skills:{trade:9, finger_dexterity:16, swim:8, health:16}, attributes:{dexterity:1, strength:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[246] = {item_id:246, nshort:'xmas_hat', name:'Рождественский колпак', type:'head', level:1, price:50, image:'/images/items/head/xmas_hat.png?1', image_mini:'/images/items/head/mini/xmas_hat.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[247] = {item_id:247, nshort:'southcap', name:'Фуражка', type:'head', level:20, price:800, image:'/images/items/head/southcap.png?1', image_mini:'/images/items/head/mini/southcap.png?1', characterClass:'soldier', bonus:{skills:{pitfall:5, punch:11}}, set:{}, sellable:true};
    PK_S3_TEST.items[248] = {item_id:248, nshort:'adventurerhat', name:'Шляпа авантюриста', type:'head', level:22, price:2980, image:'/images/items/head/adventurerhat.png?1', image_mini:'/images/items/head/mini/adventurerhat.png?1', characterClass:'adventurer', bonus:{skills:{hide:6, ride:8, tough:10}, attributes:{dexterity:3}}, set:{}, sellable:true};
    PK_S3_TEST.items[249] = {item_id:249, nshort:'fedora_black', name:'Шляпа дуэлянта', type:'head', level:22, price:1700, image:'/images/items/head/fedora_black.png?1', image_mini:'/images/items/head/mini/fedora_black.png?1', characterClass:'duelist', bonus:{skills:{shot:10, aim:6}, attributes:{charisma:3}}, set:{}, sellable:true};
    PK_S3_TEST.items[250] = {item_id:250, nshort:'feather_hat_brown', name:'Шляпа трудяги', type:'head', level:18, price:1460, image:'/images/items/head/feather_hat_brown.png?1', image_mini:'/images/items/head/mini/feather_hat_brown.png?1', characterClass:'worker', bonus:{skills:{dodge:5, reflex:4, endurance:3, tough:2}, attributes:{flexibility:3}}, set:{}, sellable:true};

    PK_S3_TEST.items[253] = {item_id:253, nshort:'indian_hat', name:'Индейское оперение', type:'head', level:51, price:3200, image:'/images/items/head/indian_hat.png?1', image_mini:'/images/items/head/mini/indian_hat.png?1', bonus:{skills:{appearance:11, leadership:12}, attributes:{charisma:2}}, set:{key:'set_indian', name:'Набор индейца'}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[254] = {item_id:254, nshort:'mexican_sombrero', name:'Сомбреро', type:'head', level:30, price:1270, image:'/images/items/head/mexican_sombrero.png?1', image_mini:'/images/items/head/mini/mexican_sombrero.png?1', bonus:{skills:{shot:6, health:6, tough:10}}, set:{key:'set_mexican', name:'Набор мексиканца'}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[256] = {item_id:256, nshort:'pilger_cap', name:'Монашеский чепец', type:'head', level:37, price:1270, image:'/images/items/head/pilger_cap.png?1', image_mini:'/images/items/head/mini/pilger_cap.png?1', characterSex:'female', bonus:{skills:{leadership:6, repair:6, endurance:10}}, set:{key:'set_pilgrim_female', name:'Набор монашки'}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[257] = {item_id:257, nshort:'pilger_hat', name:'Шляпа пастора', type:'head', level:37, price:1270, image:'/images/items/head/pilger_hat.png?1', image_mini:'/images/items/head/mini/pilger_hat.png?1', characterSex:'male', bonus:{skills:{trade:6, repair:6, health:10}}, set:{key:'set_pilgrim_male', name:'Набор проповедника'}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[258] = {item_id:258, nshort:'cylinder_xmas', name:'Шляпа снеговика', type:'head', level:30, price:2412, image:'/images/items/head/cylinder_xmas.png?1', image_mini:'/images/items/head/mini/cylinder_xmas.png?1', bonus:{attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{key:'season_set', name:'Праздничный наряд'}, traderlevel:100, tradeable:true, sellable:true};
    PK_S3_TEST.items[259] = {item_id:259, nshort:'dancer_hat', name:'Перо', type:'head', level:42, price:2500, image:'/images/items/head/dancer_hat.png?1', image_mini:'/images/items/head/mini/dancer_hat.png?1', characterSex:'female', bonus:{skills:{tactic:10, pitfall:8, aim:9}, attributes:{flexibility:1}}, set:{key:'set_dancer', name:'Набор танцовщицы'}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[261] = {item_id:261, nshort:'sleep_cap', name:'Ночной колпак', type:'head', level:45, price:1200, image:'/images/items/head/sleep_cap.png?1', image_mini:'/images/items/head/mini/sleep_cap.png?1', set:{key:'set_sleeper', name:'Набор сони'}, auctionable:true, dropable:true, sellable:true};
    PK_S3_TEST.items[262] = {item_id:262, nshort:'greenhorn_hat', name:'Подобранная шляпа', type:'head', level:4, price:515, image:'/images/items/head/greenhorn_hat.png?1', image_mini:'/images/items/head/mini/greenhorn_hat.png?1', bonus:{skills:{trade:3, tactic:3, pitfall:2}, attributes:{flexibility:1}}, set:{key:'greenhorn_set', name:'Набор чечако'}, sellable:true};
    PK_S3_TEST.items[263] = {item_id:263, nshort:'yang_hat', name:'Yang\'s Hat', type:'head', level:1, price:1000, image:'/images/items/head/yang_hat.png?1', image_mini:'/images/items/head/mini/yang_hat.png?1', bonus:{skills:{appearance:2, finger_dexterity:2}, attributes:{charisma:1}, fortbattle:{}, fortbattlesector:{}}, set:{}, traderlevel:66, tradeable:true};
    PK_S3_TEST.items[264] = {item_id:264, nshort:'collector_hat', name:'Шляпа Плюшкина', type:'head', level:100, price:10000, image:'/images/items/head/collector_hat.png?1', image_mini:'/images/items/head/mini/collector_hat.png?1', bonus:{skills:{finger_dexterity:15, endurance:15}, attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{key:'collector_set', name:'Набор коллекционера'}, traderlevel:66, tradeable:true};

PK_S3_TEST.items[299] = {item_id:299, nshort:'band_grey', name:'Серая бандана', type:'head', level:1, price:2, image:'/images/items/head/band_grey.png?1', image_mini:'/images/items/head/mini/band_grey.png?1', bonus:{skills:{trade:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[300] = {item_id:300, nshort:'tatter_grey', name:'Серые лохмотья', type:'body', level:1, price:2, image:'/images/items/body/tatter_grey.png?1', image_mini:'/images/items/body/mini/tatter_grey.png?1', bonus:{skills:{pitfall:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[301] = {item_id:301, nshort:'tatter_red', name:'Красные лохмотья', type:'body', level:1, price:12, image:'/images/items/body/tatter_red.png?1', image_mini:'/images/items/body/mini/tatter_red.png?1', bonus:{skills:{pitfall:1, build:2}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[302] = {item_id:302, nshort:'tatter_green', name:'Зелёные лохмотья', type:'body', level:1, price:12, image:'/images/items/body/tatter_green.png?1', image_mini:'/images/items/body/mini/tatter_green.png?1', bonus:{skills:{pitfall:1, ride:2}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[303] = {item_id:303, nshort:'tatter_blue', name:'Синие лохмотья', type:'body', level:1, price:12, image:'/images/items/body/tatter_blue.png?1', image_mini:'/images/items/body/mini/tatter_blue.png?1', bonus:{skills:{pitfall:3}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[304] = {item_id:304, nshort:'tatter_yellow', name:'Жёлтые лохмотья', type:'body', level:1, price:12, image:'/images/items/body/tatter_yellow.png?1', image_mini:'/images/items/body/mini/tatter_yellow.png?1', bonus:{skills:{pitfall:1, leadership:2}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[305] = {item_id:305, nshort:'tatter_brown', name:'Коричневые лохмотья', type:'body', level:2, price:38, image:'/images/items/body/tatter_brown.png?1', image_mini:'/images/items/body/mini/tatter_brown.png?1', bonus:{skills:{pitfall:1, reflex:2, punch:2}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[306] = {item_id:306, nshort:'tatter_black', name:'Чёрные лохмотья', type:'body', level:2, price:38, image:'/images/items/body/tatter_black.png?1', image_mini:'/images/items/body/mini/tatter_black.png?1', bonus:{skills:{pitfall:3, tactic:2}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[307] = {item_id:307, nshort:'poncho_grey', name:'Серое пончо', type:'body', level:3, price:38, image:'/images/items/body/poncho_grey.png?1', image_mini:'/images/items/body/mini/poncho_grey.png?1', bonus:{skills:{dodge:5}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[308] = {item_id:308, nshort:'poncho_red', name:'Красное пончо', type:'body', level:4, price:80, image:'/images/items/body/poncho_red.png?1', image_mini:'/images/items/body/mini/poncho_red.png?1', bonus:{skills:{dodge:3, tough:4}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[309] = {item_id:309, nshort:'poncho_green', name:'Зелёное пончо', type:'body', level:4, price:80, image:'/images/items/body/poncho_green.png?1', image_mini:'/images/items/body/mini/poncho_green.png?1', bonus:{skills:{dodge:7}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[310] = {item_id:310, nshort:'poncho_blue', name:'Синее пончо', type:'body', level:4, price:80, image:'/images/items/body/poncho_blue.png?1', image_mini:'/images/items/body/mini/poncho_blue.png?1', bonus:{skills:{aim:4, dodge:3}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[311] = {item_id:311, nshort:'poncho_yellow', name:'Жёлтое пончо', type:'body', level:4, price:80, image:'/images/items/body/poncho_yellow.png?1', image_mini:'/images/items/body/mini/poncho_yellow.png?1', bonus:{skills:{trade:4, dodge:3}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[312] = {item_id:312, nshort:'poncho_brown', name:'Коричневое пончо', type:'body', level:5, price:174, image:'/images/items/body/poncho_brown.png?1', image_mini:'/images/items/body/mini/poncho_brown.png?1', bonus:{skills:{dodge:6, endurance:4}}, set:{key:'set_mexican', name:'Набор мексиканца'}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[313] = {item_id:313, nshort:'poncho_black', name:'Чёрное пончо', type:'body', level:5, price:174, image:'/images/items/body/poncho_black.png?1', image_mini:'/images/items/body/mini/poncho_black.png?1', bonus:{skills:{animal:4, shot:3, dodge:3}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[314] = {item_id:314, nshort:'poncho_fine', name:'Пончо Клинта', type:'body', level:6, price:800, image:'/images/items/body/poncho_fine.png?1', image_mini:'/images/items/body/mini/poncho_fine.png?1', bonus:{skills:{appearance:4, pitfall:4, dodge:7, build:5}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[315] = {item_id:315, nshort:'clothes_grey', name:'Серый костюм', type:'body', level:7, price:138, image:'/images/items/body/clothes_grey.png?1', image_mini:'/images/items/body/mini/clothes_grey.png?1', bonus:{skills:{leadership:9}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[316] = {item_id:316, nshort:'clothes_red', name:'Красный костюм', type:'body', level:8, price:260, image:'/images/items/body/clothes_red.png?1', image_mini:'/images/items/body/mini/clothes_red.png?1', bonus:{skills:{leadership:6, health:6}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[317] = {item_id:317, nshort:'clothes_green', name:'Зелёный костюм', type:'body', level:14, price:260, image:'/images/items/body/clothes_green.png?1', image_mini:'/images/items/body/mini/clothes_green.png?1', bonus:{skills:{leadership:6, hide:6}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[318] = {item_id:318, nshort:'clothes_blue', name:'Синий костюм', type:'body', level:8, price:260, image:'/images/items/body/clothes_blue.png?1', image_mini:'/images/items/body/mini/clothes_blue.png?1', bonus:{skills:{leadership:6, finger_dexterity:6}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[319] = {item_id:319, nshort:'clothes_yellow', name:'Жёлтый костюм', type:'body', level:8, price:260, image:'/images/items/body/clothes_yellow.png?1', image_mini:'/images/items/body/mini/clothes_yellow.png?1', bonus:{skills:{leadership:7}, attributes:{charisma:1}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[320] = {item_id:320, nshort:'clothes_brown', name:'Коричневый костюм', type:'body', level:8, price:425, image:'/images/items/body/clothes_brown.png?1', image_mini:'/images/items/body/mini/clothes_brown.png?1', bonus:{skills:{leadership:6, swim:5, build:4}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[321] = {item_id:321, nshort:'clothes_black', name:'Чёрный костюм', type:'body', level:8, price:425, image:'/images/items/body/clothes_black.png?1', image_mini:'/images/items/body/mini/clothes_black.png?1', bonus:{skills:{leadership:10, repair:5}}, set:{key:'set_farmer', name:'Набор фермера'}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[322] = {item_id:322, nshort:'clothes_fine', name:'Воскресный костюм', type:'body', level:10, price:1650, image:'/images/items/body/clothes_fine.png?1', image_mini:'/images/items/body/mini/clothes_fine.png?1', bonus:{skills:{leadership:6, finger_dexterity:5, reflex:6, endurance:6}, attributes:{charisma:1}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[323] = {item_id:323, nshort:'shirt_grey', name:'Серая рубашка', type:'body', level:12, price:310, image:'/images/items/body/shirt_grey.png?1', image_mini:'/images/items/body/mini/shirt_grey.png?1', bonus:{skills:{appearance:13}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[324] = {item_id:324, nshort:'shirt_red', name:'Красная рубашка', type:'body', level:13, price:560, image:'/images/items/body/shirt_red.png?1', image_mini:'/images/items/body/mini/shirt_red.png?1', bonus:{skills:{appearance:9, health:8}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[325] = {item_id:325, nshort:'shirt_green', name:'Зелёная рубашка', type:'body', level:13, price:560, image:'/images/items/body/shirt_green.png?1', image_mini:'/images/items/body/mini/shirt_green.png?1', bonus:{skills:{appearance:9, ride:8}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[326] = {item_id:326, nshort:'shirt_blue', name:'Синяя рубашка', type:'body', level:13, price:560, image:'/images/items/body/shirt_blue.png?1', image_mini:'/images/items/body/mini/shirt_blue.png?1', bonus:{skills:{appearance:9, aim:8}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[327] = {item_id:327, nshort:'shirt_yellow', name:'Жёлтая рубашка', type:'body', level:13, price:560, image:'/images/items/body/shirt_yellow.png?1', image_mini:'/images/items/body/mini/shirt_yellow.png?1', bonus:{skills:{appearance:13}, attributes:{charisma:1}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[328] = {item_id:328, nshort:'shirt_brown', name:'Коричневая рубашка', type:'body', level:14, price:800, image:'/images/items/body/shirt_brown.png?1', image_mini:'/images/items/body/mini/shirt_brown.png?1', bonus:{skills:{appearance:9, reflex:6, endurance:5}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[329] = {item_id:329, nshort:'shirt_black', name:'Чёрная рубашка', type:'body', level:14, price:800, image:'/images/items/body/shirt_black.png?1', image_mini:'/images/items/body/mini/shirt_black.png?1', bonus:{skills:{appearance:9, pitfall:6}, attributes:{charisma:1}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[330] = {item_id:330, nshort:'shirt_fine', name:'Знатная рубашка', type:'body', level:15, price:1305, image:'/images/items/body/shirt_fine.png?1', image_mini:'/images/items/body/mini/shirt_fine.png?1', bonus:{skills:{appearance:10, shot:7, ride:7, punch:6}, attributes:{charisma:1}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[331] = {item_id:331, nshort:'plaid_shirt_grey', name:'Серая клетчатая рубашка', type:'body', level:15, price:560, image:'/images/items/body/plaid_shirt_grey.png?1', image_mini:'/images/items/body/mini/plaid_shirt_grey.png?1', bonus:{skills:{punch:12}, attributes:{strength:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[332] = {item_id:332, nshort:'plaid_shirt_red', name:'Красная клетчатая рубашка', type:'body', level:16, price:800, image:'/images/items/body/plaid_shirt_red.png?1', image_mini:'/images/items/body/mini/plaid_shirt_red.png?1', bonus:{skills:{punch:15}, attributes:{strength:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[333] = {item_id:333, nshort:'plaid_shirt_green', name:'Зелёная клетчатая рубашка', type:'body', level:16, price:800, image:'/images/items/body/plaid_shirt_green.png?1', image_mini:'/images/items/body/mini/plaid_shirt_green.png?1', bonus:{skills:{swim:9, punch:11}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[334] = {item_id:334, nshort:'plaid_shirt_blue', name:'Синяя клетчатая рубашка', type:'body', level:16, price:800, image:'/images/items/body/plaid_shirt_blue.png?1', image_mini:'/images/items/body/mini/plaid_shirt_blue.png?1', bonus:{skills:{shot:9, punch:11}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[335] = {item_id:335, nshort:'plaid_shirt_yellow', name:'Жёлтая клетчатая рубашка', type:'body', level:16, price:800, image:'/images/items/body/plaid_shirt_yellow.png?1', image_mini:'/images/items/body/mini/plaid_shirt_yellow.png?1', bonus:{skills:{tactic:9, punch:11}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[336] = {item_id:336, nshort:'plaid_shirt_brown', name:'Коричневая клетчатая рубашка', type:'body', level:17, price:1200, image:'/images/items/body/plaid_shirt_brown.png?1', image_mini:'/images/items/body/mini/plaid_shirt_brown.png?1', bonus:{skills:{ride:7, punch:12}, attributes:{strength:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[337] = {item_id:337, nshort:'plaid_shirt_black', name:'Чёрная клетчатая рубашка', type:'body', level:17, price:1200, image:'/images/items/body/plaid_shirt_black.png?1', image_mini:'/images/items/body/mini/plaid_shirt_black.png?1', bonus:{skills:{tactic:7, repair:6, punch:11}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[338] = {item_id:338, nshort:'plaid_shirt_fine', name:'Рубаха лесоруба', type:'body', level:19, price:3900, image:'/images/items/body/plaid_shirt_fine.png?1', image_mini:'/images/items/body/mini/plaid_shirt_fine.png?1', bonus:{skills:{animal:8, pitfall:7, hide:8, punch:13}, attributes:{strength:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[339] = {item_id:339, nshort:'vest_grey', name:'Серая жилетка', type:'body', level:16, price:900, image:'/images/items/body/vest_grey.png?1', image_mini:'/images/items/body/mini/vest_grey.png?1', bonus:{skills:{shot:10, reflex:11}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[340] = {item_id:340, nshort:'vest_brown', name:'Коричневая жилетка', type:'body', level:20, price:1800, image:'/images/items/body/vest_brown.png?1', image_mini:'/images/items/body/mini/vest_brown.png?1', bonus:{skills:{shot:7, reflex:9, health:8}, attributes:{flexibility:1}}, set:{key:'set_quackery', name:'Набор знахаря'}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[341] = {item_id:341, nshort:'vest_black', name:'Чёрная жилетка', type:'body', level:20, price:1800, image:'/images/items/body/vest_black.png?1', image_mini:'/images/items/body/mini/vest_black.png?1', bonus:{skills:{leadership:8, shot:9, reflex:7}, attributes:{dexterity:1}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[342] = {item_id:342, nshort:'vest_fine', name:'Знатная жилетка', type:'body', level:20, price:5200, image:'/images/items/body/vest_fine.png?1', image_mini:'/images/items/body/mini/vest_fine.png?1', bonus:{skills:{trade:8, shot:10, reflex:10, endurance:9}, attributes:{dexterity:1, flexibility:1}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[343] = {item_id:343, nshort:'coat_grey', name:'Серая куртка', type:'body', level:20, price:1300, image:'/images/items/body/coat_grey.png?1', image_mini:'/images/items/body/mini/coat_grey.png?1', bonus:{skills:{pitfall:12, build:13}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[344] = {item_id:344, nshort:'coat_red', name:'Красная куртка', type:'body', level:20, price:2000, image:'/images/items/body/coat_red.png?1', image_mini:'/images/items/body/mini/coat_red.png?1', bonus:{skills:{pitfall:8, build:12}, attributes:{strength:2}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[345] = {item_id:345, nshort:'coat_green', name:'Зелёная куртка', type:'body', level:20, price:2000, image:'/images/items/body/coat_green.png?1', image_mini:'/images/items/body/mini/coat_green.png?1', bonus:{skills:{pitfall:8, hide:8, build:9}, attributes:{flexibility:1}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[346] = {item_id:346, nshort:'coat_blue', name:'Синяя куртка', type:'body', level:20, price:2000, image:'/images/items/body/coat_blue.png?1', image_mini:'/images/items/body/mini/coat_blue.png?1', bonus:{skills:{pitfall:11, build:9}, attributes:{dexterity:2}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[347] = {item_id:347, nshort:'coat_yellow', name:'Жёлтая куртка', type:'body', level:20, price:2000, image:'/images/items/body/coat_yellow.png?1', image_mini:'/images/items/body/mini/coat_yellow.png?1', bonus:{skills:{leadership:8, pitfall:8, build:9}, attributes:{charisma:1}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[348] = {item_id:348, nshort:'coat_brown', name:'Коричневая куртка', type:'body', level:21, price:2500, image:'/images/items/body/coat_brown.png?1', image_mini:'/images/items/body/mini/coat_brown.png?1', bonus:{skills:{pitfall:8, swim:9, build:12}, attributes:{strength:1}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[349] = {item_id:349, nshort:'coat_black', name:'Чёрная куртка', type:'body', level:21, price:2500, image:'/images/items/body/coat_black.png?1', image_mini:'/images/items/body/mini/coat_black.png?1', bonus:{skills:{animal:9, pitfall:11, build:9}, attributes:{dexterity:1}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[350] = {item_id:350, nshort:'coat_fine', name:'Знатная куртка', type:'body', level:22, price:6300, image:'/images/items/body/coat_fine.png?1', image_mini:'/images/items/body/mini/coat_fine.png?1', bonus:{skills:{appearance:9, pitfall:11, dodge:9, build:12}, attributes:{dexterity:1, strength:1}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[351] = {item_id:351, nshort:'jacket_grey', name:'Серый пиджак', type:'body', level:20, price:1850, image:'/images/items/body/jacket_grey.png?1', image_mini:'/images/items/body/mini/jacket_grey.png?1', bonus:{skills:{trade:10, reflex:9}, attributes:{charisma:1, flexibility:1}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[352] = {item_id:352, nshort:'jacket_brown', name:'Коричневый пиджак', type:'body', level:25, price:3500, image:'/images/items/body/jacket_brown.png?1', image_mini:'/images/items/body/mini/jacket_brown.png?1', bonus:{skills:{trade:10, reflex:9, tough:10}, attributes:{flexibility:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[353] = {item_id:353, nshort:'jacket_black', name:'Чёрный пиджак', type:'body', level:25, price:3500, image:'/images/items/body/jacket_black.png?1', image_mini:'/images/items/body/mini/jacket_black.png?1', bonus:{skills:{trade:10, aim:10, reflex:9}, attributes:{charisma:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[354] = {item_id:354, nshort:'jacket_fine', name:'Знатный пиджак', type:'body', level:27, price:7200, image:'/images/items/body/jacket_fine.png?1', image_mini:'/images/items/body/mini/jacket_fine.png?1', bonus:{skills:{trade:13, aim:9, reflex:13, punch:9}, attributes:{charisma:1, flexibility:1}}, set:{key:'set_gentleman', name:'Набор джентльмена'}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[355] = {item_id:355, nshort:'leather_coat_grey', name:'Серая кожанка', type:'body', level:25, price:2700, image:'/images/items/body/leather_coat_grey.png?1', image_mini:'/images/items/body/mini/leather_coat_grey.png?1', bonus:{skills:{hide:12, tough:13}, attributes:{flexibility:1, strength:1}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[356] = {item_id:356, nshort:'leather_coat_brown', name:'Коричневая кожанка', type:'body', level:28, price:5000, image:'/images/items/body/leather_coat_brown.png?1', image_mini:'/images/items/body/mini/leather_coat_brown.png?1', bonus:{skills:{hide:13, tough:13}, attributes:{flexibility:2, strength:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[357] = {item_id:357, nshort:'leather_coat_black', name:'Чёрная кожанка', type:'body', level:28, price:5000, image:'/images/items/body/leather_coat_black.png?1', image_mini:'/images/items/body/mini/leather_coat_black.png?1', bonus:{skills:{leadership:11, repair:12, hide:11, tough:12}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[358] = {item_id:358, nshort:'leather_coat_fine', name:'Знатная кожанка', type:'body', level:30, price:9000, image:'/images/items/body/leather_coat_fine.png?1', image_mini:'/images/items/body/mini/leather_coat_fine.png?1', bonus:{skills:{appearance:10, finger_dexterity:9, hide:15, tough:16}, attributes:{flexibility:1, strength:1}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[359] = {item_id:359, nshort:'greatcoat_grey', name:'Серое пальто', type:'body', level:33, price:3500, image:'/images/items/body/greatcoat_grey.png?1', image_mini:'/images/items/body/mini/greatcoat_grey.png?1', bonus:{skills:{tactic:15, shot:14}, attributes:{charisma:1, dexterity:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[360] = {item_id:360, nshort:'greatcoat_brown', name:'Коричневое пальто', type:'body', level:40, price:6280, image:'/images/items/body/greatcoat_brown.png?1', image_mini:'/images/items/body/mini/greatcoat_brown.png?1', bonus:{skills:{tactic:13, shot:13, ride:13, health:12}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[361] = {item_id:361, nshort:'greatcoat_fine', name:'Знатное пальто', type:'body', level:45, price:9500, image:'/images/items/body/greatcoat_fine.png?1', image_mini:'/images/items/body/mini/greatcoat_fine.png?1', bonus:{skills:{tactic:17, shot:16, ride:9, endurance:9}, attributes:{charisma:1, dexterity:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[362] = {item_id:362, nshort:'uniform', name:'Форма', type:'body', level:20, price:800, image:'/images/items/body/uniform.png?1', image_mini:'/images/items/body/mini/uniform.png?1', characterClass:'soldier', bonus:{skills:{appearance:2, hide:4}, attributes:{charisma:2}}, set:{}};
    PK_S3_TEST.items[363] = {item_id:363, nshort:'uniform_burned', name:'Палёная форма', type:'body', level:20, price:80, image:'/images/items/body/uniform_burned.png?1', image_mini:'/images/items/body/mini/uniform_burned.png?1', characterClass:'soldier', bonus:{skills:{appearance:-2, hide:4}, attributes:{charisma:2}}, set:{}};
    PK_S3_TEST.items[364] = {item_id:364, nshort:'greatcoat_black', name:'Чёрное пальто', type:'body', level:40, price:6280, image:'/images/items/body/greatcoat_black.png?1', image_mini:'/images/items/body/mini/greatcoat_black.png?1', bonus:{skills:{tactic:16, shot:15}, attributes:{charisma:2, dexterity:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[365] = {item_id:365, nshort:'adventurerjacket', name:'Жакет авантюриста', type:'body', level:40, price:1100, image:'/images/items/body/adventurerjacket.png?1', image_mini:'/images/items/body/mini/adventurerjacket.png?1', characterClass:'adventurer', bonus:{skills:{hide:4, ride:10, tough:9}}, set:{}, sellable:true};
    PK_S3_TEST.items[366] = {item_id:366, nshort:'vest_leather_brown', name:'Жилетка дуэлянта', type:'body', level:14, price:800, image:'/images/items/body/vest_leather_brown.png?1', image_mini:'/images/items/body/mini/vest_leather_brown.png?1', characterClass:'duelist', bonus:{skills:{dodge:8, reflex:7, punch:5}}, set:{}, sellable:true};
    PK_S3_TEST.items[367] = {item_id:367, nshort:'shirt_canvas', name:'Жакет трудяги', type:'body', level:8, price:425, image:'/images/items/body/shirt_canvas.png?1', image_mini:'/images/items/body/mini/shirt_canvas.png?1', characterClass:'worker', bonus:{skills:{animal:3, dodge:2}, attributes:{strength:2}}, set:{}, sellable:true};
    PK_S3_TEST.items[368] = {item_id:368, nshort:'dancer_dress', name:'Платье танцовщицы', type:'body', level:45, price:7500, image:'/images/items/body/dancer_dress.png?1', image_mini:'/images/items/body/mini/dancer_dress.png?1', characterSex:'female', bonus:{skills:{animal:10, finger_dexterity:11, shot:8, endurance:8}, attributes:{charisma:2}}, set:{key:'set_dancer', name:'Набор танцовщицы'}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[369] = {item_id:369, nshort:'indian_jacket', name:'Индейское платье', type:'body', level:55, price:7500, image:'/images/items/body/indian_jacket.png?1', image_mini:'/images/items/body/mini/indian_jacket.png?1', bonus:{skills:{pitfall:8, hide:9, punch:8}, attributes:{dexterity:1, flexibility:2}}, set:{key:'set_indian', name:'Набор индейца'}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[372] = {item_id:372, nshort:'pilger_dress', name:'Платье монашки', type:'body', level:38, price:2500, image:'/images/items/body/pilger_dress.png?1', image_mini:'/images/items/body/mini/pilger_dress.png?1', characterSex:'female', bonus:{skills:{dodge:10, build:8}, attributes:{strength:2}}, set:{key:'set_pilgrim_female', name:'Набор монашки'}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[373] = {item_id:373, nshort:'pilger_jacket', name:'Рубаха пастора', type:'body', level:38, price:2500, image:'/images/items/body/pilger_jacket.png?1', image_mini:'/images/items/body/mini/pilger_jacket.png?1', characterSex:'male', bonus:{skills:{hide:10, build:8}, attributes:{dexterity:2}}, set:{key:'set_pilgrim_male', name:'Набор проповедника'}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};

PK_S3_TEST.items[375] = {item_id:375, nshort:'night_shirt', name:'Ночная рубашка', type:'body', level:45, price:1500, image:'/images/items/body/night_shirt.png?1', image_mini:'/images/items/body/mini/night_shirt.png?1', set:{key:'set_sleeper', name:'Набор сони'}, auctionable:true, dropable:true, sellable:true};

    PK_S3_TEST.items[400] = {item_id:400, nshort:'ripped_shoes_grey', name:'Серые стоптанные башмаки', type:'foot', level:1, price:4, image:'/images/items/foot/ripped_shoes_grey.png?1', image_mini:'/images/items/foot/mini/ripped_shoes_grey.png?1', bonus:{skills:{repair:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[401] = {item_id:401, nshort:'ripped_shoes_brown', name:'Коричневые стоптанные башмаки', type:'foot', level:3, price:30, image:'/images/items/foot/ripped_shoes_brown.png?1', image_mini:'/images/items/foot/mini/ripped_shoes_brown.png?1', bonus:{skills:{swim:4, build:4}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[402] = {item_id:402, nshort:'ripped_shoes_black', name:'Чёрные стоптанные башмаки', type:'foot', level:3, price:30, image:'/images/items/foot/ripped_shoes_black.png?1', image_mini:'/images/items/foot/mini/ripped_shoes_black.png?1', bonus:{skills:{leadership:4, repair:4}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[403] = {item_id:403, nshort:'light_grey', name:'Серые матерчатые ботинки', type:'foot', level:5, price:70, image:'/images/items/foot/light_grey.png?1', image_mini:'/images/items/foot/mini/light_grey.png?1', bonus:{skills:{endurance:5}, attributes:{strength:1}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[404] = {item_id:404, nshort:'light_brown', name:'Коричневые матерчатые ботинки', type:'foot', level:9, price:170, image:'/images/items/foot/light_brown.png?1', image_mini:'/images/items/foot/mini/light_brown.png?1', bonus:{skills:{hide:5, endurance:3}, attributes:{strength:1}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[405] = {item_id:405, nshort:'light_black', name:'Чёрные матерчатые ботинки', type:'foot', level:9, price:170, image:'/images/items/foot/light_black.png?1', image_mini:'/images/items/foot/mini/light_black.png?1', bonus:{skills:{trade:5, shot:5, endurance:3}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[406] = {item_id:406, nshort:'light_fine', name:'Знатные матерчатые ботинки', type:'foot', level:11, price:1500, image:'/images/items/foot/light_fine.png?1', image_mini:'/images/items/foot/mini/light_fine.png?1', bonus:{skills:{appearance:6, pitfall:6, reflex:6, endurance:4}, attributes:{strength:1}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[407] = {item_id:407, nshort:'working_grey', name:'Серые рабочие ботинки', type:'foot', level:9, price:660, image:'/images/items/foot/working_grey.png?1', image_mini:'/images/items/foot/mini/working_grey.png?1', bonus:{skills:{pitfall:12}, attributes:{dexterity:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[408] = {item_id:408, nshort:'working_brown', name:'Коричневые рабочие ботинки', type:'foot', level:13, price:1200, image:'/images/items/foot/working_brown.png?1', image_mini:'/images/items/foot/mini/working_brown.png?1', bonus:{skills:{pitfall:8, ride:7, endurance:7}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[409] = {item_id:409, nshort:'working_black', name:'Чёрные рабочие ботинки', type:'foot', level:13, price:1200, image:'/images/items/foot/working_black.png?1', image_mini:'/images/items/foot/mini/working_black.png?1', bonus:{skills:{tactic:7, pitfall:10}, attributes:{dexterity:1}}, set:{key:'set_farmer', name:'Набор фермера'}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[410] = {item_id:410, nshort:'working_fine', name:'Знатные рабочие ботинки', type:'foot', level:15, price:4300, image:'/images/items/foot/working_fine.png?1', image_mini:'/images/items/foot/mini/working_fine.png?1', bonus:{skills:{trade:8, pitfall:11, dodge:8, punch:8}, attributes:{dexterity:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[411] = {item_id:411, nshort:'spur_grey', name:'Серые ботинки со шпорами', type:'foot', level:14, price:1400, image:'/images/items/foot/spur_grey.png?1', image_mini:'/images/items/foot/mini/spur_grey.png?1', bonus:{skills:{animal:7, shot:7}, attributes:{charisma:1, dexterity:1}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[412] = {item_id:412, nshort:'spur_brown', name:'Коричневые ботинки со шпорами', type:'foot', level:17, price:2450, image:'/images/items/foot/spur_brown.png?1', image_mini:'/images/items/foot/mini/spur_brown.png?1', bonus:{skills:{animal:7, shot:6, reflex:9, tough:9}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[413] = {item_id:413, nshort:'spur_black', name:'Чёрные ботинки со шпорами', type:'foot', level:17, price:2450, image:'/images/items/foot/spur_black.png?1', image_mini:'/images/items/foot/mini/spur_black.png?1', bonus:{skills:{animal:10, shot:9}, attributes:{charisma:1, dexterity:1}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[414] = {item_id:414, nshort:'spur_fine', name:'Знатные ботинки со шпорами', type:'foot', level:20, price:6230, image:'/images/items/foot/spur_fine.png?1', image_mini:'/images/items/foot/mini/spur_fine.png?1', bonus:{skills:{animal:11, shot:10, swim:8, health:8}, attributes:{charisma:1, dexterity:1}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[415] = {item_id:415, nshort:'boots_grey', name:'Серые сапоги', type:'foot', level:16, price:3000, image:'/images/items/foot/boots_grey.png?1', image_mini:'/images/items/foot/mini/boots_grey.png?1', bonus:{skills:{tactic:12, shot:12}, attributes:{charisma:1, dexterity:1}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[416] = {item_id:416, nshort:'boots_brown', name:'Коричневые сапоги', type:'foot', level:20, price:5100, image:'/images/items/foot/boots_brown.png?1', image_mini:'/images/items/foot/mini/boots_brown.png?1', bonus:{skills:{tactic:10, shot:9, dodge:12, tough:12}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[417] = {item_id:417, nshort:'boots_black', name:'Чёрные сапоги', type:'foot', level:20, price:5100, image:'/images/items/foot/boots_black.png?1', image_mini:'/images/items/foot/mini/boots_black.png?1', bonus:{skills:{tactic:12, shot:11}, attributes:{charisma:2, dexterity:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[418] = {item_id:418, nshort:'boots_fine', name:'Знатные сапоги', type:'foot', level:22, price:8870, image:'/images/items/foot/boots_fine.png?1', image_mini:'/images/items/foot/mini/boots_fine.png?1', bonus:{skills:{tactic:10, shot:9, hide:8, endurance:8}, attributes:{charisma:2, dexterity:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[419] = {item_id:419, nshort:'rider_grey', name:'Серые ковбойские сапоги', type:'foot', level:30, price:2600, image:'/images/items/foot/rider_grey.png?1', image_mini:'/images/items/foot/mini/rider_grey.png?1', bonus:{skills:{ride:15, punch:14}, attributes:{flexibility:1, strength:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[420] = {item_id:420, nshort:'rider_brown', name:'Коричневые ковбойские сапоги', type:'foot', level:33, price:6200, image:'/images/items/foot/rider_brown.png?1', image_mini:'/images/items/foot/mini/rider_brown.png?1', bonus:{skills:{ride:14, punch:13}, attributes:{flexibility:2, strength:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[421] = {item_id:421, nshort:'rider_black', name:'Чёрные ковбойские сапоги', type:'foot', level:33, price:6200, image:'/images/items/foot/rider_black.png?1', image_mini:'/images/items/foot/mini/rider_black.png?1', bonus:{skills:{animal:14, pitfall:13}, attributes:{charisma:2, dexterity:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[422] = {item_id:422, nshort:'rider_fine', name:'Знатные ковбойские сапоги', type:'foot', level:35, price:9500, image:'/images/items/foot/rider_fine.png?1', image_mini:'/images/items/foot/mini/rider_fine.png?1', bonus:{skills:{appearance:8, aim:8, ride:11, punch:10}, attributes:{flexibility:2, strength:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[423] = {item_id:423, nshort:'soldier_boots', name:'Солдатские сапоги', type:'foot', level:30, price:5500, image:'/images/items/foot/soldier_boots.png?1', image_mini:'/images/items/foot/mini/soldier_boots.png?1', characterClass:'soldier', bonus:{skills:{tactic:9, ride:12, health:12, tough:10}}, set:{}, sellable:true};

    PK_S3_TEST.items[425] = {item_id:425, nshort:'lace-up_shoes_brown', name:'Башмаки дуэлянта', type:'foot', level:13, price:1290, image:'/images/items/foot/lace-up_shoes_brown.png?1', image_mini:'/images/items/foot/mini/lace-up_shoes_brown.png?1', characterClass:'duelist', bonus:{skills:{appearance:4, shot:4, aim:5}, attributes:{dexterity:2}}, set:{}, sellable:true};
    PK_S3_TEST.items[426] = {item_id:426, nshort:'pilgrim_shoes_brown', name:'Ботинки трудяги', type:'foot', level:15, price:1530, image:'/images/items/foot/pilgrim_shoes_brown.png?1', image_mini:'/images/items/foot/mini/pilgrim_shoes_brown.png?1', characterClass:'worker', bonus:{skills:{repair:6, punch:6, build:4}, attributes:{strength:2}}, set:{}, sellable:true};
    PK_S3_TEST.items[427] = {item_id:427, nshort:'gentleman_shoes', name:'Знатные башмаки', type:'foot', level:45, price:5600, image:'/images/items/foot/gentleman_shoes.png?1', image_mini:'/images/items/foot/mini/gentleman_shoes.png?1', characterSex:'male', bonus:{skills:{appearance:8, reflex:9}, attributes:{dexterity:2, strength:2}}, set:{key:'set_gentleman', name:'Набор джентльмена'}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[428] = {item_id:428, nshort:'mexican_shoes', name:'Сандалии', type:'foot', level:28, price:2650, image:'/images/items/foot/mexican_shoes.png?1', image_mini:'/images/items/foot/mini/mexican_shoes.png?1', bonus:{skills:{animal:7, aim:6, dodge:8, health:8}}, set:{key:'set_mexican', name:'Набор мексиканца'}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[429] = {item_id:429, nshort:'mokassins', name:'Мокасины', type:'foot', level:45, price:5600, image:'/images/items/foot/mokassins.png?1', image_mini:'/images/items/foot/mini/mokassins.png?1', bonus:{skills:{tactic:9, hide:9, endurance:9}, attributes:{flexibility:2}}, set:{key:'set_indian', name:'Набор индейца'}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[431] = {item_id:431, nshort:'pilger_boots', name:'Монашеские туфли', type:'foot', level:39, price:2600, image:'/images/items/foot/pilger_boots.png?1', image_mini:'/images/items/foot/mini/pilger_boots.png?1', characterSex:'female', bonus:{skills:{finger_dexterity:8, shot:8, hide:6, build:7}}, set:{key:'set_pilgrim_female', name:'Набор монашки'}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[432] = {item_id:432, nshort:'pilger_shoes', name:'Туфли монаха', type:'foot', level:39, price:2600, image:'/images/items/foot/pilger_shoes.png?1', image_mini:'/images/items/foot/mini/pilger_shoes.png?1', characterSex:'male', bonus:{skills:{leadership:8, reflex:8, tough:6, build:7}}, set:{key:'set_pilgrim_male', name:'Набор проповедника'}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[433] = {item_id:433, nshort:'dancer_boots', name:'Сапожки на каблуках', type:'foot', level:41, price:4000, image:'/images/items/foot/dancer_boots.png?1', image_mini:'/images/items/foot/mini/dancer_boots.png?1', characterSex:'female', bonus:{skills:{repair:8, aim:9}, attributes:{charisma:1, dexterity:2}}, set:{key:'set_dancer', name:'Набор танцовщицы'}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[435] = {item_id:435, nshort:'quackery_shoes', name:'Знахарские башмаки', type:'foot', level:45, price:5600, image:'/images/items/foot/quackery_shoes.png?1', image_mini:'/images/items/foot/mini/quackery_shoes.png?1', bonus:{skills:{trade:9, swim:9, ride:9}, attributes:{flexibility:2}}, set:{key:'set_quackery', name:'Набор знахаря'}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[436] = {item_id:436, nshort:'slippers', name:'Тапочки', type:'foot', level:45, price:2000, image:'/images/items/foot/slippers.png?1', image_mini:'/images/items/foot/mini/slippers.png?1', set:{key:'set_sleeper', name:'Набор сони'}, auctionable:true, dropable:true, sellable:true};
    PK_S3_TEST.items[437] = {item_id:437, nshort:'thanksgiving_boots', name:'Сапоги со Дня благодарения', type:'foot', level:30, price:4600, image:'/images/items/foot/thanksgiving_boots.png?1', image_mini:'/images/items/foot/mini/thanksgiving_boots.png?1', bonus:{skills:{hide:6, tough:12}, attributes:{dexterity:2}}, set:{key:'season_set', name:'Праздничный наряд'}, traderlevel:99, tradeable:true, sellable:true};
    PK_S3_TEST.items[438] = {item_id:438, nshort:'greenhorn_shoes', name:'Башмаки на новенького', type:'foot', level:6, price:460, image:'/images/items/foot/greenhorn_shoes.png?1', image_mini:'/images/items/foot/mini/greenhorn_shoes.png?1', bonus:{skills:{finger_dexterity:3, reflex:6}, attributes:{dexterity:1}}, set:{key:'greenhorn_set', name:'Набор чечако'}, sellable:true};
    PK_S3_TEST.items[439] = {item_id:439, nshort:'collector_shoes', name:'Сапоги Плюшкина', type:'foot', level:100, price:10000, image:'/images/items/foot/collector_shoes.png?1', image_mini:'/images/items/foot/mini/collector_shoes.png?1', bonus:{skills:{pitfall:15, tough:15}, attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{key:'collector_set', name:'Набор коллекционера'}, traderlevel:99, tradeable:true};

PK_S3_TEST.items[500] = {item_id:500, nshort:'neckband_grey', name:'Серый шарф', type:'neck', level:0, price:10, image:'/images/items/neck/neckband_grey.png?1', image_mini:'images/items/neck/neckband_grey.png?1', bonus:{skills:{swim:2}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[501] = {item_id:501, nshort:'neckband_red', name:'Красный шарф', type:'neck', level:0, price:14, image:'/images/items/neck/neckband_red.png?1', image_mini:'images/items/neck/neckband_red.png?1', bonus:{skills:{swim:2, build:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[502] = {item_id:502, nshort:'neckband_green', name:'Зелёный шарф', type:'neck', level:0, price:14, image:'/images/items/neck/neckband_green.png?1', image_mini:'images/items/neck/neckband_green.png?1', bonus:{skills:{swim:3}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[503] = {item_id:503, nshort:'neckband_blue', name:'Синий шарф', type:'neck', level:0, price:14, image:'/images/items/neck/neckband_blue.png?1', image_mini:'images/items/neck/neckband_blue.png?1', bonus:{skills:{swim:2, aim:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[504] = {item_id:504, nshort:'neckband_yellow', name:'Жёлтый шарф', type:'neck', level:0, price:14, image:'/images/items/neck/neckband_yellow.png?1', image_mini:'images/items/neck/neckband_yellow.png?1', bonus:{skills:{swim:2, appearance:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[505] = {item_id:505, nshort:'neckband_brown', name:'Коричневый шарф', type:'neck', level:0, price:20, image:'/images/items/neck/neckband_brown.png?1', image_mini:'images/items/neck/neckband_brown.png?1', bonus:{skills:{swim:3, health:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[506] = {item_id:506, nshort:'neckband_black', name:'Чёрный шарф', type:'neck', level:0, price:20, image:'/images/items/neck/neckband_black.png?1', image_mini:'images/items/neck/neckband_black.png?1', bonus:{skills:{swim:2, tactic:1, shot:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[507] = {item_id:507, nshort:'indian_chain_grey', name:'Серое индейское ожерелье', type:'neck', level:0, price:35, image:'/images/items/neck/indian_chain_grey.png?1', image_mini:'images/items/neck/indian_chain_grey.png?1', bonus:{skills:{animal:5}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[508] = {item_id:508, nshort:'indian_chain_red', name:'Красное индейское ожерелье', type:'neck', level:0, price:75, image:'/images/items/neck/indian_chain_red.png?1', image_mini:'images/items/neck/indian_chain_red.png?1', bonus:{skills:{animal:5, endurance:2}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[509] = {item_id:509, nshort:'indian_chain_green', name:'Зелёное индейское ожерелье', type:'neck', level:0, price:75, image:'/images/items/neck/indian_chain_green.png?1', image_mini:'images/items/neck/indian_chain_green.png?1', bonus:{skills:{animal:5, ride:2}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[510] = {item_id:510, nshort:'indian_chain_blue', name:'Синее индейское ожерелье', type:'neck', level:0, price:75, image:'/images/items/neck/indian_chain_blue.png?1', image_mini:'images/items/neck/indian_chain_blue.png?1', bonus:{skills:{animal:5, finger_dexterity:2}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[511] = {item_id:511, nshort:'indian_chain_yellow', name:'Жёлтое индейское ожерелье', type:'neck', level:0, price:75, image:'/images/items/neck/indian_chain_yellow.png?1', image_mini:'images/items/neck/indian_chain_yellow.png?1', bonus:{skills:{animal:7}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[512] = {item_id:512, nshort:'indian_chain_fine', name:'Золотое индейское ожерелье', type:'neck', level:0, price:660, image:'/images/items/neck/indian_chain_fine.png?1', image_mini:'images/items/neck/indian_chain_fine.png?1', bonus:{skills:{animal:8, pitfall:3, hide:4, punch:4}}, set:{key:'set_indian', name:'Набор индейца'}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[513] = {item_id:513, nshort:'loop_grey', name:'Серая повязка', type:'neck', level:0, price:125, image:'/images/items/neck/loop_grey.png?1', image_mini:'images/items/neck/loop_grey.png?1', bonus:{skills:{shot:9}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[514] = {item_id:514, nshort:'loop_red', name:'Красная повязка', type:'neck', level:0, price:240, image:'/images/items/neck/loop_red.png?1', image_mini:'images/items/neck/loop_red.png?1', bonus:{skills:{shot:8, health:4}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[515] = {item_id:515, nshort:'loop_green', name:'Зелёная повязка', type:'neck', level:0, price:240, image:'/images/items/neck/loop_green.png?1', image_mini:'images/items/neck/loop_green.png?1', bonus:{skills:{shot:8, swim:4}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[516] = {item_id:516, nshort:'loop_blue', name:'Синяя повязка', type:'neck', level:0, price:240, image:'/images/items/neck/loop_blue.png?1', image_mini:'images/items/neck/loop_blue.png?1', bonus:{skills:{shot:12}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[517] = {item_id:517, nshort:'loop_yellow', name:'Жёлтая повязка', type:'neck', level:0, price:240, image:'/images/items/neck/loop_yellow.png?1', image_mini:'images/items/neck/loop_yellow.png?1', bonus:{skills:{trade:4, shot:8}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[518] = {item_id:518, nshort:'loop_brown', name:'Коричневая повязка', type:'neck', level:0, price:385, image:'/images/items/neck/loop_brown.png?1', image_mini:'images/items/neck/loop_brown.png?1', bonus:{skills:{shot:8, dodge:4, endurance:3}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[519] = {item_id:519, nshort:'loop_black', name:'Чёрная повязка', type:'neck', level:0, price:385, image:'/images/items/neck/loop_black.png?1', image_mini:'images/items/neck/loop_black.png?1', bonus:{skills:{appearance:3, shot:11}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[520] = {item_id:520, nshort:'fly_grey', name:'Серая бабочка', type:'neck', level:0, price:282, image:'/images/items/neck/fly_grey.png?1', image_mini:'images/items/neck/fly_grey.png?1', bonus:{skills:{build:13}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[521] = {item_id:521, nshort:'fly_red', name:'Красная бабочка', type:'neck', level:0, price:446, image:'/images/items/neck/fly_red.png?1', image_mini:'images/items/neck/fly_red.png?1', bonus:{skills:{build:11}, attributes:{strength:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[522] = {item_id:522, nshort:'fly_green', name:'Зелёная бабочка', type:'neck', level:0, price:446, image:'/images/items/neck/fly_green.png?1', image_mini:'images/items/neck/fly_green.png?1', bonus:{skills:{ride:6, build:11}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[523] = {item_id:523, nshort:'fly_blue', name:'Синяя бабочка', type:'neck', level:0, price:446, image:'/images/items/neck/fly_blue.png?1', image_mini:'images/items/neck/fly_blue.png?1', bonus:{skills:{aim:6, build:11}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[524] = {item_id:524, nshort:'fly_yellow', name:'Жёлтая бабочка', type:'neck', level:0, price:446, image:'/images/items/neck/fly_yellow.png?1', image_mini:'images/items/neck/fly_yellow.png?1', bonus:{skills:{animal:6, build:11}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[525] = {item_id:525, nshort:'fly_brown', name:'Коричневая бабочка', type:'neck', level:0, price:650, image:'/images/items/neck/fly_brown.png?1', image_mini:'images/items/neck/fly_brown.png?1', bonus:{skills:{hide:4, build:10}, attributes:{strength:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[526] = {item_id:526, nshort:'fly_black', name:'Чёрная бабочка', type:'neck', level:0, price:650, image:'/images/items/neck/fly_black.png?1', image_mini:'images/items/neck/fly_black.png?1', bonus:{skills:{trade:4, pitfall:4, build:11}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[527] = {item_id:527, nshort:'fly_fine', name:'Знатная бабочка', type:'neck', level:0, price:2200, image:'/images/items/neck/fly_fine.png?1', image_mini:'images/items/neck/fly_fine.png?1', bonus:{skills:{tactic:5, repair:6, dodge:6, build:11}, attributes:{strength:1}}, set:{key:'set_quackery', name:'Набор знахаря'}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[528] = {item_id:528, nshort:'cross_bronze', name:'Железный крест', type:'neck', level:0, price:730, image:'/images/items/neck/cross_bronze.png?1', image_mini:'images/items/neck/cross_bronze.png?1', bonus:{attributes:{charisma:1, dexterity:1, flexibility:1, strength:1}}, set:{key:'set_pilgrim_female', name:'Набор монашки'}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[529] = {item_id:529, nshort:'cross_silver', name:'Серебряный крест', type:'neck', level:0, price:1200, image:'/images/items/neck/cross_silver.png?1', image_mini:'images/items/neck/cross_silver.png?1', bonus:{attributes:{charisma:1, dexterity:1, flexibility:2, strength:1}}, set:{key:'set_pilgrim_male', name:'Набор проповедника'}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[530] = {item_id:530, nshort:'cross_gold', name:'Золотой крест', type:'neck', level:0, price:3400, image:'/images/items/neck/cross_gold.png?1', image_mini:'images/items/neck/cross_gold.png?1', bonus:{attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[531] = {item_id:531, nshort:'cravat_grey', name:'Серый галстук', type:'neck', level:0, price:820, image:'/images/items/neck/cravat_grey.png?1', image_mini:'images/items/neck/cravat_grey.png?1', bonus:{skills:{leadership:11, health:10}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[532] = {item_id:532, nshort:'cravat_red', name:'Красный галстук', type:'neck', level:0, price:1205, image:'/images/items/neck/cravat_red.png?1', image_mini:'images/items/neck/cravat_red.png?1', bonus:{skills:{leadership:8, health:7}, attributes:{strength:2}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[533] = {item_id:533, nshort:'cravat_green', name:'Зелёный галстук', type:'neck', level:0, price:1205, image:'/images/items/neck/cravat_green.png?1', image_mini:'images/items/neck/cravat_green.png?1', bonus:{skills:{leadership:8, reflex:9, health:8}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[534] = {item_id:534, nshort:'cravat_blue', name:'Синий галстук', type:'neck', level:0, price:1205, image:'/images/items/neck/cravat_blue.png?1', image_mini:'images/items/neck/cravat_blue.png?1', bonus:{skills:{leadership:8, shot:9, health:8}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[535] = {item_id:535, nshort:'cravat_yellow', name:'Жёлтый галстук', type:'neck', level:0, price:1205, image:'/images/items/neck/cravat_yellow.png?1', image_mini:'images/items/neck/cravat_yellow.png?1', bonus:{skills:{leadership:7, health:8}, attributes:{charisma:2}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[536] = {item_id:536, nshort:'cravat_brown', name:'Коричневый галстук', type:'neck', level:0, price:1500, image:'/images/items/neck/cravat_brown.png?1', image_mini:'images/items/neck/cravat_brown.png?1', bonus:{skills:{leadership:8, dodge:6, health:9}, attributes:{strength:1}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[537] = {item_id:537, nshort:'cravat_black', name:'Чёрный галстук', type:'neck', level:0, price:1500, image:'/images/items/neck/cravat_black.png?1', image_mini:'images/items/neck/cravat_black.png?1', bonus:{skills:{leadership:9, finger_dexterity:6, health:8}, attributes:{charisma:1}}, set:{key:'set_gentleman', name:'Набор джентльмена'}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[538] = {item_id:538, nshort:'cravat_fine', name:'Знатный галстук', type:'neck', level:0, price:4400, image:'/images/items/neck/cravat_fine.png?1', image_mini:'images/items/neck/cravat_fine.png?1', bonus:{skills:{leadership:10, pitfall:7, swim:8, health:10}, attributes:{charisma:1, strength:1}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[539] = {item_id:539, nshort:'bullet_metal', name:'Свинцовая пуля', type:'neck', level:0, price:1800, image:'/images/items/neck/bullet_metal.png?1', image_mini:'images/items/neck/bullet_metal.png?1', bonus:{attributes:{charisma:1, dexterity:1, flexibility:2, strength:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[540] = {item_id:540, nshort:'bullet_silver', name:'Серебряная пуля', type:'neck', level:0, price:3350, image:'/images/items/neck/bullet_silver.png?1', image_mini:'images/items/neck/bullet_silver.png?1', bonus:{attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[541] = {item_id:541, nshort:'bullet_gold', name:'Золотая пуля', type:'neck', level:0, price:6750, image:'/images/items/neck/bullet_gold.png?1', image_mini:'images/items/neck/bullet_gold.png?1', bonus:{attributes:{charisma:2, dexterity:3, flexibility:3, strength:3}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[542] = {item_id:542, nshort:'kerchief_grey', name:'Серый платок', type:'neck', level:0, price:2500, image:'/images/items/neck/kerchief_grey.png?1', image_mini:'images/items/neck/kerchief_grey.png?1', bonus:{skills:{appearance:12, finger_dexterity:13}, attributes:{charisma:1, dexterity:1}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[543] = {item_id:543, nshort:'kerchief_red', name:'Красный платок', type:'neck', level:0, price:3400, image:'/images/items/neck/kerchief_red.png?1', image_mini:'images/items/neck/kerchief_red.png?1', bonus:{skills:{appearance:13, finger_dexterity:13, build:14}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[544] = {item_id:544, nshort:'kerchief_green', name:'Зелёный платок', type:'neck', level:0, price:3400, image:'/images/items/neck/kerchief_green.png?1', image_mini:'images/items/neck/kerchief_green.png?1', bonus:{skills:{appearance:13, finger_dexterity:13, ride:14}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[545] = {item_id:545, nshort:'kerchief_blue', name:'Синий платок', type:'neck', level:0, price:3400, image:'/images/items/neck/kerchief_blue.png?1', image_mini:'images/items/neck/kerchief_blue.png?1', bonus:{skills:{appearance:13, finger_dexterity:12}, attributes:{dexterity:3}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[546] = {item_id:546, nshort:'kerchief_yellow', name:'Жёлтый платок', type:'neck', level:0, price:3400, image:'/images/items/neck/kerchief_yellow.png?1', image_mini:'images/items/neck/kerchief_yellow.png?1', bonus:{skills:{appearance:12, finger_dexterity:13}, attributes:{charisma:3}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[547] = {item_id:547, nshort:'kerchief_brown', name:'Коричневый платок', type:'neck', level:0, price:4360, image:'/images/items/neck/kerchief_brown.png?1', image_mini:'images/items/neck/kerchief_brown.png?1', bonus:{skills:{appearance:13, finger_dexterity:13, hide:9, punch:10}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[548] = {item_id:548, nshort:'kerchief_black', name:'Чёрный платок', type:'neck', level:0, price:4360, image:'/images/items/neck/kerchief_black.png?1', image_mini:'images/items/neck/kerchief_black.png?1', bonus:{skills:{appearance:12, finger_dexterity:13}, attributes:{charisma:2, dexterity:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[549] = {item_id:549, nshort:'bullchain_metal', name:'Железный бизон', type:'neck', level:0, price:2400, image:'/images/items/neck/bullchain_metal.png?1', image_mini:'images/items/neck/bullchain_metal.png?1', bonus:{attributes:{charisma:1, dexterity:2, flexibility:2, strength:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[550] = {item_id:550, nshort:'bullchain_silver', name:'Серебряный бизон', type:'neck', level:0, price:4490, image:'/images/items/neck/bullchain_silver.png?1', image_mini:'images/items/neck/bullchain_silver.png?1', bonus:{attributes:{charisma:3, dexterity:2, flexibility:2, strength:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[551] = {item_id:551, nshort:'bullchain_gold', name:'Золотой бизон', type:'neck', level:0, price:8300, image:'/images/items/neck/bullchain_gold.png?1', image_mini:'images/items/neck/bullchain_gold.png?1', bonus:{attributes:{charisma:3, dexterity:3, flexibility:3, strength:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[552] = {item_id:552, nshort:'talisman', name:'Талисман', type:'neck', level:0, price:1000, image:'/images/items/neck/talisman.png?1', image_mini:'images/items/neck/talisman.png?1', set:{}, traderlevel:11, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[553] = {item_id:553, nshort:'stonechain', name:'Каменный медальон', type:'neck', level:0, price:1000, image:'/images/items/neck/stonechain.png?1', image_mini:'images/items/neck/stonechain.png?1', set:{}, traderlevel:11, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[554] = {item_id:554, nshort:'southcross', name:'Медаль за мужество', type:'neck', level:0, price:650, image:'/images/items/neck/southcross.png?1', image_mini:'images/items/neck/southcross.png?1', characterClass:'soldier', bonus:{skills:{appearance:7, tactic:8, ride:4}}, set:{}, traderlevel:11, tradeable:true, sellable:true};
    PK_S3_TEST.items[555] = {item_id:555, nshort:'aztecchains', name:'Ожерелье ацтеков', type:'neck', level:0, price:1200, image:'/images/items/neck/aztecchains.png?1', image_mini:'images/items/neck/aztecchains.png?1', characterClass:'adventurer', bonus:{skills:{hide:9, ride:10, tough:8}}, set:{}, sellable:true};
    PK_S3_TEST.items[556] = {item_id:556, nshort:'arrowhead', name:'Наконечник стрелы', type:'neck', level:0, price:1150, image:'/images/items/neck/arrowhead.png?1', image_mini:'images/items/neck/arrowhead.png?1', characterClass:'duelist', bonus:{skills:{shot:7, aim:7}}, set:{}, sellable:true};
    PK_S3_TEST.items[557] = {item_id:557, nshort:'bone_necklace', name:'Костяное ожерелье', type:'neck', level:0, price:1700, image:'/images/items/neck/bone_necklace.png?1', image_mini:'images/items/neck/bone_necklace.png?1', characterClass:'worker', bonus:{skills:{appearance:3}, attributes:{strength:5}}, set:{}, sellable:true};

    PK_S3_TEST.items[561] = {item_id:561, nshort:'mexican_neck', name:'Мексиканский шарф', type:'neck', level:28, price:600, image:'/images/items/neck/mexican_neck.png?1', image_mini:'images/items/neck/mexican_neck.png?1', bonus:{skills:{punch:17}}, set:{key:'set_mexican', name:'Набор мексиканца'}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[566] = {item_id:566, nshort:'dancer_chain', name:'Жемчужное ожерелье', type:'neck', level:43, price:1800, image:'/images/items/neck/dancer_chain.png?1', image_mini:'images/items/neck/dancer_chain.png?1', characterSex:'female', bonus:{skills:{trade:9, leadership:8, pitfall:6}, attributes:{charisma:1}}, set:{key:'set_dancer', name:'Набор танцовщицы'}, auctionable:true, dropable:true, sellable:true};
    PK_S3_TEST.items[567] = {item_id:567, nshort:'amulett', name:'Сердечный амулет', type:'neck', level:30, price:2412, image:'/images/items/neck/amulett.png?1', image_mini:'images/items/neck/amulett.png?1', bonus:{skills:{appearance:15, animal:15, trade:15, leadership:15}}, set:{key:'season_set', name:'Праздничный наряд'}, traderlevel:100, tradeable:true, sellable:true};
    PK_S3_TEST.items[568] = {item_id:568, nshort:'teethchain', name:'Талисман от вурдалака', type:'neck', level:40, price:2012, image:'/images/items/neck/teethchain.png?1', image_mini:'images/items/neck/teethchain.png?1', bonus:{skills:{tactic:4, leadership:8, hide:4}, attributes:{charisma:3}}, set:{}, traderlevel:100, tradeable:true, sellable:true};
    PK_S3_TEST.items[569] = {item_id:569, nshort:'greenhorn_neck', name:'Платок от пыли', type:'neck', level:1, price:350, image:'/images/items/neck/greenhorn_neck.png?1', image_mini:'images/items/neck/greenhorn_neck.png?1', bonus:{skills:{hide:1, endurance:2}}, set:{key:'greenhorn_set', name:'Набор чечако'}, sellable:true};
    PK_S3_TEST.items[570] = {item_id:570, nshort:'xmas_schal', name:'Тёплый шарф', type:'neck', level:1, price:2010, image:'/images/items/neck/xmas_schal.png?1', image_mini:'images/items/neck/xmas_schal.png?1', bonus:{attributes:{charisma:1}}, set:{}, traderlevel:66, auctionable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[571] = {item_id:571, nshort:'geronimo_headband', name:'Бандана Джеронимо', type:'head', level:1, price:100, image:'/images/items/head/geronimo_headband.png?1', image_mini:'/images/items/head/mini/geronimo_headband.png?1', bonus:{skills:{tactic:10, leadership:10, health:10}}, set:{}, traderlevel:66, tradeable:true};
PK_S3_TEST.items[572] = {item_id:572, nshort:'scalp', name:'Скальп', type:'neck', level:1, price:10, image:'/images/items/neck/scalp.png?1', image_mini:'images/items/neck/scalp.png?1', bonus:{skills:{leadership:10, hide:10, endurance:10}}, set:{}, traderlevel:1, auctionable:true, dropable:true, sellable:true};
    PK_S3_TEST.items[573] = {item_id:573, nshort:'alienskin', name:'Кулон Пришельца', type:'neck', level:1, price:1000, image:'/images/items/neck/alienskin.png?1', image_mini:'images/items/neck/alienskin.png?1', bonus:{skills:{appearance:2, endurance:2}, attributes:{strength:1}, fortbattle:{}, fortbattlesector:{}}, set:{}, traderlevel:66, tradeable:true, sellable:true};
    PK_S3_TEST.items[574] = {item_id:574, nshort:'neckband_golddigger', name:'Платок золотоискателя', type:'neck', level:10, price:35, image:'/images/items/neck/neckband_golddigger.png?1', image_mini:'images/items/neck/neckband_golddigger.png?1', bonus:{skills:{trade:1, endurance:1, tough:1}}, set:{}, dropable:true, sellable:true};
    PK_S3_TEST.items[575] = {item_id:575, nshort:'collector_neck', name:'Ожерелье Плюшкина', type:'neck', level:100, price:10000, image:'/images/items/neck/collector_neck.png?1', image_mini:'images/items/neck/collector_neck.png?1', bonus:{skills:{tactic:15, ride:15}, attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{key:'collector_set', name:'Набор коллекционера'}, dropable:true};
    PK_S3_TEST.items[576] = {item_id:576, nshort:'roalstad_scarf', name:'Шаль Марии Роальстед', type:'neck', level:90, price:500, image:'/images/items/neck/roalstad_scarf.png?1', image_mini:'images/items/neck/roalstad_scarf.png?1', bonus:{skills:{appearance:12, trade:12, ride:16}, attributes:{charisma:3}, fortbattle:{defense:5}, fortbattlesector:{}}, set:{}, sellable:true};

    PK_S3_TEST.items[600] = {item_id:600, nshort:'donkey', name:'Осёл', type:'animal', level:1, price:250, image:'/images/items/animal/donkey.png?1', image_mini:'/images/items/animal/mini/donkey.png?1', speed:0.8, set:{key:'set_mexican', name:'Набор мексиканца'}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[601] = {item_id:601, nshort:'pony', name:'Пони', type:'animal', level:1, price:500, image:'/images/items/animal/pony.png?1', image_mini:'/images/items/animal/mini/pony.png?1', speed:0.666, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[602] = {item_id:602, nshort:'mustang', name:'Мустанг', type:'animal', level:1, price:850, image:'/images/items/animal/mustang.png?1', image_mini:'/images/items/animal/mini/mustang.png?1', speed:0.571, set:{key:'set_indian', name:'Набор индейца'}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[603] = {item_id:603, nshort:'berber', name:'Рысак', type:'animal', level:1, price:1250, image:'/images/items/animal/berber.png?1', image_mini:'/images/items/animal/mini/berber.png?1', speed:0.5, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[604] = {item_id:604, nshort:'araber', name:'Арабский скакун', type:'animal', level:1, price:2000, image:'/images/items/animal/araber.png?1', image_mini:'/images/items/animal/mini/araber.png?1', speed:0.444, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[605] = {item_id:605, nshort:'quarter', name:'Кватерхорс', type:'animal', level:1, price:2800, image:'/images/items/animal/quarter.png?1', image_mini:'/images/items/animal/mini/quarter.png?1', speed:0.4, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[606] = {item_id:606, nshort:'charriot', name:'Тележка', type:'animal', level:1, price:1500, image:'/images/items/animal/charriot.png?1', image_mini:'/images/items/animal/mini/charriot.png?1', speed:0.909, set:{}, traderlevel:66, tradeable:true, sellable:true};
    PK_S3_TEST.items[607] = {item_id:607, nshort:'young_stallion', name:'Жеребёнок', type:'animal', level:1, price:250, image:'/images/items/animal/young_stallion.png?1', image_mini:'/images/items/animal/mini/young_stallion.png?1', speed:0.8, set:{key:'greenhorn_set', name:'Набор чечако'}, traderlevel:66, tradeable:true, sellable:true};

    PK_S3_TEST.items[609] = {item_id:609, nshort:'xmas_slide', name:'Рождественские сани', type:'animal', level:1, price:550, image:'/images/items/animal/xmas_slide.png?1', image_mini:'/images/items/animal/mini/xmas_slide.png?1', speed:0.8, set:{key:'season_set', name:'Праздничный наряд'}, traderlevel:66, tradeable:true, sellable:true};
    PK_S3_TEST.items[610] = {item_id:610, nshort:'golden_donkey', name:'Бесценный осёл', type:'animal', level:1, price:15050, image:'/images/items/animal/golden_donkey.png?1', image_mini:'/images/items/animal/mini/golden_donkey.png?1', speed:0.4, bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, traderlevel:66, tradeable:true};

    PK_S3_TEST.items[612] = {item_id:612, nshort:'elephant', name:'Слон', type:'animal', level:1, price:75050, image:'/images/items/animal/elephant.png?1', image_mini:'/images/items/animal/mini/elephant.png?1', speed:0.4, set:{}, traderlevel:66, tradeable:true, sellable:true};
    PK_S3_TEST.items[613] = {item_id:613, nshort:'ostrich', name:'Ostrich', type:'animal', level:1, price:5050, image:'/images/items/animal/ostrich.png?1', image_mini:'/images/items/animal/mini/ostrich.png?1', speed:0.4, set:{}, traderlevel:66, tradeable:true};
    PK_S3_TEST.items[614] = {item_id:614, nshort:'turtle', name:'Черепаха', type:'animal', level:1, price:50, image:'/images/items/animal/turtle.png?1', image_mini:'/images/items/animal/mini/turtle.png?1', speed:0.909, set:{}, traderlevel:66, tradeable:true};
    PK_S3_TEST.items[615] = {item_id:615, nshort:'bison', name:'Бизон', type:'animal', level:1, price:500, image:'/images/items/animal/bison.png?1', image_mini:'/images/items/animal/mini/bison.png?1', speed:0.666, bonus:{skills:{tough:2}}, set:{}, traderlevel:66, tradeable:true};


PK_S3_TEST.items[700] = {item_id:700, nshort:'ham', name:'Свинина', type:'yield', level:0, price:10, image:'/images/items/yield/ham.png?1', image_mini:'images/items/yield/ham.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[701] = {item_id:701, nshort:'cereals', name:'Зерно', type:'yield', level:0, price:3, image:'/images/items/yield/cereals.png?1', image_mini:'images/items/yield/cereals.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[702] = {item_id:702, nshort:'tabacco', name:'Табак', type:'yield', level:0, price:5, image:'/images/items/yield/tabacco.png?1', image_mini:'images/items/yield/tabacco.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[703] = {item_id:703, nshort:'sugar', name:'Сахар', type:'yield', level:0, price:8, image:'/images/items/yield/sugar.png?1', image_mini:'images/items/yield/sugar.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[704] = {item_id:704, nshort:'cotton', name:'Хлопок', type:'yield', level:0, price:6, image:'/images/items/yield/cotton.png?1', image_mini:'images/items/yield/cotton.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[705] = {item_id:705, nshort:'trout', name:'Форель', type:'yield', level:0, price:4, image:'/images/items/yield/trout.png?1', image_mini:'images/items/yield/trout.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[706] = {item_id:706, nshort:'berrys', name:'Ягоды', type:'yield', level:0, price:4, image:'/images/items/yield/berrys.png?1', image_mini:'images/items/yield/berrys.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[707] = {item_id:707, nshort:'shearings', name:'Шерсть', type:'yield', level:0, price:8, image:'/images/items/yield/shearings.png?1', image_mini:'images/items/yield/shearings.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[708] = {item_id:708, nshort:'copper_pyrites', name:'Пирит', type:'yield', level:0, price:16, image:'/images/items/yield/copper_pyrites.png?1', image_mini:'images/items/yield/copper_pyrites.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[709] = {item_id:709, nshort:'turkey', name:'Индейка', type:'yield', level:0, price:14, image:'/images/items/yield/turkey.png?1', image_mini:'images/items/yield/turkey.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[710] = {item_id:710, nshort:'beef', name:'Говяжий бифштекс', type:'yield', level:0, price:24, image:'/images/items/yield/beef.png?1', image_mini:'images/items/yield/beef.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[711] = {item_id:711, nshort:'planks', name:'Дерево', type:'yield', level:0, price:16, image:'/images/items/yield/planks.png?1', image_mini:'images/items/yield/planks.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[712] = {item_id:712, nshort:'leather', name:'Кожа', type:'yield', level:0, price:16, image:'/images/items/yield/leather.png?1', image_mini:'images/items/yield/leather.png?1', set:{}, auctionable:true, sellable:true};

PK_S3_TEST.items[714] = {item_id:714, nshort:'beaver', name:'Бобровый мех', type:'yield', level:0, price:36, image:'/images/items/yield/beaver.png?1', image_mini:'images/items/yield/beaver.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[715] = {item_id:715, nshort:'fabric', name:'Рулон сукна', type:'yield', level:0, price:22, image:'/images/items/yield/fabric.png?1', image_mini:'images/items/yield/fabric.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[716] = {item_id:716, nshort:'stone', name:'Камни', type:'yield', level:0, price:10, image:'/images/items/yield/stone.png?1', image_mini:'images/items/yield/stone.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[717] = {item_id:717, nshort:'grund', name:'Лосось', type:'yield', level:0, price:14, image:'/images/items/yield/grund.png?1', image_mini:'images/items/yield/grund.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[718] = {item_id:718, nshort:'coyote', name:'Зуб койота', type:'yield', level:0, price:42, image:'/images/items/yield/coyote.png?1', image_mini:'images/items/yield/coyote.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[719] = {item_id:719, nshort:'cigar', name:'Сигары', type:'yield', level:0, price:24, image:'/images/items/yield/cigar.png?1', image_mini:'images/items/yield/cigar.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[720] = {item_id:720, nshort:'gems', name:'Полудрагоценные камни', type:'yield', level:0, price:70, image:'/images/items/yield/gems.png?1', image_mini:'images/items/yield/gems.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[721] = {item_id:721, nshort:'coal', name:'Уголь', type:'yield', level:0, price:20, image:'/images/items/yield/coal.png?1', image_mini:'images/items/yield/coal.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[722] = {item_id:722, nshort:'meal', name:'Горячая закуска', type:'yield', level:0, price:14, image:'/images/items/yield/meal.png?1', image_mini:'images/items/yield/meal.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[723] = {item_id:723, nshort:'ring', name:'Кольцо', type:'yield', level:0, price:160, image:'/images/items/yield/ring.png?1', image_mini:'images/items/yield/ring.png?1', set:{key:'set_pilgrim_female', name:'Набор монашки'}, auctionable:true, sellable:true};
PK_S3_TEST.items[724] = {item_id:724, nshort:'buffalo', name:'Шкура бизона', type:'yield', level:0, price:40, image:'/images/items/yield/buffalo.png?1', image_mini:'images/items/yield/buffalo.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[725] = {item_id:725, nshort:'silver', name:'Серебро', type:'yield', level:0, price:200, image:'/images/items/yield/silver.png?1', image_mini:'images/items/yield/silver.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[726] = {item_id:726, nshort:'indiangold', name:'Золото ацтеков', type:'yield', level:0, price:290, image:'/images/items/yield/indiangold.png?1', image_mini:'images/items/yield/indiangold.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[727] = {item_id:727, nshort:'medal', name:'Медаль за отвагу', type:'yield', level:0, price:500, image:'/images/items/yield/medal.png?1', image_mini:'images/items/yield/medal.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[728] = {item_id:728, nshort:'watch', name:'Карманные часы', type:'yield', level:0, price:210, image:'/images/items/yield/watch.png?1', image_mini:'images/items/yield/watch.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[729] = {item_id:729, nshort:'stolen_goods', name:'Контрабандный товар', type:'yield', level:0, price:110, image:'/images/items/yield/stolen_goods.png?1', image_mini:'images/items/yield/stolen_goods.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[730] = {item_id:730, nshort:'necklet', name:'Украшения', type:'yield', level:0, price:230, image:'/images/items/yield/necklet.png?1', image_mini:'images/items/yield/necklet.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[731] = {item_id:731, nshort:'grizzly', name:'Трофей', type:'yield', level:0, price:150, image:'/images/items/yield/grizzly.png?1', image_mini:'images/items/yield/grizzly.png?1', set:{}, auctionable:true, sellable:true};

PK_S3_TEST.items[733] = {item_id:733, nshort:'packet', name:'Пакет', type:'yield', level:0, price:32, image:'/images/items/yield/packet.png?1', image_mini:'images/items/yield/packet.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[734] = {item_id:734, nshort:'slicer', name:'Рубанок', type:'yield', level:0, price:44, image:'/images/items/yield/slicer.png?1', image_mini:'images/items/yield/slicer.png?1', set:{}, auctionable:true, sellable:true};

PK_S3_TEST.items[736] = {item_id:736, nshort:'spade', name:'Лопата', type:'yield', level:0, price:40, image:'/images/items/yield/spade.png?1', image_mini:'images/items/yield/spade.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[737] = {item_id:737, nshort:'dynamite', name:'Динамит', type:'yield', level:0, price:80, image:'/images/items/yield/dynamite.png?1', image_mini:'images/items/yield/dynamite.png?1', set:{}, auctionable:true, sellable:true};

PK_S3_TEST.items[739] = {item_id:739, nshort:'fence', name:'Колючая проволока', type:'yield', level:0, price:36, image:'/images/items/yield/fence.png?1', image_mini:'images/items/yield/fence.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[740] = {item_id:740, nshort:'horn', name:'Коровий рог', type:'yield', level:0, price:78, image:'/images/items/yield/horn.png?1', image_mini:'images/items/yield/horn.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[741] = {item_id:741, nshort:'pitcher', name:'Кувшин', type:'yield', level:0, price:24, image:'/images/items/yield/pitcher.png?1', image_mini:'images/items/yield/pitcher.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[742] = {item_id:742, nshort:'saw', name:'Пила', type:'yield', level:0, price:40, image:'/images/items/yield/saw.png?1', image_mini:'images/items/yield/saw.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[743] = {item_id:743, nshort:'poster', name:'Плакат', type:'yield', level:0, price:4, image:'/images/items/yield/poster.png?1', image_mini:'images/items/yield/poster.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[744] = {item_id:744, nshort:'newspaper', name:'Газета', type:'yield', level:0, price:6, image:'/images/items/yield/newspaper.png?1', image_mini:'images/items/yield/newspaper.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[745] = {item_id:745, nshort:'flour', name:'Мука', type:'yield', level:0, price:5, image:'/images/items/yield/flour.png?1', image_mini:'images/items/yield/flour.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[746] = {item_id:746, nshort:'beans', name:'Фасоль', type:'yield', level:0, price:6, image:'/images/items/yield/beans.png?1', image_mini:'images/items/yield/beans.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[747] = {item_id:747, nshort:'hammer', name:'Молоток', type:'yield', level:0, price:22, image:'/images/items/yield/hammer.png?1', image_mini:'images/items/yield/hammer.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[748] = {item_id:748, nshort:'corn', name:'Кукуруза', type:'yield', level:0, price:4, image:'/images/items/yield/corn.png?1', image_mini:'images/items/yield/corn.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[749] = {item_id:749, nshort:'rope', name:'Лассо', type:'yield', level:0, price:32, image:'/images/items/yield/rope.png?1', image_mini:'images/items/yield/rope.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[750] = {item_id:750, nshort:'nippers', name:'Наручники', type:'yield', level:0, price:58, image:'/images/items/yield/nippers.png?1', image_mini:'images/items/yield/nippers.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[751] = {item_id:751, nshort:'pipe', name:'Трубка мира', type:'yield', level:0, price:72, image:'/images/items/yield/pipe.png?1', image_mini:'images/items/yield/pipe.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[752] = {item_id:752, nshort:'oil', name:'Нефть', type:'yield', level:0, price:76, image:'/images/items/yield/oil.png?1', image_mini:'images/items/yield/oil.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[753] = {item_id:753, nshort:'pick', name:'Кирка', type:'yield', level:0, price:44, image:'/images/items/yield/pick.png?1', image_mini:'images/items/yield/pick.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[754] = {item_id:754, nshort:'horseshoe', name:'Подкова', type:'yield', level:0, price:30, image:'/images/items/yield/horseshoe.png?1', image_mini:'images/items/yield/horseshoe.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[755] = {item_id:755, nshort:'flag', name:'Флажок', type:'yield', level:0, price:32, image:'/images/items/yield/flag.png?1', image_mini:'images/items/yield/flag.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[756] = {item_id:756, nshort:'toolbox', name:'Ящик с инструментами', type:'yield', level:0, price:110, image:'/images/items/yield/toolbox.png?1', image_mini:'images/items/yield/toolbox.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[757] = {item_id:757, nshort:'feather', name:'Перо ворона', type:'yield', level:0, price:8, image:'/images/items/yield/feather.png?1', image_mini:'images/items/yield/feather.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[758] = {item_id:758, nshort:'flag_north', name:'Союзный флаг', type:'yield', level:0, price:86, image:'/images/items/yield/flag_north.png?1', image_mini:'images/items/yield/flag_north.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[759] = {item_id:759, nshort:'ticket', name:'Железнодорожный билет', type:'yield', level:0, price:34, image:'/images/items/yield/ticket.png?1', image_mini:'images/items/yield/ticket.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[760] = {item_id:760, nshort:'map', name:'Карта', type:'yield', level:0, price:32, image:'/images/items/yield/map.png?1', image_mini:'images/items/yield/map.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[761] = {item_id:761, nshort:'sledgehammer', name:'Кувалда', type:'yield', level:0, price:52, image:'/images/items/yield/sledgehammer.png?1', image_mini:'images/items/yield/sledgehammer.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[762] = {item_id:762, nshort:'flag_south', name:'Флаг конфедерации', type:'yield', level:0, price:86, image:'/images/items/yield/flag_south.png?1', image_mini:'images/items/yield/flag_south.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[763] = {item_id:763, nshort:'wolf', name:'Браслет из зубов', type:'yield', level:0, price:44, image:'/images/items/yield/wolf.png?1', image_mini:'images/items/yield/wolf.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[764] = {item_id:764, nshort:'shackle', name:'Кандалы', type:'yield', level:0, price:62, image:'/images/items/yield/shackle.png?1', image_mini:'images/items/yield/shackle.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[765] = {item_id:765, nshort:'sickle', name:'Серп', type:'yield', level:0, price:44, image:'/images/items/yield/sickle.png?1', image_mini:'images/items/yield/sickle.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[766] = {item_id:766, nshort:'water', name:'Стакан воды', type:'yield', level:0, price:6, image:'/images/items/yield/water.png?1', image_mini:'images/items/yield/water.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[767] = {item_id:767, nshort:'string', name:'Катушка проволоки', type:'yield', level:0, price:34, image:'/images/items/yield/string.png?1', image_mini:'images/items/yield/string.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[768] = {item_id:768, nshort:'hymnal', name:'Псалтырь', type:'yield', level:0, price:48, image:'/images/items/yield/hymnal.png?1', image_mini:'images/items/yield/hymnal.png?1', set:{key:'set_pilgrim_male', name:'Набор проповедника'}, auctionable:true, sellable:true};
PK_S3_TEST.items[769] = {item_id:769, nshort:'empty_bottle', name:'Пустая бутылка', type:'yield', level:0, price:2, image:'/images/items/yield/empty_bottle.png?1', image_mini:'images/items/yield/empty_bottle.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[770] = {item_id:770, nshort:'beer', name:'Пиво', type:'yield', level:0, price:0, image:'/images/items/yield/beer.png?1', image_mini:'images/items/yield/beer.png?1', set:{}};
PK_S3_TEST.items[771] = {item_id:771, nshort:'trap', name:'Капкан на бобра', type:'yield', level:0, price:50, image:'/images/items/yield/trap.png?1', image_mini:'images/items/yield/trap.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[772] = {item_id:772, nshort:'falcon', name:'Золотой сокол', type:'yield', level:0, price:0, image:'/images/items/yield/falcon.png?1', image_mini:'images/items/yield/falcon.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[773] = {item_id:773, nshort:'paper1', name:'Обрывок (I часть)', type:'yield', level:0, price:1400, image:'/images/items/yield/paper1.png?1', image_mini:'images/items/yield/paper1.png?1', set:{}, auctionable:true, dropable:true, sellable:true};
PK_S3_TEST.items[774] = {item_id:774, nshort:'paper2', name:'Обрывок (II часть)', type:'yield', level:0, price:590, image:'/images/items/yield/paper2.png?1', image_mini:'images/items/yield/paper2.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[775] = {item_id:775, nshort:'paper3', name:'Обрывок (III часть)', type:'yield', level:0, price:590, image:'/images/items/yield/paper3.png?1', image_mini:'images/items/yield/paper3.png?1', set:{}, sellable:true};
PK_S3_TEST.items[776] = {item_id:776, nshort:'kates_ring', name:'Кольцо Кейт', type:'yield', level:0, price:1000, image:'/images/items/yield/kates_ring.png?1', image_mini:'images/items/yield/kates_ring.png?1', set:{}, sellable:true};

PK_S3_TEST.items[778] = {item_id:778, nshort:'cooking_pot', name:'Кастрюля', type:'yield', level:0, price:22, image:'/images/items/yield/cooking_pot.png?1', image_mini:'images/items/yield/cooking_pot.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[779] = {item_id:779, nshort:'post_horn', name:'Почтовый рожок', type:'yield', level:0, price:60, image:'/images/items/yield/post_horn.png?1', image_mini:'images/items/yield/post_horn.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[780] = {item_id:780, nshort:'rounds', name:'Патроны', type:'yield', level:0, price:50, image:'/images/items/yield/rounds.png?1', image_mini:'images/items/yield/rounds.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[781] = {item_id:781, nshort:'documents', name:'Документы', type:'yield', level:0, price:120, image:'/images/items/yield/documents.png?1', image_mini:'images/items/yield/documents.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[782] = {item_id:782, nshort:'angle', name:'Удочка', type:'yield', level:0, price:42, image:'/images/items/yield/angle.png?1', image_mini:'images/items/yield/angle.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[783] = {item_id:783, nshort:'gold_sculpture', name:'Золотая статуэтка', type:'yield', level:0, price:144, image:'/images/items/yield/gold_sculpture.png?1', image_mini:'images/items/yield/gold_sculpture.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[784] = {item_id:784, nshort:'nails', name:'Гвозди', type:'yield', level:0, price:8, image:'/images/items/yield/nails.png?1', image_mini:'images/items/yield/nails.png?1', set:{}, auctionable:true, sellable:true};

PK_S3_TEST.items[786] = {item_id:786, nshort:'picture', name:'Картина', type:'yield', level:0, price:340, image:'/images/items/yield/picture.png?1', image_mini:'images/items/yield/picture.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[787] = {item_id:787, nshort:'saddle', name:'Седло', type:'yield', level:0, price:80, image:'/images/items/yield/saddle.png?1', image_mini:'images/items/yield/saddle.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[788] = {item_id:788, nshort:'bell', name:'Корабельный колокол', type:'yield', level:0, price:130, image:'/images/items/yield/bell.png?1', image_mini:'images/items/yield/bell.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[789] = {item_id:789, nshort:'coin', name:'Монета', type:'yield', level:0, price:2, image:'/images/items/yield/coin.png?1', image_mini:'images/items/yield/coin.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[790] = {item_id:790, nshort:'iron', name:'Железо', type:'yield', level:0, price:36, image:'/images/items/yield/iron.png?1', image_mini:'images/items/yield/iron.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[791] = {item_id:791, nshort:'orange', name:'Апельсины', type:'yield', level:0, price:8, image:'/images/items/yield/orange.png?1', image_mini:'images/items/yield/orange.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[792] = {item_id:792, nshort:'tequila', name:'Текила', type:'yield', level:0, price:24, image:'/images/items/yield/tequila.png?1', image_mini:'images/items/yield/tequila.png?1', set:{key:'set_mexican', name:'Набор мексиканца'}, auctionable:true, sellable:true};
PK_S3_TEST.items[793] = {item_id:793, nshort:'tomato', name:'Помидор', type:'yield', level:0, price:6, image:'/images/items/yield/tomato.png?1', image_mini:'images/items/yield/tomato.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[794] = {item_id:794, nshort:'potion', name:'Эликсир', type:'yield', level:0, price:360, image:'/images/items/yield/potion.png?1', image_mini:'images/items/yield/potion.png?1', set:{key:'set_quackery', name:'Набор знахаря'}, auctionable:true, sellable:true};
PK_S3_TEST.items[795] = {item_id:795, nshort:'peg', name:'Колышек', type:'yield', level:0, price:15, image:'/images/items/yield/peg.png?1', image_mini:'images/items/yield/peg.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[796] = {item_id:796, nshort:'brush_shoe', name:'Обувная щётка', type:'yield', level:0, price:14, image:'/images/items/yield/brush_shoe.png?1', image_mini:'images/items/yield/brush_shoe.png?1', set:{}, sellable:true};
PK_S3_TEST.items[797] = {item_id:797, nshort:'pitchfork', name:'Вилы', type:'yield', level:0, price:32, image:'/images/items/yield/pitchfork.png?1', image_mini:'images/items/yield/pitchfork.png?1', set:{key:'set_farmer', name:'Набор фермера'}, auctionable:true, sellable:true};

    PK_S3_TEST.items[800] = {item_id:800, nshort:'stone_pebble', name:'Галька', type:'right_arm', level:2, price:15, image:'/images/items/right_arm/stone_pebble.png?1', image_mini:'/images/items/right_arm/mini/stone_pebble.png?1', set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:1, damage_max:7}, sub_type:'shot'};
    PK_S3_TEST.items[801] = {item_id:801, nshort:'stone_flint', name:'Кремень', type:'right_arm', level:5, price:26, image:'/images/items/right_arm/stone_flint.png?1', image_mini:'/images/items/right_arm/mini/stone_flint.png?1', set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:1, damage_max:11}, sub_type:'shot'};
    PK_S3_TEST.items[802] = {item_id:802, nshort:'stone_granite', name:'Гранит', type:'right_arm', level:8, price:46, image:'/images/items/right_arm/stone_granite.png?1', image_mini:'/images/items/right_arm/mini/stone_granite.png?1', set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:1, damage_max:15}, sub_type:'shot'};
    PK_S3_TEST.items[803] = {item_id:803, nshort:'crutch_rusty', name:'Потрёпанная рогатка', type:'right_arm', level:7, price:26, image:'/images/items/right_arm/crutch_rusty.png?1', image_mini:'/images/items/right_arm/mini/crutch_rusty.png?1', set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:4, damage_max:8}, sub_type:'shot'};
    PK_S3_TEST.items[804] = {item_id:804, nshort:'crutch', name:'Рогатка', type:'right_arm', level:10, price:63, image:'/images/items/right_arm/crutch.png?1', image_mini:'/images/items/right_arm/mini/crutch.png?1', set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:6, damage_max:12}, sub_type:'shot'};
    PK_S3_TEST.items[805] = {item_id:805, nshort:'crutch_accurate', name:'Точная рогатка', type:'right_arm', level:13, price:148, image:'/images/items/right_arm/crutch_accurate.png?1', image_mini:'/images/items/right_arm/mini/crutch_accurate.png?1', set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:9, damage_max:17}, sub_type:'shot'};
    PK_S3_TEST.items[806] = {item_id:806, nshort:'crutch_huckeberry', name:'Рогатка Гека Финна', type:'right_arm', level:20, price:1360, image:'/images/items/right_arm/crutch_huckeberry.png?1', image_mini:'/images/items/right_arm/mini/crutch_huckeberry.png?1', bonus:{skills:{swim:3, ride:3}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:20, damage_max:40}, sub_type:'shot'};
   
    PK_S3_TEST.items[807] = {item_id:807, nshort:'leadshot_rusty', name:'Ржавый кремнёвый пистолет', type:'right_arm', level:17, price:124, image:'/images/items/right_arm/leadshot_rusty.png?1', image_mini:'/images/items/right_arm/mini/leadshot_rusty.png?1', set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:5, damage_max:19}, sub_type:'shot'};
    PK_S3_TEST.items[808] = {item_id:808, nshort:'leadshot', name:'Кремнёвый пистолет', type:'right_arm', level:20, price:384, image:'/images/items/right_arm/leadshot.png?1', image_mini:'/images/items/right_arm/mini/leadshot.png?1', bonus:{skills:{tough:1}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:8, damage_max:28}, sub_type:'shot'};
    PK_S3_TEST.items[809] = {item_id:809, nshort:'leadshot_accurate', name:'Точный кремнёвый пистолет', type:'right_arm', level:23, price:550, image:'/images/items/right_arm/leadshot_accurate.png?1', image_mini:'/images/items/right_arm/mini/leadshot_accurate.png?1', bonus:{skills:{tough:1}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:10, damage_max:36}, sub_type:'shot'};
    PK_S3_TEST.items[810] = {item_id:810, nshort:'leadshot_granmonts', name:'Пистолет Гранмонта', type:'right_arm', level:30, price:2680, image:'/images/items/right_arm/leadshot_granmonts.png?1', image_mini:'/images/items/right_arm/mini/leadshot_granmonts.png?1', bonus:{skills:{finger_dexterity:4, tough:3}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:15, damage_max:89}, sub_type:'shot'};
    
    PK_S3_TEST.items[811] = {item_id:811, nshort:'muzzleloader_rusty', name:'Ржавое дульнозарядное ружьё', type:'right_arm', level:22, price:326, image:'/images/items/right_arm/muzzleloader_rusty.png?1', image_mini:'/images/items/right_arm/mini/muzzleloader_rusty.png?1', bonus:{skills:{aim:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:10, damage_max:22}, sub_type:'shot'};
    PK_S3_TEST.items[812] = {item_id:812, nshort:'muzzleloader', name:'Дульнозарядное ружьё', type:'right_arm', level:25, price:545, image:'/images/items/right_arm/muzzleloader.png?1', image_mini:'/images/items/right_arm/mini/muzzleloader.png?1', bonus:{skills:{aim:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:15, damage_max:31}, sub_type:'shot'};    
    PK_S3_TEST.items[813] = {item_id:813, nshort:'muzzleloader_accurate', name:'Точное дульнозарядное ружьё', type:'right_arm', level:28, price:940, image:'/images/items/right_arm/muzzleloader_accurate.png?1', image_mini:'/images/items/right_arm/mini/muzzleloader_accurate.png?1', bonus:{skills:{aim:2}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:24, damage_max:36}, sub_type:'shot'};
    PK_S3_TEST.items[814] = {item_id:814, nshort:'muzzleloader_drake', name:'Дульнозарядное ружьё Дрейка', type:'right_arm', level:35, price:3580, image:'/images/items/right_arm/muzzleloader_drake.png?1', image_mini:'/images/items/right_arm/mini/muzzleloader_drake.png?1', bonus:{skills:{aim:4, swim:4}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:47, damage_max:79}, sub_type:'shot'};

    PK_S3_TEST.items[815] = {item_id:815, nshort:'deringer_rusty', name:'Ржавый дерринджер', type:'right_arm', level:32, price:730, image:'/images/items/right_arm/deringer_rusty.png?1', image_mini:'/images/items/right_arm/mini/deringer_rusty.png?1', bonus:{skills:{reflex:2}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:18, damage_max:32}, sub_type:'shot'};
    PK_S3_TEST.items[816] = {item_id:816, nshort:'deringer', name:'Дерринджер', type:'right_arm', level:35, price:1280, image:'/images/items/right_arm/deringer.png?1', image_mini:'/images/items/right_arm/mini/deringer.png?1', bonus:{skills:{reflex:2}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:29, damage_max:45}, sub_type:'shot'};
    PK_S3_TEST.items[817] = {item_id:817, nshort:'deringer_accurate', name:'Точный дерринджер', type:'right_arm', level:38, price:1655, image:'/images/items/right_arm/deringer_accurate.png?1', image_mini:'/images/items/right_arm/mini/deringer_accurate.png?1', bonus:{skills:{reflex:3}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:30, damage_max:54}, sub_type:'shot'};
    PK_S3_TEST.items[818] = {item_id:818, nshort:'deringer_bellestar', name:'Дерринджер Белль Старр', type:'right_arm', level:45, price:5500, image:'/images/items/right_arm/deringer_bellestar.png?1', image_mini:'/images/items/right_arm/mini/deringer_bellestar.png?1', bonus:{skills:{hide:4, reflex:5}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:71, damage_max:97}, sub_type:'shot'};
    
    PK_S3_TEST.items[819] = {item_id:819, nshort:'pepperbox_rusty', name:'Ржавый многоствольный револьвер', type:'right_arm', level:37, price:940, image:'/images/items/right_arm/pepperbox_rusty.png?1', image_mini:'/images/items/right_arm/mini/pepperbox_rusty.png?1', bonus:{skills:{dodge:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:13, damage_max:47}, sub_type:'shot'};
    PK_S3_TEST.items[820] = {item_id:820, nshort:'pepperbox', name:'Многоствольный револьвер', type:'right_arm', level:40, price:1440, image:'/images/items/right_arm/pepperbox.png?1', image_mini:'/images/items/right_arm/mini/pepperbox.png?1', bonus:{skills:{dodge:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:23, damage_max:57}, sub_type:'shot'};
    PK_S3_TEST.items[821] = {item_id:821, nshort:'pepperbox_accurate', name:'Точный многоствольный револьвер', type:'right_arm', level:43, price:2150, image:'/images/items/right_arm/pepperbox_accurate.png?1', image_mini:'/images/items/right_arm/mini/pepperbox_accurate.png?1', bonus:{skills:{dodge:3}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:27, damage_max:73}, sub_type:'shot'};
    PK_S3_TEST.items[822] = {item_id:822, nshort:'pepperbox_allen', name:'Многоствольный револьвер Аллена', type:'right_arm', level:50, price:6850, image:'/images/items/right_arm/pepperbox_allen.png?1', image_mini:'/images/items/right_arm/mini/pepperbox_allen.png?1', bonus:{skills:{leadership:6, aim:5}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:33, damage_max:153}, sub_type:'shot'};
    
    PK_S3_TEST.items[823] = {item_id:823, nshort:'smith_rusty', name:'Ржавый Смит-Вессон №1', type:'right_arm', level:47, price:1650, image:'/images/items/right_arm/smith_rusty.png?1', image_mini:'/images/items/right_arm/mini/smith_rusty.png?1', bonus:{skills:{shot:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:38, damage_max:46}, sub_type:'shot'};
    PK_S3_TEST.items[824] = {item_id:824, nshort:'smith', name:'Смит-Вессон №1', type:'right_arm', level:50, price:2350, image:'/images/items/right_arm/smith.png?1', image_mini:'/images/items/right_arm/mini/smith.png?1', bonus:{skills:{shot:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:49, damage_max:57}, sub_type:'shot'};
    PK_S3_TEST.items[825] = {item_id:825, nshort:'smith_accurate', name:'Точный Смит-Вессон №1', type:'right_arm', level:53, price:3180, image:'/images/items/right_arm/smith_accurate.png?1', image_mini:'/images/items/right_arm/mini/smith_accurate.png?1', bonus:{skills:{shot:4}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:60, damage_max:66}, sub_type:'shot'};
    PK_S3_TEST.items[826] = {item_id:826, nshort:'smith_younger', name:'Револьвер Янгерса', type:'right_arm', level:60, price:8700, image:'/images/items/right_arm/smith_younger.png?1', image_mini:'/images/items/right_arm/mini/smith_younger.png?1', bonus:{skills:{pitfall:7, shot:6}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:105, damage_max:125}, sub_type:'shot'};

    PK_S3_TEST.items[827] = {item_id:827, nshort:'remington_rusty', name:'Ржавый армейский револьвер', type:'right_arm', level:52, price:2150, image:'/images/items/right_arm/remington_rusty.png?1', image_mini:'/images/items/right_arm/mini/remington_rusty.png?1', bonus:{skills:{tough:3}}, set:{}, traderlevel:11, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:41, damage_max:59}, sub_type:'shot'};
    PK_S3_TEST.items[828] = {item_id:828, nshort:'remington', name:'Армейский револьвер', type:'right_arm', level:55, price:2950, image:'/images/items/right_arm/remington.png?1', image_mini:'/images/items/right_arm/mini/remington.png?1', bonus:{skills:{tough:4}}, set:{}, traderlevel:11, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:49, damage_max:71}, sub_type:'shot'};
    PK_S3_TEST.items[829] = {item_id:829, nshort:'remington_accurate', name:'Точный армейский револьвер', type:'right_arm', level:58, price:3940, image:'/images/items/right_arm/remington_accurate.png?1', image_mini:'/images/items/right_arm/mini/remington_accurate.png?1', bonus:{skills:{tough:5}}, set:{}, traderlevel:11, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:63, damage_max:79}, sub_type:'shot'};
    PK_S3_TEST.items[830] = {item_id:830, nshort:'remington_ike', name:'Армейский револьвер Айка', type:'right_arm', level:65, price:9400, image:'/images/items/right_arm/remington_ike.png?1', image_mini:'/images/items/right_arm/mini/remington_ike.png?1', bonus:{skills:{endurance:7, tough:7}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:97, damage_max:133}, sub_type:'shot'};
    
    PK_S3_TEST.items[831] = {item_id:831, nshort:'peacemaker_rusty', name:'Ржавый кольт Миротворец', type:'right_arm', level:62, price:3380, image:'/images/items/right_arm/peacemaker_rusty.png?1', image_mini:'/images/items/right_arm/mini/peacemaker_rusty.png?1', bonus:{skills:{appearance:4}}, set:{}, traderlevel:13, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:45, damage_max:85}, sub_type:'shot'};
    PK_S3_TEST.items[832] = {item_id:832, nshort:'peacemaker', name:'Кольт Миротворец', type:'right_arm', level:65, price:4570, image:'/images/items/right_arm/peacemaker.png?1', image_mini:'/images/items/right_arm/mini/peacemaker.png?1', bonus:{skills:{appearance:5}}, set:{}, traderlevel:13, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:55, damage_max:99}, sub_type:'shot'};
    PK_S3_TEST.items[833] = {item_id:833, nshort:'peacemaker_accurate', name:'Точный кольт Миротворец', type:'right_arm', level:68, price:5400, image:'/images/items/right_arm/peacemaker_accurate.png?1', image_mini:'/images/items/right_arm/mini/peacemaker_accurate.png?1', bonus:{skills:{appearance:6}}, set:{}, traderlevel:13, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:60, damage_max:112}, sub_type:'shot'};
    PK_S3_TEST.items[834] = {item_id:834, nshort:'peacemaker_billy', name:'Кольт Миротворец Билли', type:'right_arm', level:75, price:10300, image:'/images/items/right_arm/peacemaker_billy.png?1', image_mini:'/images/items/right_arm/mini/peacemaker_billy.png?1', bonus:{skills:{appearance:7, health:8}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:79, damage_max:163}, sub_type:'shot'};

    PK_S3_TEST.items[835] = {item_id:835, nshort:'schofield_rusty', name:'Ржавый Скофилд', type:'right_arm', level:67, price:4250, image:'/images/items/right_arm/schofield_rusty.png?1', image_mini:'/images/items/right_arm/mini/schofield_rusty.png?1', bonus:{skills:{tactic:5}}, set:{}, traderlevel:14, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:60, damage_max:90}, sub_type:'shot'};
    PK_S3_TEST.items[836] = {item_id:836, nshort:'schofield', name:'Скофилд', type:'right_arm', level:70, price:5230, image:'/images/items/right_arm/schofield.png?1', image_mini:'/images/items/right_arm/mini/schofield.png?1', bonus:{skills:{tactic:6}}, set:{}, traderlevel:14, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:69, damage_max:99}, sub_type:'shot'};
    PK_S3_TEST.items[837] = {item_id:837, nshort:'schofield_accurate', name:'Точный Скофилд', type:'right_arm', level:73, price:6400, image:'/images/items/right_arm/schofield_accurate.png?1', image_mini:'/images/items/right_arm/mini/schofield_accurate.png?1', bonus:{skills:{tactic:7}}, set:{}, traderlevel:14, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:79, damage_max:111}, sub_type:'shot'};
    PK_S3_TEST.items[838] = {item_id:838, nshort:'schofield_jessejames', name:'Скофилд Джесси Джеймса', type:'right_arm', level:80, price:10600, image:'/images/items/right_arm/schofield_jessejames.png?1', image_mini:'/images/items/right_arm/mini/schofield_jessejames.png?1', bonus:{skills:{trade:8, tactic:8}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:96, damage_max:148}, sub_type:'shot'};

    PK_S3_TEST.items[839] = {item_id:839, nshort:'buntline_rusty', name:'Ржавый Бантлайн', type:'right_arm', level:72, price:5375, image:'/images/items/right_arm/buntline_rusty.png?1', image_mini:'/images/items/right_arm/mini/buntline_rusty.png?1', bonus:{skills:{reflex:7}}, set:{}, traderlevel:15, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:77, damage_max:91}, sub_type:'shot'};
    PK_S3_TEST.items[840] = {item_id:840, nshort:'buntline', name:'Бантлайн', type:'right_arm', level:75, price:6250, image:'/images/items/right_arm/buntline.png?1', image_mini:'/images/items/right_arm/mini/buntline.png?1', bonus:{skills:{reflex:7}}, set:{}, traderlevel:15, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:87, damage_max:99}, sub_type:'shot'};
    PK_S3_TEST.items[841] = {item_id:841, nshort:'buntline_accurate', name:'Точный Бантлайн', type:'right_arm', level:78, price:7250, image:'/images/items/right_arm/buntline_accurate.png?1', image_mini:'/images/items/right_arm/mini/buntline_accurate.png?1', bonus:{skills:{reflex:7}}, set:{}, traderlevel:15, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:89, damage_max:115}, sub_type:'shot'};
    PK_S3_TEST.items[842] = {item_id:842, nshort:'buntline_wyattearp', name:'Бантлайн Уайатта Эрпа', type:'right_arm', level:85, price:11200, image:'/images/items/right_arm/buntline_wyattearp.png?1', image_mini:'/images/items/right_arm/mini/buntline_wyattearp.png?1', bonus:{skills:{tactic:7, aim:4, reflex:4, health:4}}, set:{}, auctionable:true, dropable:true, sellable:true, damage:{damage_min:124, damage_max:126}, sub_type:'shot'};
    
    PK_S3_TEST.items[843] = {item_id:843, nshort:'boomerang', name:'Бумеранг', type:'right_arm', level:8, price:126, image:'/images/items/right_arm/boomerang.png?1', image_mini:'/images/items/right_arm/mini/boomerang.png?1', characterClass:'duelist', bonus:{skills:{reflex:1}}, set:{}, sellable:true, damage:{damage_min:1, damage_max:17}, sub_type:'shot'};
    PK_S3_TEST.items[844] = {item_id:844, nshort:'throwing_knives', name:'Метательные ножи', type:'right_arm', level:33, price:1152, image:'/images/items/right_arm/throwing_knives.png?1', image_mini:'/images/items/right_arm/mini/throwing_knives.png?1', characterClass:'duelist', bonus:{skills:{hide:3}}, set:{}, sellable:true, damage:{damage_min:2, damage_max:66}, sub_type:'shot'};
    PK_S3_TEST.items[845] = {item_id:845, nshort:'sawed_off', name:'Обрез', type:'right_arm', level:51, price:2940, image:'/images/items/right_arm/sawed_off.png?1', image_mini:'/images/items/right_arm/mini/sawed_off.png?1', characterClass:'duelist', bonus:{skills:{appearance:3, shot:2}}, set:{}, sellable:true, damage:{damage_min:20, damage_max:88}, sub_type:'shot'};
PK_S3_TEST.items[846] = {item_id:846, nshort:'trompet', name:'Труба', type:'right_arm', level:20, price:1200, image:'/images/items/right_arm/trompet.png?1', image_mini:'/images/items/right_arm/mini/trompet.png?1', characterClass:'soldier', bonus:{attributes:{charisma:6}}, set:{}, sellable:true, damage:{damage_min:7, damage_max:14}, sub_type:'shot'};

    PK_S3_TEST.items[854] = {item_id:854, nshort:'elixier', name:'Кислота', type:'right_arm', level:42, price:1500, image:'/images/items/right_arm/elixier.png?1', image_mini:'/images/items/right_arm/mini/elixier.png?1', bonus:{skills:{appearance:2}}, set:{key:'set_quackery', name:'Набор знахаря'}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:4, damage_max:80}, sub_type:'shot'};
    PK_S3_TEST.items[855] = {item_id:855, nshort:'smith_xmas', name:'Ледяной револьвер', type:'right_arm', level:1, price:500, image:'/images/items/right_arm/smith_xmas.png?1', image_mini:'/images/items/right_arm/mini/smith_xmas.png?1', set:{}, traderlevel:100, auctionable:true, tradeable:true, sellable:true, damage:{damage_min:0, damage_max:1}, sub_type:'shot'};
    PK_S3_TEST.items[856] = {item_id:856, nshort:'smells_like_eggspirit', name:'Тухлые яйца', type:'right_arm', level:45, price:2500, image:'/images/items/right_arm/smells_like_eggspirit.png?1', image_mini:'/images/items/right_arm/mini/smells_like_eggspirit.png?1', set:{key:'season_set', name:'Праздничный наряд'}, sellable:true, damage:{damage_min:36, damage_max:49}, sub_type:'shot'};
    PK_S3_TEST.items[857] = {item_id:857, nshort:'fakegolden_gun', name:'Counterfeit golden colt', type:'right_arm', level:80, price:10500, image:'/images/items/right_arm/fakegolden_gun.png?1', image_mini:'/images/items/right_arm/mini/fakegolden_gun.png?1', bonus:{skills:{shot:5, aim:2}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, traderlevel:100, auctionable:true, dropable:true, tradeable:true, sellable:true, damage:{damage_min:81, damage_max:119}, sub_type:'shot'};
    PK_S3_TEST.items[858] = {item_id:858, nshort:'golden_gun', name:'Золотой кольт', type:'right_arm', level:70, price:22500, image:'/images/items/right_arm/golden_gun.png?1', image_mini:'/images/items/right_arm/mini/golden_gun.png?1', bonus:{skills:{shot:8, aim:4}}, set:{key:'gold_set', name:'Золотой набор'}, traderlevel:100, tradeable:true, damage:{damage_min:101, damage_max:149}, sub_type:'shot'};
    PK_S3_TEST.items[859] = {item_id:859, nshort:'greenhorn_gun', name:'Детская праща', type:'right_arm', level:6, price:550, image:'/images/items/right_arm/greenhorn_gun.png?1', image_mini:'/images/items/right_arm/mini/greenhorn_gun.png?1', bonus:{skills:{shot:1}}, set:{key:'greenhorn_set', name:'Набор чечако'}, sellable:true, damage:{damage_min:6, damage_max:14}, sub_type:'shot'};

    PK_S3_TEST.items[861] = {item_id:861, nshort:'computerbild_promo_gun', name:'Револьвер Баффало Била', type:'right_arm', level:10, price:750, image:'/images/items/right_arm/computerbild_promo_gun.png?1', image_mini:'/images/items/right_arm/mini/computerbild_promo_gun.png?1', bonus:{skills:{}, attributes:{charisma:1}, fortbattle:{}, fortbattlesector:{}}, set:{}, traderlevel:100, tradeable:true, damage:{damage_min:10, damage_max:20}, sub_type:'shot'};
    PK_S3_TEST.items[862] = {item_id:862, nshort:'howdah_pistol', name:'Хаудах', type:'right_arm', level:10, price:11750, image:'/images/items/right_arm/howdah_pistol.png?1', image_mini:'/images/items/right_arm/mini/howdah_pistol.png?1', set:{}, traderlevel:100, tradeable:true, damage:{damage_min:100, damage_max:200}, sub_type:'shot'};
    PK_S3_TEST.items[863] = {item_id:863, nshort:'collector_gun', name:'Револьвер Плюшкина', type:'right_arm', level:100, price:0, image:'/images/items/right_arm/collector_gun.png?1', image_mini:'/images/items/right_arm/mini/collector_gun.png?1', bonus:{skills:{trade:15, reflex:15}, attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{key:'collector_set', name:'Набор коллекционера'}, traderlevel:100, tradeable:true, damage:{damage_min:75, damage_max:175}, sub_type:'shot'};

    PK_S3_TEST.items[999] = {item_id:999, nshort:'surprise', name:'Сюрприз', type:'yield', level:0, price:0, image:'/images/items/unknown.png?1', image_mini:'/images/items/unknown.png?1', set:{}};

PK_S3_TEST.items[1364] = {item_id:1364, nshort:'uniform_perfect', name:'Форма', type:'body', level:20, price:800, image:'/images/items/body/uniform_perfect.png?1', image_mini:'/images/items/body/mini/uniform_perfect.png?1', characterClass:'soldier', bonus:{skills:{appearance:3, hide:4}, attributes:{charisma:2}}, set:{}, sellable:true};

    PK_S3_TEST.items[1701] = {item_id:1701, nshort:'arrow', name:'Стрелы', type:'yield', level:0, price:5, image:'/images/items/yield/arrow.png?1', image_mini:'images/items/yield/arrow.png?1', set:{}};
PK_S3_TEST.items[1702] = {item_id:1702, nshort:'compass', name:'Компас', type:'yield', level:0, price:380, image:'/images/items/yield/compass.png?1', image_mini:'images/items/yield/compass.png?1', bonus:{skills:{ride:3}}, set:{}};
PK_S3_TEST.items[1703] = {item_id:1703, nshort:'lamp', name:'Лампа', type:'yield', level:0, price:80, image:'/images/items/yield/lamp.png?1', image_mini:'images/items/yield/lamp.png?1', set:{}};

    PK_S3_TEST.items[1706] = {item_id:1706, nshort:'letter', name:'Письмо', type:'yield', level:0, price:1, image:'/images/items/yield/letter.png?1', image_mini:'images/items/yield/letter.png?1', set:{}};

PK_S3_TEST.items[1708] = {item_id:1708, nshort:'whiskey', name:'Виски', type:'yield', level:0, price:10, image:'/images/items/yield/whiskey.png?1', image_mini:'images/items/yield/whiskey.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1709] = {item_id:1709, nshort:'gold', name:'Сокровища индейцев', type:'yield', level:0, price:26000, image:'/images/items/yield/gold.png?1', image_mini:'images/items/yield/gold.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1710] = {item_id:1710, nshort:'key1', name:'Первый ключ', type:'yield', level:0, price:42, image:'/images/items/yield/key1.png?1', image_mini:'images/items/yield/key1.png?1', set:{}, sellable:true};
PK_S3_TEST.items[1711] = {item_id:1711, nshort:'key2', name:'Второй ключ', type:'yield', level:0, price:46, image:'/images/items/yield/key2.png?1', image_mini:'images/items/yield/key2.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1712] = {item_id:1712, nshort:'key3', name:'Третий ключ', type:'yield', level:0, price:7500, image:'/images/items/yield/key3.png?1', image_mini:'images/items/yield/key3.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1713] = {item_id:1713, nshort:'easteregg', name:'Пасхальное яйцо', type:'yield', level:0, price:20, image:'/images/items/yield/easteregg.png?1', image_mini:'images/items/yield/easteregg.png?1', set:{}, sellable:true};

    PK_S3_TEST.items[1715] = {item_id:1715, nshort:'cane', name:'Трость', type:'yield', level:42, price:2800, image:'/images/items/yield/cane.png?1', image_mini:'images/items/yield/cane.png?1', characterSex:'male', bonus:{attributes:{charisma:2}}, set:{key:'set_gentleman', name:'Набор джентльмена'}, auctionable:true, dropable:true, sellable:true};
    PK_S3_TEST.items[1716] = {item_id:1716, nshort:'letter', name:'Личное письмо', type:'yield', level:0, price:2, image:'/images/items/yield/letter.png?1', image_mini:'images/items/yield/letter.png?1', set:{}};
    PK_S3_TEST.items[1717] = {item_id:1717, nshort:'chamber_pot', name:'Ночной горшок', type:'yield', level:0, price:750, image:'/images/items/yield/chamber_pot.png?1', image_mini:'images/items/yield/chamber_pot.png?1', set:{key:'set_sleeper', name:'Набор сони'}, auctionable:true, dropable:true, sellable:true};

    PK_S3_TEST.items[1733] = {item_id:1733, nshort:'henrys_packet', name:'Посылка Генри', type:'yield', level:0, price:32, image:'/images/items/yield/henrys_packet.png?1', image_mini:'images/items/yield/henrys_packet.png?1', set:{}};

PK_S3_TEST.items[1750] = {item_id:1750, nshort:'ponytail', name:'Коса',  type:'yield', level:0, price:66,  image:'/images/items/yield/ponytail.png?1',  image_mini:'images/items/yield/ponytail.png?1',  characterSex:null,  set:{key:null, name:null}, sellable:true};
    PK_S3_TEST.items[1751] = {item_id:1751, nshort:'ruby', name:'Рубин', type:'yield', level:0, price:66, image:'/images/items/yield/ruby.png?1', image_mini:'images/items/yield/ruby.png?1', set:{}};
PK_S3_TEST.items[1752] = {item_id:1752, nshort:'egg1', name:'Первое яйцо', type:'yield', level:0, price:4, image:'/images/items/yield/egg1.png?1', image_mini:'images/items/yield/egg1.png?1', set:{}};
PK_S3_TEST.items[1753] = {item_id:1753, nshort:'egg2', name:'Второе яйцо', type:'yield', level:0, price:4, image:'/images/items/yield/egg2.png?1', image_mini:'images/items/yield/egg2.png?1', set:{}};
PK_S3_TEST.items[1754] = {item_id:1754, nshort:'egg3', name:'Третье яйцо', type:'yield', level:0, price:4, image:'/images/items/yield/egg3.png?1', image_mini:'images/items/yield/egg3.png?1', set:{}};
    PK_S3_TEST.items[1755] = {item_id:1755, nshort:'bag', name:'Мешок с добычей', type:'yield', level:0, price:2000, image:'/images/items/yield/bag.png?1', image_mini:'images/items/yield/bag.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1756] = {item_id:1756, nshort:'mask', name:'Маска', type:'yield', level:0, price:200, image:'/images/items/yield/mask.png?1', image_mini:'images/items/yield/mask.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1757] = {item_id:1757, nshort:'dfprocket1', name:'Прототип', type:'yield', level:0, price:1, image:'/images/items/yield/dfprocket1.png?1', image_mini:'images/items/yield/dfprocket1.png?1', set:{}};
PK_S3_TEST.items[1758] = {item_id:1758, nshort:'hgfrocket2', name:'Брак', type:'yield', level:0, price:1, image:'/images/items/yield/hgfrocket2.png?1', image_mini:'images/items/yield/hgfrocket2.png?1', set:{}};
    PK_S3_TEST.items[1759] = {item_id:1759, nshort:'dfgrocket1a', name:'Фейерверк', type:'yield', level:0, price:2700, image:'/images/items/yield/dfgrocket1a.png?1', image_mini:'images/items/yield/dfgrocket1a.png?1', bonus:{attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{key:'season_set', name:'Праздничный наряд'}, sellable:true};
    PK_S3_TEST.items[1760] = {item_id:1760, nshort:'bucket', name:'Пустое ведро', type:'yield', level:0, price:20, image:'/images/items/yield/bucket.png?1', image_mini:'images/items/yield/bucket.png?1', set:{}};
    PK_S3_TEST.items[1761] = {item_id:1761, nshort:'bucket_full', name:'Полное ведро', type:'yield', level:0, price:21, image:'/images/items/yield/bucket_full.png?1', image_mini:'images/items/yield/bucket_full.png?1', set:{}};
    PK_S3_TEST.items[1762] = {item_id:1762, nshort:'bucket_fire', name:'Ведро', type:'yield', level:0, price:25, image:'/images/items/yield/bucket_fire.png?1', image_mini:'images/items/yield/bucket_fire.png?1', set:{key:'fireworker_set', name:'Набор пожарного'}};
PK_S3_TEST.items[1763] = {item_id:1763, nshort:'threekeynote', name:'Листок с тремя ключами…', type:'yield', level:0, price:2, image:'/images/items/yield/threekeynote.png?1', image_mini:'images/items/yield/threekeynote.png?1', set:{}};
    PK_S3_TEST.items[1764] = {item_id:1764, nshort:'treasuremap', name:'План!', type:'yield', level:0, price:5543, image:'/images/items/yield/treasuremap.png?1', image_mini:'images/items/yield/treasuremap.png?1', set:{}};
PK_S3_TEST.items[1765] = {item_id:1765, nshort:'treasurebox', name:'Сундук с сокровищами', type:'yield', level:0, price:23402, image:'/images/items/yield/treasurebox.png?1', image_mini:'images/items/yield/treasurebox.png?1', set:{}};
    PK_S3_TEST.items[1766] = {item_id:1766, nshort:'mudball', name:'Ком грязи', type:'yield', level:0, price:1, image:'/images/items/yield/mudball.png?1', image_mini:'images/items/yield/mudball.png?1', set:{}, auctionable:true};
    PK_S3_TEST.items[1767] = {item_id:1767, nshort:'muditem', name:'Нечто грязное', type:'yield', level:0, price:10, image:'/images/items/yield/muditem.png?1', image_mini:'images/items/yield/muditem.png?1', set:{}};
    PK_S3_TEST.items[1768] = {item_id:1768, nshort:'dustgun', name:'Пыльный револьвер', type:'yield', level:0, price:100, image:'/images/items/yield/dustgun.png?1', image_mini:'images/items/yield/dustgun.png?1', set:{}};
    PK_S3_TEST.items[1769] = {item_id:1769, nshort:'goldgun', name:'Золотой револьвер', type:'yield', level:0, price:100, image:'/images/items/yield/goldgun.png?1', image_mini:'images/items/yield/goldgun.png?1', set:{}};
    PK_S3_TEST.items[1770] = {item_id:1770, nshort:'bloodycloth', name:'Окровавленный лоскут', type:'yield', level:0, price:1, image:'/images/items/yield/bloodycloth.png?1', image_mini:'images/items/yield/bloodycloth.png?1', set:{}};
    PK_S3_TEST.items[1771] = {item_id:1771, nshort:'photo', name:'Старая фотография', type:'yield', level:0, price:1, image:'/images/items/yield/photo.png?1', image_mini:'images/items/yield/photo.png?1', set:{}};
    PK_S3_TEST.items[1772] = {item_id:1772, nshort:'umbrella', name:'Зонтик', type:'yield', level:42, price:2800, image:'/images/items/yield/umbrella.png?1', image_mini:'images/items/yield/umbrella.png?1', characterSex:'female', bonus:{skills:{trade:8, finger_dexterity:6, endurance:10}, attributes:{strength:1}}, set:{key:'set_dancer', name:'Набор танцовщицы'}, auctionable:true, dropable:true, sellable:true};
    PK_S3_TEST.items[1773] = {item_id:1773, nshort:'testament', name:'Завещание', type:'yield', level:0, price:1, image:'/images/items/yield/testament.png?1', image_mini:'images/items/yield/testament.png?1', set:{}};
    PK_S3_TEST.items[1774] = {item_id:1774, nshort:'engagementring', name:'Кольцо', type:'yield', level:0, price:1, image:'/images/items/yield/engagementring.png?1', image_mini:'images/items/yield/engagementring.png?1', set:{}};
PK_S3_TEST.items[1775] = {item_id:1775, nshort:'birthcertificate', name:'Свидетельство о рождении', type:'yield', level:0, price:1, image:'/images/items/yield/birthcertificate.png?1', image_mini:'images/items/yield/birthcertificate.png?1', set:{}};
PK_S3_TEST.items[1776] = {item_id:1776, nshort:'darkplans', name:'Коварные планы', type:'yield', level:0, price:1, image:'/images/items/yield/darkplans.png?1', image_mini:'images/items/yield/darkplans.png?1', set:{}};
PK_S3_TEST.items[1777] = {item_id:1777, nshort:'docreport', name:'Врачебное свидетельство', type:'yield', level:0, price:1, image:'/images/items/yield/docreport.png?1', image_mini:'images/items/yield/docreport.png?1', set:{}};
    PK_S3_TEST.items[1778] = {item_id:1778, nshort:'brandingiron', name:'Гнутое тавро', type:'yield', level:0, price:1, image:'/images/items/yield/brandingiron.png?1', image_mini:'images/items/yield/brandingiron.png?1', set:{}};
PK_S3_TEST.items[1779] = {item_id:1779, nshort:'cardpiece1', name:'Первая часть карты', type:'yield', level:0, price:1, image:'/images/items/yield/cardpiece1.png?1', image_mini:'images/items/yield/cardpiece1.png?1', set:{}};
PK_S3_TEST.items[1780] = {item_id:1780, nshort:'cardpiece2', name:'Вторая часть карты', type:'yield', level:0, price:1, image:'/images/items/yield/cardpiece2.png?1', image_mini:'images/items/yield/cardpiece2.png?1', set:{}};
PK_S3_TEST.items[1781] = {item_id:1781, nshort:'cardpiece3', name:'Третья часть карты', type:'yield', level:0, price:1, image:'/images/items/yield/cardpiece3.png?1', image_mini:'images/items/yield/cardpiece3.png?1', set:{}};
    PK_S3_TEST.items[1782] = {item_id:1782, nshort:'cardpiece4', name:'Четвёртая часть карты', type:'yield', level:0, price:1, image:'/images/items/yield/cardpiece4.png?1', image_mini:'images/items/yield/cardpiece4.png?1', set:{}};
PK_S3_TEST.items[1783] = {item_id:1783, nshort:'cardcomplete', name:'Полная карта', type:'yield', level:0, price:1, image:'/images/items/yield/cardcomplete.png?1', image_mini:'images/items/yield/cardcomplete.png?1', set:{}};
PK_S3_TEST.items[1784] = {item_id:1784, nshort:'itemlist', name:'Список вещей', type:'yield', level:0, price:1, image:'/images/items/yield/itemlist.png?1', image_mini:'images/items/yield/itemlist.png?1', set:{}};
PK_S3_TEST.items[1785] = {item_id:1785, nshort:'torch', name:'Факел', type:'yield', level:0, price:1, image:'/images/items/yield/torch.png?1', image_mini:'images/items/yield/torch.png?1', set:{}};
PK_S3_TEST.items[1786] = {item_id:1786, nshort:'bagpack', name:'Рюкзак', type:'yield', level:0, price:1, image:'/images/items/yield/bagpack.png?1', image_mini:'images/items/yield/bagpack.png?1', set:{}};
    PK_S3_TEST.items[1787] = {item_id:1787, nshort:'ashes', name:'Пепел', type:'yield', level:0, price:1, image:'/images/items/yield/ashes.png?1', image_mini:'images/items/yield/ashes.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1788] = {item_id:1788, nshort:'gravel', name:'Гравий', type:'yield', level:0, price:10, image:'/images/items/yield/gravel.png?1', image_mini:'images/items/yield/gravel.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1789] = {item_id:1789, nshort:'brokenshovel', name:'Сломанная лопата', type:'yield', level:0, price:50, image:'/images/items/yield/brokenshovel.png?1', image_mini:'images/items/yield/brokenshovel.png?1', set:{}, sellable:true};
PK_S3_TEST.items[1790] = {item_id:1790, nshort:'treeboat', name:'Выдолбленный ствол дерева', type:'yield', level:0, price:50, image:'/images/items/yield/treeboat.png?1', image_mini:'images/items/yield/treeboat.png?1', set:{}};
    PK_S3_TEST.items[1791] = {item_id:1791, nshort:'golddust', name:'Золотая пыль', type:'yield', level:0, price:100, image:'/images/items/yield/golddust.png?1', image_mini:'images/items/yield/golddust.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1792] = {item_id:1792, nshort:'goldnugget', name:'Золото', type:'yield', level:0, price:5000, image:'/images/items/yield/goldnugget.png?1', image_mini:'images/items/yield/goldnugget.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1793] = {item_id:1793, nshort:'bendmetall', name:'Гнутая, замызганная железяка', type:'yield', level:0, price:1, image:'/images/items/yield/bendmetall.png?1', image_mini:'images/items/yield/bendmetall.png?1', set:{}, auctionable:true};
    PK_S3_TEST.items[1794] = {item_id:1794, nshort:'dirtymetall', name:'Грязная железяка', type:'yield', level:0, price:10, image:'/images/items/yield/dirtymetall.png?1', image_mini:'images/items/yield/dirtymetall.png?1', set:{}};
    PK_S3_TEST.items[1795] = {item_id:1795, nshort:'goldblade', name:'Отмытый золотой клинок', type:'yield', level:0, price:100, image:'/images/items/yield/goldblade.png?1', image_mini:'images/items/yield/goldblade.png?1', set:{}};
    PK_S3_TEST.items[1796] = {item_id:1796, nshort:'sharpgoldblade', name:'Острый клинок', type:'yield', level:0, price:100, image:'/images/items/yield/sharpgoldblade.png?1', image_mini:'images/items/yield/sharpgoldblade.png?1', set:{}};
    PK_S3_TEST.items[1797] = {item_id:1797, nshort:'sheriffpaper', name:'Рапорт шерифа', type:'yield', level:0, price:10, image:'/images/items/yield/sheriffpaper.png?1', image_mini:'images/items/yield/sheriffpaper.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}};

    PK_S3_TEST.items[1799] = {item_id:1799, nshort:'crystallball', name:'Хрустальный шар', type:'yield', level:0, price:10000, image:'/images/items/yield/crystallball.png?1', image_mini:'images/items/yield/crystallball.png?1', set:{}};
    PK_S3_TEST.items[1800] = {item_id:1800, nshort:'toadblood', name:'Кровь жабы', type:'yield', level:0, price:10, image:'/images/items/yield/toadblood.png?1', image_mini:'images/items/yield/toadblood.png?1', set:{}};
    PK_S3_TEST.items[1801] = {item_id:1801, nshort:'coyoteheart', name:'Сердце койота', type:'yield', level:0, price:10, image:'/images/items/yield/coyoteheart.png?1', image_mini:'images/items/yield/coyoteheart.png?1', set:{}};
    PK_S3_TEST.items[1802] = {item_id:1802, nshort:'phantomdrawing', name:'Портрет', type:'yield', level:0, price:10, image:'/images/items/yield/phantomdrawing.png?1', image_mini:'images/items/yield/phantomdrawing.png?1', set:{}};
    PK_S3_TEST.items[1803] = {item_id:1803, nshort:'candyorange', name:'Апельсин в сахаре', type:'yield', level:0, price:10, image:'/images/items/yield/candyorange.png?1', image_mini:'images/items/yield/candyorange.png?1', set:{}, auctionable:false, dropable:false, tradeable:false, sellable:false};
PK_S3_TEST.items[1804] = {item_id:1804, nshort:'smellingfish', name:'Тухлая рыба', type:'yield', level:0, price:10, image:'/images/items/yield/smellingfish.png?1', image_mini:'images/items/yield/smellingfish.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1805] = {item_id:1805, nshort:'needleandthreat', name:'Иголка с ниткой', type:'yield', level:0, price:5, image:'/images/items/yield/needleandthreat.png?1', image_mini:'images/items/yield/needleandthreat.png?1', set:{}};
    PK_S3_TEST.items[1806] = {item_id:1806, nshort:'cottonbale', name:'Тюк хлопка', type:'yield', level:0, price:15, image:'/images/items/yield/cottonbale.png?1', image_mini:'images/items/yield/cottonbale.png?1', set:{}};
    PK_S3_TEST.items[1807] = {item_id:1807, nshort:'sock', name:'Носок', type:'yield', level:0, price:0, image:'/images/items/yield/sock.png?1', image_mini:'images/items/yield/sock.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1808] = {item_id:1808, nshort:'potatoe', name:'Картошка', type:'yield', level:0, price:5, image:'/images/items/yield/potatoe.png?1', image_mini:'images/items/yield/potatoe.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1809] = {item_id:1809, nshort:'hay', name:'Сено', type:'yield', level:0, price:5, image:'/images/items/yield/hay.png?1', image_mini:'images/items/yield/hay.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1810] = {item_id:1810, nshort:'pumpkin', name:'Тыква', type:'yield', level:0, price:25, image:'/images/items/yield/pumpkin.png?1', image_mini:'images/items/yield/pumpkin.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1811] = {item_id:1811, nshort:'blueberries', name:'Черника', type:'yield', level:0, price:15, image:'/images/items/yield/blueberries.png?1', image_mini:'images/items/yield/blueberries.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1812] = {item_id:1812, nshort:'pit', name:'Косточка', type:'yield', level:0, price:1, image:'/images/items/yield/pit.png?1', image_mini:'images/items/yield/pit.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1813] = {item_id:1813, nshort:'eagle_feather', name:'Перо орла', type:'yield', level:0, price:35, image:'/images/items/yield/eagle_feather.png?1', image_mini:'images/items/yield/eagle_feather.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1814] = {item_id:1814, nshort:'lotus', name:'Цветок лотоса', type:'yield', level:0, price:45, image:'/images/items/yield/lotus.png?1', image_mini:'images/items/yield/lotus.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1815] = {item_id:1815, nshort:'crabmeat', name:'Мясо краба', type:'yield', level:0, price:12, image:'/images/items/yield/crabmeat.png?1', image_mini:'images/items/yield/crabmeat.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1816] = {item_id:1816, nshort:'chalk', name:'Мел', type:'yield', level:0, price:2, image:'/images/items/yield/chalk.png?1', image_mini:'images/items/yield/chalk.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1817] = {item_id:1817, nshort:'sheriffstar', name:'Шерифская звезда', type:'yield', level:0, price:50, image:'/images/items/yield/sheriffstar.png?1', image_mini:'images/items/yield/sheriffstar.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1818] = {item_id:1818, nshort:'sulfurstone', name:'Серная порода', type:'yield', level:0, price:25, image:'/images/items/yield/sulfurstone.png?1', image_mini:'images/items/yield/sulfurstone.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1819] = {item_id:1819, nshort:'pokergame', name:'Колода для покера', type:'yield', level:0, price:150, image:'/images/items/yield/pokergame.png?1', image_mini:'images/items/yield/pokergame.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1820] = {item_id:1820, nshort:'snakehide', name:'Змеиная кожа', type:'yield', level:0, price:27, image:'/images/items/yield/snakehide.png?1', image_mini:'images/items/yield/snakehide.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1821] = {item_id:1821, nshort:'salpetersalt', name:'Селитра', type:'yield', level:0, price:13, image:'/images/items/yield/salpetersalt.png?1', image_mini:'images/items/yield/salpetersalt.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1822] = {item_id:1822, nshort:'cigaretts', name:'Сигареты', type:'yield', level:0, price:3, image:'/images/items/yield/cigaretts.png?1', image_mini:'images/items/yield/cigaretts.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1823] = {item_id:1823, nshort:'rodeo_trophy', name:'Кубок родео', type:'yield', level:0, price:75, image:'/images/items/yield/rodeo_trophy.png?1', image_mini:'images/items/yield/rodeo_trophy.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1824] = {item_id:1824, nshort:'cougar_hide', name:'Шкура пумы', type:'yield', level:0, price:55, image:'/images/items/yield/cougar_hide.png?1', image_mini:'images/items/yield/cougar_hide.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1825] = {item_id:1825, nshort:'indigo', name:'Индигофера', type:'yield', level:0, price:65, image:'/images/items/yield/indigo.png?1', image_mini:'images/items/yield/indigo.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1826] = {item_id:1826, nshort:'rum', name:'Ром', type:'yield', level:0, price:7, image:'/images/items/yield/rum.png?1', image_mini:'images/items/yield/rum.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1827] = {item_id:1827, nshort:'lead', name:'Свинец', type:'yield', level:0, price:27, image:'/images/items/yield/lead.png?1', image_mini:'images/items/yield/lead.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1828] = {item_id:1828, nshort:'uncut_ruby', name:'Рубин', type:'yield', level:0, price:75, image:'/images/items/yield/uncut_ruby.png?1', image_mini:'images/items/yield/uncut_ruby.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1829] = {item_id:1829, nshort:'uncut_emerald', name:'Изумруд', type:'yield', level:0, price:55, image:'/images/items/yield/uncut_emerald.png?1', image_mini:'images/items/yield/uncut_emerald.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1830] = {item_id:1830, nshort:'uncut_diamond', name:'Алмаз', type:'yield', level:0, price:100, image:'/images/items/yield/uncut_diamond.png?1', image_mini:'images/items/yield/uncut_diamond.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1831] = {item_id:1831, nshort:'woodcross', name:'Деревянный крест', type:'yield', level:0, price:3, image:'/images/items/yield/woodcross.png?1', image_mini:'images/items/yield/woodcross.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1832] = {item_id:1832, nshort:'metall_chip', name:'Железная фишка', type:'yield', level:0, price:50, image:'/images/items/yield/metall_chip.png?1', image_mini:'images/items/yield/metall_chip.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1833] = {item_id:1833, nshort:'death_warrant', name:'Смертный приговор', type:'yield', level:0, price:5, image:'/images/items/yield/death_warrant.png?1', image_mini:'images/items/yield/death_warrant.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1834] = {item_id:1834, nshort:'peaceflower', name:'Цветок мира', type:'yield', level:0, price:1, image:'/images/items/yield/peaceflower.png?1', image_mini:'images/items/yield/peaceflower.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1835] = {item_id:1835, nshort:'rose', name:'Роза', type:'yield', level:0, price:10, image:'/images/items/yield/rose.png?1', image_mini:'images/items/yield/rose.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1836] = {item_id:1836, nshort:'marriage_certificate', name:'Свидетельство о браке', type:'yield', level:0, price:2, image:'/images/items/yield/marriage_certificate.png?1', image_mini:'images/items/yield/marriage_certificate.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1837] = {item_id:1837, nshort:'printing_plate', name:'Клише', type:'yield', level:0, price:150, image:'/images/items/yield/printing_plate.png?1', image_mini:'images/items/yield/printing_plate.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1838] = {item_id:1838, nshort:'wolf_geislein', name:'Волк со вздувшимся брюхом', type:'yield', level:0, price:3, image:'/images/items/yield/wolf_geislein.png?1', image_mini:'images/items/yield/wolf_geislein.png?1', set:{}};
    PK_S3_TEST.items[1839] = {item_id:1839, nshort:'geislein', name:'Козлёнок', type:'yield', level:0, price:75, image:'/images/items/yield/geislein.png?1', image_mini:'images/items/yield/geislein.png?1', set:{}};
    PK_S3_TEST.items[1840] = {item_id:1840, nshort:'bunny', name:'Кролик', type:'yield', level:0, price:75, image:'/images/items/yield/bunny.png?1', image_mini:'images/items/yield/bunny.png?1', set:{}};
    PK_S3_TEST.items[1841] = {item_id:1841, nshort:'elefant', name:'Слон', type:'yield', level:0, price:75, image:'/images/items/yield/elefant.png?1', image_mini:'images/items/yield/elefant.png?1', set:{}};
    PK_S3_TEST.items[1842] = {item_id:1842, nshort:'lion', name:'Лев', type:'yield', level:0, price:75, image:'/images/items/yield/lion.png?1', image_mini:'images/items/yield/lion.png?1', set:{}};
    PK_S3_TEST.items[1843] = {item_id:1843, nshort:'brownbear', name:'Гризли', type:'yield', level:0, price:50, image:'/images/items/yield/brownbear.png?1', image_mini:'images/items/yield/brownbear.png?1', set:{}};
    PK_S3_TEST.items[1844] = {item_id:1844, nshort:'wolf2', name:'Волк', type:'yield', level:0, price:25, image:'/images/items/yield/wolf2.png?1', image_mini:'images/items/yield/wolf2.png?1', set:{}};
    PK_S3_TEST.items[1845] = {item_id:1845, nshort:'snake', name:'Змея', type:'yield', level:0, price:10, image:'/images/items/yield/snake.png?1', image_mini:'images/items/yield/snake.png?1', set:{}};
    PK_S3_TEST.items[1846] = {item_id:1846, nshort:'dwarfpony', name:'Шетлендский пони', type:'yield', level:0, price:35, image:'/images/items/yield/dwarfpony.png?1', image_mini:'images/items/yield/dwarfpony.png?1', set:{}};
    PK_S3_TEST.items[1847] = {item_id:1847, nshort:'eagle', name:'Орёл', type:'yield', level:0, price:350, image:'/images/items/yield/eagle.png?1', image_mini:'images/items/yield/eagle.png?1', set:{}};
    PK_S3_TEST.items[1848] = {item_id:1848, nshort:'cougar', name:'Пума', type:'yield', level:0, price:250, image:'/images/items/yield/cougar.png?1', image_mini:'images/items/yield/cougar.png?1', set:{}};
    PK_S3_TEST.items[1849] = {item_id:1849, nshort:'sheriff_helper', name:'Шерифская звезда', type:'yield', level:0, price:1, image:'/images/items/yield/sheriff_helper.png?1', image_mini:'images/items/yield/sheriff_helper.png?1', set:{}};
    PK_S3_TEST.items[1850] = {item_id:1850, nshort:'animal_card', name:'Карта леса', type:'yield', level:0, price:1, image:'/images/items/yield/animal_card.png?1', image_mini:'images/items/yield/animal_card.png?1', set:{}};    PK_S3_TEST.items[1851] = {item_id:1851, nshort:'elixir_bear', name:'Зелье Медведя', type:'yield', level:0, price:1, image:'/images/items/yield/elixir_bear.png?1', image_mini:'images/items/yield/elixir_bear.png?1', set:{}};
    PK_S3_TEST.items[1852] = {item_id:1852, nshort:'elixir_cougar', name:'Зелье Пумы', type:'yield', level:0, price:1, image:'/images/items/yield/elixir_cougar.png?1', image_mini:'images/items/yield/elixir_cougar.png?1', set:{}};
    PK_S3_TEST.items[1853] = {item_id:1853, nshort:'elixir_eagle', name:'Зелье Орла', type:'yield', level:0, price:1, image:'/images/items/yield/elixir_eagle.png?1', image_mini:'images/items/yield/elixir_eagle.png?1', set:{}};
    PK_S3_TEST.items[1854] = {item_id:1854, nshort:'elixir_snake', name:'Зелье Змеи', type:'yield', level:0, price:1, image:'/images/items/yield/elixir_snake.png?1', image_mini:'images/items/yield/elixir_snake.png?1', set:{}};
PK_S3_TEST.items[1855] = {item_id:1855, nshort:'charcoal', name:'Древесный уголь', type:'yield', level:0, price:31, image:'/images/items/yield/charcoal.png?1', image_mini:'images/items/yield/charcoal.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1856] = {item_id:1856, nshort:'waterjar', name:'Наполненный водой кувшин', type:'yield', level:0, price:30, image:'/images/items/yield/waterjar.png?1', image_mini:'images/items/yield/waterjar.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1857] = {item_id:1857, nshort:'fieldbottle', name:'Фляга', type:'yield', level:0, price:130, image:'/images/items/yield/fieldbottle.png?1', image_mini:'images/items/yield/fieldbottle.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1858] = {item_id:1858, nshort:'workingknife', name:'Рабочий нож', type:'yield', level:0, price:120, image:'/images/items/yield/workingknife.png?1', image_mini:'images/items/yield/workingknife.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1859] = {item_id:1859, nshort:'cookingpan', name:'Сковорода', type:'yield', level:0, price:74, image:'/images/items/yield/cookingpan.png?1', image_mini:'images/items/yield/cookingpan.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1860] = {item_id:1860, nshort:'cuttingwood', name:'Разделочная доска', type:'yield', level:0, price:56, image:'/images/items/yield/cuttingwood.png?1', image_mini:'images/items/yield/cuttingwood.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1861] = {item_id:1861, nshort:'flint', name:'Огниво', type:'yield', level:0, price:32, image:'/images/items/yield/flint.png?1', image_mini:'images/items/yield/flint.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1863] = {item_id:1863, nshort:'beansandbacon', name:'Тушёные бобы с беконом', type:'yield', level:0, price:133, image:'/images/items/yield/beansandbacon.png?1', image_mini:'images/items/yield/beansandbacon.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1864] = {item_id:1864, nshort:'marmelade', name:'Джем', type:'yield', level:0, price:130, image:'/images/items/yield/marmelade.png?1', image_mini:'images/items/yield/marmelade.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1865] = {item_id:1865, nshort:'mash', name:'Сусло', type:'yield', level:0, price:90, image:'/images/items/yield/mash.png?1', image_mini:'images/items/yield/mash.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1866] = {item_id:1866, nshort:'dough', name:'Тесто', type:'yield', level:0, price:41, image:'/images/items/yield/dough.png?1', image_mini:'images/items/yield/dough.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1867] = {item_id:1867, nshort:'seasonedsteak', name:'Стейк в маринаде', type:'yield', level:0, price:115, image:'/images/items/yield/seasonedsteak.png?1', image_mini:'images/items/yield/seasonedsteak.png?1', set:{}, sellable:true};
PK_S3_TEST.items[1868] = {item_id:1868, nshort:'licor', name:'Ягодный ликёр', type:'yield', level:0, price:264, image:'/images/items/yield/licor.png?1', image_mini:'images/items/yield/licor.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1869] = {item_id:1869, nshort:'cake', name:'Торт', type:'yield', level:0, price:83, image:'/images/items/yield/cake.png?1', image_mini:'images/items/yield/cake.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1870] = {item_id:1870, nshort:'fishfond', name:'Рыбный бульон', type:'yield', level:0, price:42, image:'/images/items/yield/fishfond.png?1', image_mini:'images/items/yield/fishfond.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1871] = {item_id:1871, nshort:'grilled_turkey', name:'Жареная индейка', type:'yield', level:0, price:91, image:'/images/items/yield/grilled_turkey.png?1', image_mini:'images/items/yield/grilled_turkey.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1872] = {item_id:1872, nshort:'fishsoup', name:'Уха', type:'yield', level:0, price:130, image:'/images/items/yield/fishsoup.png?1', image_mini:'images/items/yield/fishsoup.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1873] = {item_id:1873, nshort:'veggiepun', name:'Овощные пельмени', type:'yield', level:0, price:256, image:'/images/items/yield/veggiepun.png?1', image_mini:'images/items/yield/veggiepun.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1874] = {item_id:1874, nshort:'meatloaf', name:'Фарш', type:'yield', level:0, price:244, image:'/images/items/yield/meatloaf.png?1', image_mini:'images/items/yield/meatloaf.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1875] = {item_id:1875, nshort:'fishonastick', name:'Запечённая рыба', type:'yield', level:0, price:74, image:'/images/items/yield/fishonastick.png?1', image_mini:'images/items/yield/fishonastick.png?1', set:{}, sellable:true};

    PK_S3_TEST.items[1877] = {item_id:1877, nshort:'sauce', name:'Соус', type:'yield', level:0, price:131, image:'/images/items/yield/sauce.png?1', image_mini:'images/items/yield/sauce.png?1', set:{}, sellable:true};

PK_S3_TEST.items[1879] = {item_id:1879, nshort:'gentlemendinner', name:'Обед джентльмена', type:'yield', level:0, price:188, image:'/images/items/yield/gentlemendinner.png?1', image_mini:'images/items/yield/gentlemendinner.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1880] = {item_id:1880, nshort:'gum', name:'Смола', type:'yield', level:0, price:64, image:'/images/items/yield/gum.png?1', image_mini:'images/items/yield/gum.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1881] = {item_id:1881, nshort:'sulfur', name:'Сера', type:'yield', level:0, price:47, image:'/images/items/yield/sulfur.png?1', image_mini:'images/items/yield/sulfur.png?1', set:{}, sellable:true};
PK_S3_TEST.items[1882] = {item_id:1882, nshort:'pipecleaner', name:'Ёршик', type:'yield', level:0, price:190, image:'/images/items/yield/pipecleaner.png?1', image_mini:'images/items/yield/pipecleaner.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1883] = {item_id:1883, nshort:'stomach', name:'Белая микстура', type:'yield', level:0, price:48, image:'/images/items/yield/stomach.png?1', image_mini:'images/items/yield/stomach.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1884] = {item_id:1884, nshort:'sulfuracid', name:'Серная кислота', type:'yield', level:0, price:79, image:'/images/items/yield/sulfuracid.png?1', image_mini:'images/items/yield/sulfuracid.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1885] = {item_id:1885, nshort:'ink', name:'Чернила', type:'yield', level:0, price:164, image:'/images/items/yield/ink.png?1', image_mini:'images/items/yield/ink.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1886] = {item_id:1886, nshort:'petroleum', name:'Керосин', type:'yield', level:0, price:215, image:'/images/items/yield/petroleum.png?1', image_mini:'images/items/yield/petroleum.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1887] = {item_id:1887, nshort:'fetish', name:'Идол', type:'yield', level:0, price:288, image:'/images/items/yield/fetish.png?1', image_mini:'images/items/yield/fetish.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1888] = {item_id:1888, nshort:'destillate', name:'Дистиллят', type:'yield', level:0, price:470, image:'/images/items/yield/destillate.png?1', image_mini:'images/items/yield/destillate.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1889] = {item_id:1889, nshort:'firewater', name:'Самогон', type:'yield', level:0, price:135, image:'/images/items/yield/firewater.png?1', image_mini:'images/items/yield/firewater.png?1', set:{}, sellable:true};
PK_S3_TEST.items[1890] = {item_id:1890, nshort:'tea', name:'Чай', type:'yield', level:0, price:72, image:'/images/items/yield/tea.png?1', image_mini:'images/items/yield/tea.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1891] = {item_id:1891, nshort:'chewtabaco', name:'Жевательный табак', type:'yield', level:0, price:179, image:'/images/items/yield/chewtabaco.png?1', image_mini:'images/items/yield/chewtabaco.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1892] = {item_id:1892, nshort:'fruitlicor', name:'Фруктовый ликёр', type:'yield', level:0, price:124, image:'/images/items/yield/fruitlicor.png?1', image_mini:'images/items/yield/fruitlicor.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1893] = {item_id:1893, nshort:'battery', name:'Гальванический элемент', type:'yield', level:0, price:180, image:'/images/items/yield/battery.png?1', image_mini:'images/items/yield/battery.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1894] = {item_id:1894, nshort:'lye', name:'Щёлок', type:'yield', level:0, price:139, image:'/images/items/yield/lye.png?1', image_mini:'images/items/yield/lye.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1895] = {item_id:1895, nshort:'herbbrew', name:'Травяной ликёр', type:'yield', level:0, price:122, image:'/images/items/yield/herbbrew.png?1', image_mini:'images/items/yield/herbbrew.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1896] = {item_id:1896, nshort:'rec_paper', name:'Макулатура', type:'yield', level:0, price:126, image:'/images/items/yield/rec_paper.png?1', image_mini:'images/items/yield/rec_paper.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1897] = {item_id:1897, nshort:'mathdraw', name:'Циркуль', type:'yield', level:0, price:83, image:'/images/items/yield/mathdraw.png?1', image_mini:'images/items/yield/mathdraw.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1898] = {item_id:1898, nshort:'rosewater', name:'Розовая вода', type:'yield', level:0, price:83, image:'/images/items/yield/rosewater.png?1', image_mini:'images/items/yield/rosewater.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1899] = {item_id:1899, nshort:'hotiron', name:'Расплавленное железо', type:'yield', level:0, price:72, image:'/images/items/yield/hotiron.png?1', image_mini:'images/items/yield/hotiron.png?1', set:{}, sellable:true};
PK_S3_TEST.items[1900] = {item_id:1900, nshort:'bajonett', name:'Штык', type:'yield', level:0, price:154, image:'/images/items/yield/bajonett.png?1', image_mini:'images/items/yield/bajonett.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1901] = {item_id:1901, nshort:'weightstone', name:'Грузило', type:'yield', level:0, price:108, image:'/images/items/yield/weightstone.png?1', image_mini:'images/items/yield/weightstone.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1902] = {item_id:1902, nshort:'steel', name:'Стальная заготовка', type:'yield', level:0, price:142, image:'/images/items/yield/steel.png?1', image_mini:'images/items/yield/steel.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1903] = {item_id:1903, nshort:'liquid_lead', name:'Расплавленный свинец', type:'yield', level:0, price:134, image:'/images/items/yield/liquid_lead.png?1', image_mini:'images/items/yield/liquid_lead.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1904] = {item_id:1904, nshort:'forge', name:'Наковальня', type:'yield', level:0, price:246, image:'/images/items/yield/forge.png?1', image_mini:'images/items/yield/forge.png?1', set:{}, sellable:true};

    PK_S3_TEST.items[1907] = {item_id:1907, nshort:'rivets', name:'Заклёпки', type:'yield', level:0, price:46, image:'/images/items/yield/rivets.png?1', image_mini:'images/items/yield/rivets.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1908] = {item_id:1908, nshort:'handprotection', name:'Эфес', type:'yield', level:0, price:144, image:'/images/items/yield/handprotection.png?1', image_mini:'images/items/yield/handprotection.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1909] = {item_id:1909, nshort:'coolingpackage', name:'Мокрый платок', type:'yield', level:0, price:62, image:'/images/items/yield/coolingpackage.png?1', image_mini:'images/items/yield/coolingpackage.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1910] = {item_id:1910, nshort:'weaponchain', name:'Оружейная цепь', type:'yield', level:0, price:78, image:'/images/items/yield/weaponchain.png?1', image_mini:'images/items/yield/weaponchain.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1911] = {item_id:1911, nshort:'weapon_handle', name:'Рукоять', type:'yield', level:0, price:206, image:'/images/items/yield/weapon_handle.png?1', image_mini:'images/items/yield/weapon_handle.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1912] = {item_id:1912, nshort:'revolverform', name:'Литейная форма для револьвера', type:'yield', level:0, price:174, image:'/images/items/yield/revolverform.png?1', image_mini:'images/items/yield/revolverform.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1913] = {item_id:1913, nshort:'steelblade', name:'Стальное лезвие', type:'yield', level:0, price:234, image:'/images/items/yield/steelblade.png?1', image_mini:'images/items/yield/steelblade.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1914] = {item_id:1914, nshort:'weapon_custom', name:'Украшения', type:'yield', level:0, price:100, image:'/images/items/yield/weapon_custom.png?1', image_mini:'images/items/yield/weapon_custom.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1915] = {item_id:1915, nshort:'druse', name:'Жеода', type:'yield', level:0, price:112, image:'/images/items/yield/druse.png?1', image_mini:'images/items/yield/druse.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1916] = {item_id:1916, nshort:'polishstone', name:'Полировочный камень', type:'yield', level:0, price:252, image:'/images/items/yield/polishstone.png?1', image_mini:'images/items/yield/polishstone.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1917] = {item_id:1917, nshort:'leatherband', name:'Кожаный ремешок', type:'yield', level:0, price:60, image:'/images/items/yield/leatherband.png?1', image_mini:'images/items/yield/leatherband.png?1', set:{}, sellable:true};
PK_S3_TEST.items[1918] = {item_id:1918, nshort:'horseshoe_equip', name:'Набивка подков', type:'yield', level:0, price:68, image:'/images/items/yield/horseshoe_equip.png?1', image_mini:'images/items/yield/horseshoe_equip.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1919] = {item_id:1919, nshort:'powerfood', name:'Комбикорм', type:'yield', level:0, price:32, image:'/images/items/yield/powerfood.png?1', image_mini:'images/items/yield/powerfood.png?1', set:{}, auctionable:true, sellable:true};

    PK_S3_TEST.items[1923] = {item_id:1923, nshort:'branding_iron', name:'Клеймо', type:'yield', level:0, price:220, image:'/images/items/yield/branding_iron.png?1', image_mini:'images/items/yield/branding_iron.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1924] = {item_id:1924, nshort:'notworking_compass', name:'Неработающий компас', type:'yield', level:0, price:304, image:'/images/items/yield/notworking_compass.png?1', image_mini:'images/items/yield/notworking_compass.png?1', set:{}, auctionable:true, sellable:true};
    
PK_S3_TEST.items[1927] = {item_id:1927, nshort:'harnish', name:'Уздечка Элама Харниша', type:'yield', level:0, price:154, image:'/images/items/yield/harnish.png?1', image_mini:'images/items/yield/harnish.png?1', set:{}, auctionable:true, sellable:true};

    PK_S3_TEST.items[1934] = {item_id:1934, nshort:'gem_knob', name:'Украшенная драгоценными камнями лука седла', type:'yield', level:0, price:194, image:'/images/items/yield/gem_knob.png?1', image_mini:'images/items/yield/gem_knob.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1935] = {item_id:1935, nshort:'fixed_spade', name:'Лопата со склеенным черенком', type:'yield', level:0, price:15, image:'/images/items/yield/fixed_spade.png?1', image_mini:'images/items/yield/fixed_spade.png?1', set:{}};
    PK_S3_TEST.items[1936] = {item_id:1936, nshort:'money_bag', name:'Бумажник', type:'yield', level:0, price:25, image:'/images/items/yield/money_bag.png?1', image_mini:'images/items/yield/money_bag.png?1', set:{}};
PK_S3_TEST.items[1937] = {item_id:1937, nshort:'travelbag', name:'Ранец путешественника', type:'yield', level:0, price:22, image:'/images/items/yield/travelbag.png?1', image_mini:'images/items/yield/travelbag.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1938] = {item_id:1938, nshort:'sharpweapon', name:'Заточка оружия', type:'yield', level:0, price:16, image:'/images/items/yield/sharpweapon.png?1', image_mini:'images/items/yield/sharpweapon.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1939] = {item_id:1939, nshort:'filtercigaretts', name:'Сигареты с фильтром', type:'yield', level:0, price:29, image:'/images/items/yield/filtercigaretts.png?1', image_mini:'images/items/yield/filtercigaretts.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1940] = {item_id:1940, nshort:'cake_piece', name:'Шоколадное пирожное с вишней', type:'yield', level:0, price:17, image:'/images/items/yield/cake_piece.png?1', image_mini:'images/items/yield/cake_piece.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1941] = {item_id:1941, nshort:'tomato_mash', name:'Томатное пюре', type:'yield', level:0, price:6, image:'/images/items/yield/tomato_mash.png?1', image_mini:'images/items/yield/tomato_mash.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1942] = {item_id:1942, nshort:'tomato_sauce', name:'Томатный соус', type:'yield', level:0, price:15, image:'/images/items/yield/tomato_sauce.png?1', image_mini:'images/items/yield/tomato_sauce.png?1', set:{}, sellable:true};
PK_S3_TEST.items[1943] = {item_id:1943, nshort:'baked_beans', name:'Бобы в томатном соусе', type:'yield', level:0, price:50, image:'/images/items/yield/baked_beans.png?1', image_mini:'images/items/yield/baked_beans.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1944] = {item_id:1944, nshort:'raw_pyrit', name:'Очищенный пирит', type:'yield', level:0, price:16, image:'/images/items/yield/raw_pyrit.png?1', image_mini:'images/items/yield/raw_pyrit.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1945] = {item_id:1945, nshort:'pyritsun', name:'Пиритовый доллар', type:'yield', level:0, price:20, image:'/images/items/yield/pyritsun.png?1', image_mini:'images/items/yield/pyritsun.png?1', set:{}, sellable:true};
PK_S3_TEST.items[1946] = {item_id:1946, nshort:'pyrit_amulett', name:'Пиритовый амулет', type:'yield', level:0, price:50, image:'/images/items/yield/pyrit_amulett.png?1', image_mini:'images/items/yield/pyrit_amulett.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1947] = {item_id:1947, nshort:'graphit', name:'Графит', type:'yield', level:0, price:20, image:'/images/items/yield/graphit.png?1', image_mini:'images/items/yield/graphit.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1948] = {item_id:1948, nshort:'graphitpulver', name:'Графитовый порошок', type:'yield', level:0, price:25, image:'/images/items/yield/graphitpulver.png?1', image_mini:'images/items/yield/graphitpulver.png?1', set:{}, sellable:true};
PK_S3_TEST.items[1949] = {item_id:1949, nshort:'graphit_glue', name:'Графитовая смазка', type:'yield', level:0, price:50, image:'/images/items/yield/graphit_glue.png?1', image_mini:'images/items/yield/graphit_glue.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[1950] = {item_id:1950, nshort:'workedleather', name:'Дублёная кожа', type:'yield', level:0, price:16, image:'/images/items/yield/workedleather.png?1', image_mini:'images/items/yield/workedleather.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1951] = {item_id:1951, nshort:'leathersac', name:'Кожаный мешок', type:'yield', level:0, price:25, image:'/images/items/yield/leathersac.png?1', image_mini:'images/items/yield/leathersac.png?1', set:{}, sellable:true};
PK_S3_TEST.items[1952] = {item_id:1952, nshort:'foodsac', name:'Мешок с зерном', type:'yield', level:0, price:50, image:'/images/items/yield/foodsac.png?1', image_mini:'images/items/yield/foodsac.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1953] = {item_id:1953, nshort:'simple_bow', name:'Лук', type:'yield', level:0, price:50, image:'/images/items/yield/simple_bow.png?1', image_mini:'images/items/yield/simple_bow.png?1', set:{}};
    PK_S3_TEST.items[1954] = {item_id:1954, nshort:'simple_rifle', name:'Ружьё', type:'yield', level:0, price:50, image:'/images/items/yield/simple_rifle.png?1', image_mini:'images/items/yield/simple_rifle.png?1', set:{}};

    PK_S3_TEST.items[1956] = {item_id:1956, nshort:'totem_snake', name:'Тотем Змеи', type:'yield', level:1, price:10, image:'/images/items/yield/totem_snake.png?1', image_mini:'images/items/yield/totem_snake.png?1', set:{}};
    PK_S3_TEST.items[1957] = {item_id:1957, nshort:'totem_cougart', name:'Тотем Пумы', type:'yield', level:1, price:10, image:'/images/items/yield/totem_cougart.png?1', image_mini:'images/items/yield/totem_cougart.png?1', set:{}, auctionable:false, dropable:false, tradeable:false, sellable:false};
    PK_S3_TEST.items[1958] = {item_id:1958, nshort:'totem_eagle', name:'Тотем Орла', type:'yield', level:1, price:10, image:'/images/items/yield/totem_eagle.png?1', image_mini:'images/items/yield/totem_eagle.png?1', set:{}};
    PK_S3_TEST.items[1959] = {item_id:1959, nshort:'totem_bear', name:'Тотем Медведя', type:'yield', level:1, price:10, image:'/images/items/yield/totem_bear.png?1', image_mini:'images/items/yield/totem_bear.png?1', set:{}};
    PK_S3_TEST.items[1960] = {item_id:1960, nshort:'leatherbag', name:'Кожаная сумка', type:'yield', level:0, price:39, image:'/images/items/yield/leatherbag.png?1', image_mini:'images/items/yield/leatherbag.png?1', set:{}};
    PK_S3_TEST.items[1961] = {item_id:1961, nshort:'leatherpouch', name:'Кожаная саква', type:'yield', level:0, price:93, image:'/images/items/yield/leatherpouch.png?1', image_mini:'images/items/yield/leatherpouch.png?1', set:{}};    PK_S3_TEST.items[1862] = {item_id:1862, nshort:'cornflour', name:'Кукурузная мука', type:'yield', level:0, price:20, image:'/images/items/yield/cornflour.png?1', image_mini:'images/items/yield/cornflour.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[1962] = {item_id:1962, nshort:'salt', name:'Соль', type:'yield', level:0, price:55, image:'/images/items/yield/salt.png?1', image_mini:'images/items/yield/salt.png?1', set:{}};
    PK_S3_TEST.items[1963] = {item_id:1963, nshort:'fertilizer', name:'Удобрение', type:'yield', level:0, price:49, image:'/images/items/yield/fertilizer.png?1', image_mini:'images/items/yield/fertilizer.png?1', set:{}};
    PK_S3_TEST.items[1964] = {item_id:1964, nshort:'tin', name:'Оловянная коробка', type:'yield', level:0, price:110, image:'/images/items/yield/tin.png?1', image_mini:'images/items/yield/tin.png?1', set:{}};
    PK_S3_TEST.items[1965] = {item_id:1965, nshort:'old_letters', name:'Старые письма', type:'yield', level:0, price:1, image:'/images/items/yield/old_letters.png?1', image_mini:'images/items/yield/old_letters.png?1', set:{}};
    PK_S3_TEST.items[1966] = {item_id:1966, nshort:'ownership_certification', name:'Право собственности на ферму', type:'yield', level:0, price:30, image:'/images/items/yield/ownership_certification.png?1', image_mini:'images/items/yield/ownership_certification.png?1', set:{}};
    PK_S3_TEST.items[1967] = {item_id:1967, nshort:'bag_of_vittles', name:'Заплечный узелок', type:'yield', level:0, price:93, image:'/images/items/yield/bag_of_vittles.png?1', image_mini:'images/items/yield/bag_of_vittles.png?1', set:{}};
    PK_S3_TEST.items[1968] = {item_id:1968, nshort:'horse_tonic', name:'Конский тоник', type:'yield', level:0, price:69, image:'/images/items/yield/horse_tonic.png?1', image_mini:'images/items/yield/horse_tonic.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1969] = {item_id:1969, nshort:'12_years_old_whiskey', name:'Виски двенадцатилетней выдержки', type:'yield', level:0, price:62, image:'/images/items/yield/12_years_old_whiskey.png?1', image_mini:'images/items/yield/12_years_old_whiskey.png?1', set:{}, auctionable:true};
    PK_S3_TEST.items[1970] = {item_id:1970, nshort:'cherry_cake', name:'Вишнёвый торт', type:'yield', level:0, price:39, image:'/images/items/yield/cherry_cake.png?1', image_mini:'images/items/yield/cherry_cake.png?1', set:{}, auctionable:true};
    PK_S3_TEST.items[1971] = {item_id:1971, nshort:'tabacopipe', name:'Набитая трубка', type:'yield', level:0, price:99, image:'/images/items/yield/tabacopipe.png?1', image_mini:'images/items/yield/tabacopipe.png?1', set:{}};

    PK_S3_TEST.items[1973] = {item_id:1973, nshort:'juniper_brew', name:'Джин', type:'yield', level:0, price:7, image:'/images/items/yield/juniper_brew.png?1', image_mini:'images/items/yield/juniper_brew.png?1', set:{}};
    PK_S3_TEST.items[1974] = {item_id:1974, nshort:'lifeelixir', name:'Эликсир здоровья', type:'yield', level:0, price:7, image:'/images/items/yield/lifeelixir.png?1', image_mini:'images/items/yield/lifeelixir.png?1', set:{}};

    PK_S3_TEST.items[1980] = {item_id:1980, nshort:'dried_meat', name:'Вяленое мясо', type:'yield', level:0, price:83, image:'/images/items/yield/dried_meat.png?1', image_mini:'images/items/yield/dried_meat.png?1', set:{}, auctionable:true, sellable:true};

    PK_S3_TEST.items[1989] = {item_id:1989, nshort:'rustprove_bolts', name:'Нержавеющие болты', type:'yield', level:0, price:282, image:'/images/items/yield/rustprove_bolts.png?1', image_mini:'images/items/yield/rustprove_bolts.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1990] = {item_id:1990, nshort:'silvered_flask', name:'Hip flask', type:'yield', level:0, price:618, image:'/images/items/yield/silvered_flask.png?1', image_mini:'images/items/yield/silvered_flask.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1991] = {item_id:1991, nshort:'modern_armor', name:'Modern armor', type:'yield', level:0, price:436, image:'/images/items/yield/modern_armor.png?1', image_mini:'images/items/yield/modern_armor.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[1992] = {item_id:1992, nshort:'old_newspaper', name:'Старая газета', type:'yield', level:0, price:1, image:'/images/items/yield/old_newspaper.png?1', image_mini:'images/items/yield/old_newspaper.png?1', set:{}};

    PK_S3_TEST.items[1994] = {item_id:1994, nshort:'lamb_meat', name:'Баранина', type:'yield', level:0, price:25, image:'/images/items/yield/lamb_meat.png?1', image_mini:'images/items/yield/lamb_meat.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}};
    PK_S3_TEST.items[1995] = {item_id:1995, nshort:'buffalo_meat', name:'Мясо бизона', type:'yield', level:0, price:20, image:'/images/items/yield/buffalo_meat.png?1', image_mini:'images/items/yield/buffalo_meat.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}};
    PK_S3_TEST.items[1996] = {item_id:1996, nshort:'loaf_bread', name:'Буханка хлеба', type:'yield', level:0, price:8, image:'/images/items/yield/loaf_bread.png?1', image_mini:'images/items/yield/loaf_bread.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}};
    PK_S3_TEST.items[1997] = {item_id:1997, nshort:'thanksgiving_turkey', name:'Индейка на День благодарения', type:'yield', level:0, price:1, image:'/images/items/yield/thanksgiving_turkey.png?1', image_mini:'images/items/yield/thanksgiving_turkey.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}};
    PK_S3_TEST.items[1998] = {item_id:1998, nshort:'christmas_stollen', name:'Stollen', type:'yield', level:0, price:1, image:'/images/items/yield/christmas_stollen.png?1', image_mini:'images/items/yield/christmas_stollen.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}};
    
PK_S3_TEST.items[10000] = {item_id:10000, nshort:'shredded_grey', name:'Серые рваные штаны', type:'pants', level:1, price:10, image:'/images/items/pants/shredded_grey.png?1', image_mini:'/images/items/pants/mini/shredded_grey.png?1', bonus:{skills:{ride:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10001] = {item_id:10001, nshort:'shredded_yellow', name:'Жёлтые рваные штаны', type:'pants', level:1, price:35, image:'/images/items/pants/shredded_yellow.png?1', image_mini:'/images/items/pants/mini/shredded_yellow.png?1', bonus:{skills:{tactic:1, leadership:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[10002] = {item_id:10002, nshort:'shredded_blue', name:'Синие рваные штаны', type:'pants', level:2, price:55, image:'/images/items/pants/shredded_blue.png?1', image_mini:'/images/items/pants/mini/shredded_blue.png?1', bonus:{skills:{animal:2, ride:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10003] = {item_id:10003, nshort:'shredded_green', name:'Зелёные рваные штаны', type:'pants', level:2, price:65, image:'/images/items/pants/shredded_green.png?1', image_mini:'/images/items/pants/mini/shredded_green.png?1', bonus:{skills:{swim:1, punch:2, build:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10004] = {item_id:10004, nshort:'shredded_brown', name:'Коричневые рваные штаны', type:'pants', level:3, price:95, image:'/images/items/pants/shredded_brown.png?1', image_mini:'/images/items/pants/mini/shredded_brown.png?1', bonus:{skills:{appearance:1, leadership:1}, attributes:{charisma:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[10005] = {item_id:10005, nshort:'shredded_black', name:'Чёрные рваные штаны', type:'pants', level:3, price:95, image:'/images/items/pants/shredded_black.png?1', image_mini:'/images/items/pants/mini/shredded_black.png?1', bonus:{skills:{pitfall:1, endurance:1}, attributes:{strength:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10006] = {item_id:10006, nshort:'shredded_p1', name:'Знатные рваные штаны', type:'pants', level:4, price:290, image:'/images/items/pants/shredded_p1.png?1', image_mini:'/images/items/pants/mini/shredded_p1.png?1', bonus:{skills:{hide:1, reflex:1, ride:3}, attributes:{flexibility:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10007] = {item_id:10007, nshort:'shredded_fine', name:'Рваные штаны Джима', type:'pants', level:6, price:420, image:'/images/items/pants/shredded_fine.png?1', image_mini:'/images/items/pants/mini/shredded_fine.png?1', bonus:{skills:{repair:3, finger_dexterity:3, endurance:3, build:6}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10010] = {item_id:10010, nshort:'shorts_grey', name:'Серые шорты', type:'pants', level:7, price:232, image:'/images/items/pants/shorts_grey.png?1', image_mini:'/images/items/pants/mini/shorts_grey.png?1', bonus:{skills:{tactic:3, swim:3, ride:4}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10011] = {item_id:10011, nshort:'shorts_yellow', name:'Жёлтые шорты', type:'pants', level:8, price:430, image:'/images/items/pants/shorts_yellow.png?1', image_mini:'/images/items/pants/mini/shorts_yellow.png?1', bonus:{skills:{leadership:5, hide:7}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10012] = {item_id:10012, nshort:'shorts_blue', name:'Синие шорты', type:'pants', level:8, price:430, image:'/images/items/pants/shorts_blue.png?1', image_mini:'/images/items/pants/mini/shorts_blue.png?1', bonus:{skills:{animal:6, trade:2, ride:5}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10013] = {item_id:10013, nshort:'shorts_green', name:'Зелёные шорты', type:'pants', level:8, price:430, image:'/images/items/pants/shorts_green.png?1', image_mini:'/images/items/pants/mini/shorts_green.png?1', bonus:{skills:{repair:5, punch:4, build:5}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10014] = {item_id:10014, nshort:'shorts_brown', name:'Коричневые шорты', type:'pants', level:9, price:470, image:'/images/items/pants/shorts_brown.png?1', image_mini:'/images/items/pants/mini/shorts_brown.png?1', bonus:{skills:{pitfall:5, shot:3, endurance:3}, attributes:{strength:1}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10015] = {item_id:10015, nshort:'shorts_black', name:'Чёрные шорты', type:'pants', level:9, price:480, image:'/images/items/pants/shorts_black.png?1', image_mini:'/images/items/pants/mini/shorts_black.png?1', bonus:{skills:{trade:4, leadership:6}, attributes:{charisma:1}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10016] = {item_id:10016, nshort:'shorts_p1', name:'Знатные шорты', type:'pants', level:10, price:1280, image:'/images/items/pants/shorts_p1.png?1', image_mini:'/images/items/pants/mini/shorts_p1.png?1', bonus:{skills:{appearance:6, finger_dexterity:8, reflex:5, tough:4}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10017] = {item_id:10017, nshort:'shorts_fine', name:'Шорты Фрэнка Батлера', type:'pants', level:12, price:1460, image:'/images/items/pants/shorts_fine.png?1', image_mini:'/images/items/pants/mini/shorts_fine.png?1', bonus:{skills:{shot:8, aim:7, dodge:7, health:6}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10020] = {item_id:10020, nshort:'puritan_grey', name:'Серые прямые штаны', type:'pants', level:12, price:360, image:'/images/items/pants/puritan_grey.png?1', image_mini:'/images/items/pants/mini/puritan_grey.png?1', bonus:{skills:{hide:2, ride:5, punch:4}, attributes:{strength:1}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10021] = {item_id:10021, nshort:'puritan_yellow', name:'Жёлтые прямые штаны', type:'pants', level:13, price:600, image:'/images/items/pants/puritan_yellow.png?1', image_mini:'/images/items/pants/mini/puritan_yellow.png?1', bonus:{skills:{hide:6, reflex:5}, attributes:{dexterity:1, flexibility:1}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10022] = {item_id:10022, nshort:'puritan_blue', name:'Синие прямые штаны', type:'pants', level:13, price:640, image:'/images/items/pants/puritan_blue.png?1', image_mini:'/images/items/pants/mini/puritan_blue.png?1', bonus:{skills:{pitfall:4, swim:10}, attributes:{strength:1}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10023] = {item_id:10023, nshort:'puritan_green', name:'Зелёные прямые штаны', type:'pants', level:13, price:630, image:'/images/items/pants/puritan_green.png?1', image_mini:'/images/items/pants/mini/puritan_green.png?1', bonus:{skills:{leadership:7, endurance:5, build:8}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10024] = {item_id:10024, nshort:'puritan_brown', name:'Коричневые прямые штаны', type:'pants', level:14, price:650, image:'/images/items/pants/puritan_brown.png?1', image_mini:'/images/items/pants/mini/puritan_brown.png?1', bonus:{skills:{tactic:8, finger_dexterity:7, tough:6}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10025] = {item_id:10025, nshort:'puritan_black', name:'Чёрные прямые штаны', type:'pants', level:14, price:670, image:'/images/items/pants/puritan_black.png?1', image_mini:'/images/items/pants/mini/puritan_black.png?1', bonus:{skills:{animal:9, trade:5, shot:7}}, set:{key:'set_farmer', name:'Набор фермера'}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10026] = {item_id:10026, nshort:'puritan_p1', name:'Знатные прямые штаны', type:'pants', level:15, price:1680, image:'/images/items/pants/puritan_p1.png?1', image_mini:'/images/items/pants/mini/puritan_p1.png?1', bonus:{skills:{pitfall:5, reflex:9}, attributes:{dexterity:1, strength:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10027] = {item_id:10027, nshort:'puritan_fine', name:'Прямые штаны Гека Финна', type:'pants', level:16, price:1800, image:'/images/items/pants/puritan_fine.png?1', image_mini:'/images/items/pants/mini/puritan_fine.png?1', bonus:{skills:{repair:6, finger_dexterity:6, swim:8, build:12}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10030] = {item_id:10030, nshort:'shortscheck_grey', name:'Серые бриджи', type:'pants', level:16, price:610, image:'/images/items/pants/shortscheck_grey.png?1', image_mini:'/images/items/pants/mini/shortscheck_grey.png?1', bonus:{skills:{endurance:10, punch:7}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10031] = {item_id:10031, nshort:'shortscheck_yellow', name:'Жёлтые бриджи', type:'pants', level:17, price:1520, image:'/images/items/pants/shortscheck_yellow.png?1', image_mini:'/images/items/pants/mini/shortscheck_yellow.png?1', bonus:{skills:{repair:10, pitfall:8}, attributes:{dexterity:1}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10032] = {item_id:10032, nshort:'shortscheck_blue', name:'Синие бриджи', type:'pants', level:17, price:1560, image:'/images/items/pants/shortscheck_blue.png?1', image_mini:'/images/items/pants/mini/shortscheck_blue.png?1', bonus:{attributes:{charisma:2, dexterity:3, flexibility:1, strength:3}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10033] = {item_id:10033, nshort:'shortscheck_green', name:'Зелёные бриджи', type:'pants', level:17, price:1520, image:'/images/items/pants/shortscheck_green.png?1', image_mini:'/images/items/pants/mini/shortscheck_green.png?1', bonus:{skills:{hide:10, tough:8}, attributes:{charisma:1}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10034] = {item_id:10034, nshort:'shortscheck_brown', name:'Коричневые бриджи', type:'pants', level:18, price:1620, image:'/images/items/pants/shortscheck_brown.png?1', image_mini:'/images/items/pants/mini/shortscheck_brown.png?1', bonus:{skills:{shot:10, aim:7, dodge:9}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10035] = {item_id:10035, nshort:'shortscheck_black', name:'Чёрные бриджи', type:'pants', level:18, price:1660, image:'/images/items/pants/shortscheck_black.png?1', image_mini:'/images/items/pants/mini/shortscheck_black.png?1', bonus:{skills:{appearance:9, trade:10, tactic:8}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10036] = {item_id:10036, nshort:'shortscheck_p1', name:'Знатные бриджи', type:'pants', level:19, price:2880, image:'/images/items/pants/shortscheck_p1.png?1', image_mini:'/images/items/pants/mini/shortscheck_p1.png?1', bonus:{skills:{repair:10, finger_dexterity:10, pitfall:9, shot:8}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10037] = {item_id:10037, nshort:'shortscheck_fine', name:'Бриджи Вашингтона Ирвинга', type:'pants', level:20, price:3120, image:'/images/items/pants/shortscheck_fine.png?1', image_mini:'/images/items/pants/mini/shortscheck_fine.png?1', bonus:{skills:{leadership:8, swim:10, reflex:9, ride:12}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10040] = {item_id:10040, nshort:'check_grey', name:'Серые клетчатые штаны', type:'pants', level:20, price:690, image:'/images/items/pants/check_grey.png?1', image_mini:'/images/items/pants/mini/check_grey.png?1', bonus:{skills:{hide:8, reflex:5, endurance:5}, attributes:{strength:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10041] = {item_id:10041, nshort:'check_yellow', name:'Жёлтые клетчатые штаны', type:'pants', level:21, price:1720, image:'/images/items/pants/check_yellow.png?1', image_mini:'/images/items/pants/mini/check_yellow.png?1', bonus:{skills:{tough:7, punch:8}, attributes:{dexterity:2, strength:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10042] = {item_id:10042, nshort:'check_blue', name:'Синие клетчатые штаны', type:'pants', level:21, price:1760, image:'/images/items/pants/check_blue.png?1', image_mini:'/images/items/pants/mini/check_blue.png?1', bonus:{skills:{pitfall:8, swim:6, build:10}, attributes:{flexibility:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10043] = {item_id:10043, nshort:'check_green', name:'Зелёные клетчатые штаны', type:'pants', level:21, price:1780, image:'/images/items/pants/check_green.png?1', image_mini:'/images/items/pants/mini/check_green.png?1', bonus:{skills:{appearance:7, health:8, punch:6}, attributes:{strength:2}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10044] = {item_id:10044, nshort:'check_brown', name:'Коричневые клетчатые штаны', type:'pants', level:22, price:1840, image:'/images/items/pants/check_brown.png?1', image_mini:'/images/items/pants/mini/check_brown.png?1', bonus:{skills:{shot:8, hide:6, ride:8}, attributes:{flexibility:2}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10045] = {item_id:10045, nshort:'check_black', name:'Чёрные клетчатые штаны', type:'pants', level:22, price:1880, image:'/images/items/pants/check_black.png?1', image_mini:'/images/items/pants/mini/check_black.png?1', bonus:{skills:{repair:10, finger_dexterity:10}, attributes:{flexibility:2}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10046] = {item_id:10046, nshort:'check_p1', name:'Знатные клетчатые штаны', type:'pants', level:24, price:3540, image:'/images/items/pants/check_p1.png?1', image_mini:'/images/items/pants/mini/check_p1.png?1', bonus:{skills:{appearance:12, animal:10, trade:12, tactic:12}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10047] = {item_id:10047, nshort:'check_fine', name:'Клетчатые штаны Анни Окли', type:'pants', level:25, price:3630, image:'/images/items/pants/check_fine.png?1', image_mini:'/images/items/pants/mini/check_fine.png?1', bonus:{skills:{shot:12, aim:14, dodge:10, health:9}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10050] = {item_id:10050, nshort:'fur_grey', name:'Серые меховые штаны', type:'pants', level:25, price:1230, image:'/images/items/pants/fur_grey.png?1', image_mini:'/images/items/pants/mini/fur_grey.png?1', bonus:{skills:{shot:7, hide:8, reflex:8}, attributes:{dexterity:1}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10051] = {item_id:10051, nshort:'fur_yellow', name:'Жёлтые меховые штаны', type:'pants', level:26, price:3000, image:'/images/items/pants/fur_yellow.png?1', image_mini:'/images/items/pants/mini/fur_yellow.png?1', bonus:{skills:{endurance:8, punch:8, build:9}, attributes:{strength:2}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10052] = {item_id:10052, nshort:'fur_blue', name:'Синие меховые штаны', type:'pants', level:26, price:3060, image:'/images/items/pants/fur_blue.png?1', image_mini:'/images/items/pants/mini/fur_blue.png?1', bonus:{skills:{animal:8, pitfall:14, hide:10}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10053] = {item_id:10053, nshort:'fur_green', name:'Зелёные меховые штаны', type:'pants', level:26, price:3000, image:'/images/items/pants/fur_green.png?1', image_mini:'/images/items/pants/mini/fur_green.png?1', bonus:{skills:{appearance:16}, attributes:{charisma:3}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10054] = {item_id:10054, nshort:'fur_brown', name:'Коричневые меховые штаны', type:'pants', level:27, price:3090, image:'/images/items/pants/fur_brown.png?1', image_mini:'/images/items/pants/mini/fur_brown.png?1', bonus:{skills:{tactic:14, leadership:11, finger_dexterity:7}}, set:{key:'set_mexican', name:'Набор мексиканца'}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10055] = {item_id:10055, nshort:'fur_black', name:'Чёрные меховые штаны', type:'pants', level:27, price:3120, image:'/images/items/pants/fur_black.png?1', image_mini:'/images/items/pants/mini/fur_black.png?1', bonus:{skills:{trade:17, endurance:12}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10056] = {item_id:10056, nshort:'fur_p1', name:'Знатные меховые штаны', type:'pants', level:30, price:4725, image:'/images/items/pants/fur_p1.png?1', image_mini:'/images/items/pants/mini/fur_p1.png?1', bonus:{skills:{repair:10, swim:15, ride:15, tough:10}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10057] = {item_id:10057, nshort:'fur_fine', name:'Шайеннские меховые штаны', type:'pants', level:32, price:5075, image:'/images/items/pants/fur_fine.png?1', image_mini:'/images/items/pants/mini/fur_fine.png?1', bonus:{skills:{shot:19, dodge:15}, attributes:{charisma:2}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10060] = {item_id:10060, nshort:'dungarees_grey', name:'Серый комбинезон', type:'pants', level:31, price:1395, image:'/images/items/pants/dungarees_grey.png?1', image_mini:'/images/items/pants/mini/dungarees_grey.png?1', bonus:{skills:{pitfall:15}, attributes:{dexterity:2, strength:1}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10061] = {item_id:10061, nshort:'dungarees_yellow', name:'Жёлтый комбинезон', type:'pants', level:32, price:3360, image:'/images/items/pants/dungarees_yellow.png?1', image_mini:'/images/items/pants/mini/dungarees_yellow.png?1', bonus:{skills:{repair:12, finger_dexterity:10, reflex:14}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10062] = {item_id:10062, nshort:'dungarees_blue', name:'Синий комбинезон', type:'pants', level:32, price:3420, image:'/images/items/pants/dungarees_blue.png?1', image_mini:'/images/items/pants/mini/dungarees_blue.png?1', bonus:{skills:{ride:15, punch:9, build:12}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10063] = {item_id:10063, nshort:'dungarees_green', name:'Зелёный комбинезон', type:'pants', level:32, price:3420, image:'/images/items/pants/dungarees_green.png?1', image_mini:'/images/items/pants/mini/dungarees_green.png?1', bonus:{skills:{swim:14, endurance:12, tough:11}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10064] = {item_id:10064, nshort:'dungarees_brown', name:'Коричневый комбинезон', type:'pants', level:33, price:3510, image:'/images/items/pants/dungarees_brown.png?1', image_mini:'/images/items/pants/mini/dungarees_brown.png?1', bonus:{skills:{shot:15, hide:15}, attributes:{dexterity:1}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10065] = {item_id:10065, nshort:'dungarees_black', name:'Чёрный комбинезон', type:'pants', level:33, price:3540, image:'/images/items/pants/dungarees_black.png?1', image_mini:'/images/items/pants/mini/dungarees_black.png?1', bonus:{skills:{trade:14, tactic:10, leadership:14}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10066] = {item_id:10066, nshort:'dungarees_p1', name:'Знатный комбинезон', type:'pants', level:35, price:5250, image:'/images/items/pants/dungarees_p1.png?1', image_mini:'/images/items/pants/mini/dungarees_p1.png?1', bonus:{skills:{appearance:15, animal:15}, attributes:{charisma:3, dexterity:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10067] = {item_id:10067, nshort:'dungarees_fine', name:'Комбинезон Боба-строителя', type:'pants', level:38, price:5775, image:'/images/items/pants/dungarees_fine.png?1', image_mini:'/images/items/pants/mini/dungarees_fine.png?1', bonus:{skills:{endurance:17, punch:17, build:17}, attributes:{strength:1}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10070] = {item_id:10070, nshort:'fine_grey', name:'Серые холщовые штаны', type:'pants', level:37, price:1470, image:'/images/items/pants/fine_grey.png?1', image_mini:'/images/items/pants/mini/fine_grey.png?1', bonus:{skills:{trade:10, leadership:11}, attributes:{charisma:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10071] = {item_id:10071, nshort:'fine_yellow', name:'Жёлтые холщовые штаны', type:'pants', level:38, price:3600, image:'/images/items/pants/fine_yellow.png?1', image_mini:'/images/items/pants/mini/fine_yellow.png?1', bonus:{skills:{animal:19, pitfall:7, ride:10}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10072] = {item_id:10072, nshort:'fine_blue', name:'Синие холщовые штаны', type:'pants', level:38, price:3570, image:'/images/items/pants/fine_blue.png?1', image_mini:'/images/items/pants/mini/fine_blue.png?1', bonus:{skills:{repair:7, swim:15, hide:15}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10073] = {item_id:10073, nshort:'fine_green', name:'Зелёные холщовые штаны', type:'pants', level:38, price:3570, image:'/images/items/pants/fine_green.png?1', image_mini:'/images/items/pants/mini/fine_green.png?1', bonus:{skills:{appearance:17, tactic:17}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10074] = {item_id:10074, nshort:'fine_brown', name:'Коричневые холщовые штаны', type:'pants', level:40, price:3630, image:'/images/items/pants/fine_brown.png?1', image_mini:'/images/items/pants/mini/fine_brown.png?1', bonus:{skills:{reflex:19}, attributes:{dexterity:3, flexibility:1}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10075] = {item_id:10075, nshort:'fine_black', name:'Чёрные холщовые штаны', type:'pants', level:40, price:3450, image:'/images/items/pants/fine_black.png?1', image_mini:'/images/items/pants/mini/fine_black.png?1', bonus:{skills:{dodge:9, health:8, endurance:15}, attributes:{strength:1}}, set:{key:'set_gentleman', name:'Набор джентльмена'}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10076] = {item_id:10076, nshort:'fine_p1', name:'Знатные холщовые штаны', type:'pants', level:45, price:5775, image:'/images/items/pants/fine_p1.png?1', image_mini:'/images/items/pants/mini/fine_p1.png?1', bonus:{skills:{finger_dexterity:12, shot:12, tough:15, punch:12}, attributes:{dexterity:1, strength:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10077] = {item_id:10077, nshort:'fine_fine', name:'Холщовые штаны Бэта Мастерсона', type:'pants', level:48, price:6300, image:'/images/items/pants/fine_fine.png?1', image_mini:'/images/items/pants/mini/fine_fine.png?1', bonus:{skills:{pitfall:18, hide:18}, attributes:{dexterity:3, flexibility:2}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10080] = {item_id:10080, nshort:'breeches_grey', name:'Серые брюки', type:'pants', level:41, price:2020, image:'/images/items/pants/breeches_grey.png?1', image_mini:'/images/items/pants/mini/breeches_grey.png?1', bonus:{skills:{finger_dexterity:7, pitfall:14}, attributes:{flexibility:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10081] = {item_id:10081, nshort:'breeches_yellow', name:'Жёлтые брюки', type:'pants', level:42, price:5000, image:'/images/items/pants/breeches_yellow.png?1', image_mini:'/images/items/pants/mini/breeches_yellow.png?1', bonus:{skills:{leadership:12, repair:17}, attributes:{charisma:1, dexterity:1}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10082] = {item_id:10082, nshort:'breeches_blue', name:'Синие брюки', type:'pants', level:42, price:5040, image:'/images/items/pants/breeches_blue.png?1', image_mini:'/images/items/pants/mini/breeches_blue.png?1', bonus:{skills:{appearance:9, trade:12, tactic:12}, attributes:{flexibility:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10083] = {item_id:10083, nshort:'breeches_green', name:'Зелёные брюки', type:'pants', level:42, price:5040, image:'/images/items/pants/breeches_green.png?1', image_mini:'/images/items/pants/mini/breeches_green.png?1', bonus:{skills:{endurance:11, tough:6, punch:12}, attributes:{charisma:1, strength:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10084] = {item_id:10084, nshort:'breeches_brown', name:'Коричневые брюки', type:'pants', level:44, price:5240, image:'/images/items/pants/breeches_brown.png?1', image_mini:'/images/items/pants/mini/breeches_brown.png?1', bonus:{skills:{repair:14, finger_dexterity:6, shot:10}, attributes:{dexterity:2, flexibility:1}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10085] = {item_id:10085, nshort:'breeches_black', name:'Чёрные брюки', type:'pants', level:44, price:5240, image:'/images/items/pants/breeches_black.png?1', image_mini:'/images/items/pants/mini/breeches_black.png?1', bonus:{skills:{hide:14, reflex:14}, attributes:{dexterity:1, flexibility:2}}, set:{key:'set_quackery', name:'Набор знахаря'}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10086] = {item_id:10086, nshort:'breeches_p1', name:'Знатные брюки', type:'pants', level:50, price:7965, image:'/images/items/pants/breeches_p1.png?1', image_mini:'/images/items/pants/mini/breeches_p1.png?1', bonus:{skills:{animal:15, ride:15, build:15}, attributes:{charisma:2, strength:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10087] = {item_id:10087, nshort:'breeches_fine', name:'Брюки Гармоники', type:'pants', level:52, price:8100, image:'/images/items/pants/breeches_fine.png?1', image_mini:'/images/items/pants/mini/breeches_fine.png?1', bonus:{skills:{shot:15, aim:10, dodge:18, health:10}, attributes:{charisma:1, dexterity:2}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10090] = {item_id:10090, nshort:'indian_grey', name:'Серые индейские штаны', type:'pants', level:51, price:3330, image:'/images/items/pants/indian_grey.png?1', image_mini:'/images/items/pants/mini/indian_grey.png?1', bonus:{skills:{tough:5, build:15}, attributes:{strength:3}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10091] = {item_id:10091, nshort:'indian_yellow', name:'Жёлтые индейские штаны', type:'pants', level:52, price:7000, image:'/images/items/pants/indian_yellow.png?1', image_mini:'/images/items/pants/mini/indian_yellow.png?1', bonus:{skills:{endurance:14, punch:14}, attributes:{dexterity:2, strength:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10092] = {item_id:10092, nshort:'indian_blue', name:'Синие индейские штаны', type:'pants', level:52, price:7000, image:'/images/items/pants/indian_blue.png?1', image_mini:'/images/items/pants/mini/indian_blue.png?1', bonus:{skills:{repair:12, finger_dexterity:14, pitfall:12}, attributes:{flexibility:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10093] = {item_id:10093, nshort:'indian_green', name:'Зелёные индейские штаны', type:'pants', level:52, price:7000, image:'/images/items/pants/indian_green.png?1', image_mini:'/images/items/pants/mini/indian_green.png?1', bonus:{skills:{swim:20, hide:12, reflex:12}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10094] = {item_id:10094, nshort:'indian_brown', name:'Коричневые индейские штаны', type:'pants', level:55, price:7150, image:'/images/items/pants/indian_brown.png?1', image_mini:'/images/items/pants/mini/indian_brown.png?1', bonus:{skills:{shot:15, dodge:10, health:10}, attributes:{dexterity:2, flexibility:1}}, set:{key:'set_indian', name:'Набор индейца'}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10095] = {item_id:10095, nshort:'indian_black', name:'Чёрные индейские штаны', type:'pants', level:55, price:7300, image:'/images/items/pants/indian_black.png?1', image_mini:'/images/items/pants/mini/indian_black.png?1', bonus:{skills:{animal:10, tactic:14, ride:15}, attributes:{charisma:2}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10096] = {item_id:10096, nshort:'indian_p1', name:'Знатные индейские штаны', type:'pants', level:60, price:11100, image:'/images/items/pants/indian_p1.png?1', image_mini:'/images/items/pants/mini/indian_p1.png?1', bonus:{skills:{appearance:17, trade:15, leadership:17}, attributes:{charisma:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10097] = {item_id:10097, nshort:'indian_fine', name:'Штаны Сакагавеи', type:'pants', level:70, price:13320, image:'/images/items/pants/indian_fine.png?1', image_mini:'/images/items/pants/mini/indian_fine.png?1', bonus:{skills:{animal:18, pitfall:18, hide:18, ride:18}, attributes:{dexterity:2, flexibility:2}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10100] = {item_id:10100, nshort:'chapsrough_grey', name:'Серые чапсы', type:'pants', level:54, price:4095, image:'/images/items/pants/chapsrough_grey.png?1', image_mini:'/images/items/pants/mini/chapsrough_grey.png?1', bonus:{skills:{tough:15, punch:15}, attributes:{strength:1}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10101] = {item_id:10101, nshort:'chapsrough_yellow', name:'Жёлтые чапсы', type:'pants', level:56, price:8085, image:'/images/items/pants/chapsrough_yellow.png?1', image_mini:'/images/items/pants/mini/chapsrough_yellow.png?1', bonus:{skills:{aim:15, health:18, punch:15}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10102] = {item_id:10102, nshort:'chapsrough_blue', name:'Синие чапсы', type:'pants', level:56, price:8085, image:'/images/items/pants/chapsrough_blue.png?1', image_mini:'/images/items/pants/mini/chapsrough_blue.png?1', bonus:{skills:{repair:17, endurance:14, build:17}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10103] = {item_id:10103, nshort:'chapsrough_green', name:'Зелёные чапсы', type:'pants', level:56, price:8085, image:'/images/items/pants/chapsrough_green.png?1', image_mini:'/images/items/pants/mini/chapsrough_green.png?1', bonus:{skills:{animal:15, pitfall:15}, attributes:{charisma:2, dexterity:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10104] = {item_id:10104, nshort:'chapsrough_brown', name:'Коричневые чапсы', type:'pants', level:59, price:8470, image:'/images/items/pants/chapsrough_brown.png?1', image_mini:'/images/items/pants/mini/chapsrough_brown.png?1', bonus:{skills:{finger_dexterity:14, hide:14, ride:15}, attributes:{flexibility:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10105] = {item_id:10105, nshort:'chapsrough_black', name:'Чёрные чапсы', type:'pants', level:59, price:8470, image:'/images/items/pants/chapsrough_black.png?1', image_mini:'/images/items/pants/mini/chapsrough_black.png?1', bonus:{skills:{appearance:14, trade:14, shot:15}, attributes:{charisma:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10106] = {item_id:10106, nshort:'chapsrough_p1', name:'Знатные чапсы', type:'pants', level:65, price:12610, image:'/images/items/pants/chapsrough_p1.png?1', image_mini:'/images/items/pants/mini/chapsrough_p1.png?1', bonus:{skills:{tactic:17, leadership:17, swim:13, reflex:13}, attributes:{strength:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10107] = {item_id:10107, nshort:'chapsrough_fine', name:'Чапсы Билли Кида', type:'pants', level:66, price:13195, image:'/images/items/pants/chapsrough_fine.png?1', image_mini:'/images/items/pants/mini/chapsrough_fine.png?1', bonus:{skills:{dodge:20, health:20}, attributes:{charisma:3, dexterity:3}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true}; 

    PK_S3_TEST.items[10110] = {item_id:10110, nshort:'cavalry_grey', name:'Серые солдатские штаны', type:'pants', level:61, price:5160, image:'/images/items/pants/cavalry_grey.png?1', image_mini:'/images/items/pants/mini/cavalry_grey.png?1', bonus:{skills:{animal:15, swim:12, reflex:15}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10111] = {item_id:10111, nshort:'cavalry_yellow', name:'Жёлтые солдатские штаны', type:'pants', level:63, price:9660, image:'/images/items/pants/cavalry_yellow.png?1', image_mini:'/images/items/pants/mini/cavalry_yellow.png?1', bonus:{skills:{shot:19, ride:20}, attributes:{dexterity:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10112] = {item_id:10112, nshort:'cavalry_blue', name:'Синие солдатские штаны', type:'pants', level:63, price:9600, image:'/images/items/pants/cavalry_blue.png?1', image_mini:'/images/items/pants/mini/cavalry_blue.png?1', bonus:{skills:{pitfall:17, hide:18, endurance:18}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10113] = {item_id:10113, nshort:'cavalry_green', name:'Зелёные солдатские штаны', type:'pants', level:63, price:9540, image:'/images/items/pants/cavalry_green.png?1', image_mini:'/images/items/pants/mini/cavalry_green.png?1', bonus:{skills:{trade:15, leadership:15, finger_dexterity:15}, attributes:{charisma:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10114] = {item_id:10114, nshort:'cavalry_brown', name:'Коричневые солдатские штаны', type:'pants', level:65, price:9720, image:'/images/items/pants/cavalry_brown.png?1', image_mini:'/images/items/pants/mini/cavalry_brown.png?1', bonus:{skills:{tough:18, punch:18}, attributes:{strength:3}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10115] = {item_id:10115, nshort:'cavalry_black', name:'Чёрные солдатские штаны', type:'pants', level:65, price:10020, image:'/images/items/pants/cavalry_black.png?1', image_mini:'/images/items/pants/mini/cavalry_black.png?1', bonus:{skills:{repair:15, build:17}, attributes:{dexterity:2, strength:3}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10116] = {item_id:10116, nshort:'cavalry_p1', name:'Знатные солдатские штаны', type:'pants', level:75, price:15120, image:'/images/items/pants/cavalry_p1.png?1', image_mini:'/images/items/pants/mini/cavalry_p1.png?1', bonus:{skills:{appearance:15, aim:15, dodge:15}, attributes:{charisma:3, dexterity:3, flexibility:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10117] = {item_id:10117, nshort:'cavalry_fine', name:'Солдатские штаны Джорджа Крука', type:'pants', level:85, price:16100, image:'/images/items/pants/cavalry_fine.png?1', image_mini:'/images/items/pants/mini/cavalry_fine.png?1', bonus:{skills:{tactic:23, reflex:15, health:15}, attributes:{charisma:3, strength:3}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10120] = {item_id:10120, nshort:'jeans_grey', name:'Серые джинсы', type:'pants', level:71, price:7590, image:'/images/items/pants/jeans_grey.png?1', image_mini:'/images/items/pants/mini/jeans_grey.png?1', bonus:{skills:{tactic:15, shot:15}, attributes:{charisma:2, dexterity:1}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10121] = {item_id:10121, nshort:'jeans_yellow', name:'Жёлтые джинсы', type:'pants', level:74, price:11180, image:'/images/items/pants/jeans_yellow.png?1', image_mini:'/images/items/pants/mini/jeans_yellow.png?1', bonus:{skills:{swim:16, endurance:17, punch:16}, attributes:{strength:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10122] = {item_id:10122, nshort:'jeans_blue', name:'Синие джинсы', type:'pants', level:74, price:11180, image:'/images/items/pants/jeans_blue.png?1', image_mini:'/images/items/pants/mini/jeans_blue.png?1', bonus:{skills:{repair:16, tough:16, build:17}, attributes:{flexibility:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10123] = {item_id:10123, nshort:'jeans_green', name:'Зелёные джинсы', type:'pants', level:74, price:11180, image:'/images/items/pants/jeans_green.png?1', image_mini:'/images/items/pants/mini/jeans_green.png?1', bonus:{skills:{pitfall:16, ride:17, health:16}, attributes:{dexterity:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10124] = {item_id:10124, nshort:'jeans_brown', name:'Коричневые джинсы', type:'pants', level:79, price:12350, image:'/images/items/pants/jeans_brown.png?1', image_mini:'/images/items/pants/mini/jeans_brown.png?1', bonus:{skills:{appearance:16, aim:17, dodge:16}, attributes:{charisma:2, dexterity:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10125] = {item_id:10125, nshort:'jeans_black', name:'Чёрные джинсы', type:'pants', level:79, price:12350, image:'/images/items/pants/jeans_black.png?1', image_mini:'/images/items/pants/mini/jeans_black.png?1', bonus:{skills:{tactic:17, leadership:16, finger_dexterity:16}, attributes:{flexibility:2, strength:2}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10126] = {item_id:10126, nshort:'jeans_p1', name:'Знатные джинсы', type:'pants', level:90, price:18900, image:'/images/items/pants/jeans_p1.png?1', image_mini:'/images/items/pants/mini/jeans_p1.png?1', bonus:{skills:{appearance:20, animal:18, trade:20, hide:20}, attributes:{charisma:3, flexibility:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10127] = {item_id:10127, nshort:'jeans_fine', name:'Pat F. Garrett\'s jeans', type:'pants', level:99, price:20700, image:'/images/items/pants/jeans_fine.png?1', image_mini:'/images/items/pants/mini/jeans_fine.png?1', bonus:{skills:{repair:22, shot:20, dodge:24, ride:20}, attributes:{dexterity:3, flexibility:2}, fortbattle:{}, fortbattlesector:{}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10130] = {item_id:10130, nshort:'leather_grey', name:'Серые кожаные штаны', type:'pants', level:76, price:8880, image:'/images/items/pants/leather_grey.png?1', image_mini:'/images/items/pants/mini/leather_grey.png?1', bonus:{skills:{aim:28}, attributes:{strength:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10131] = {item_id:10131, nshort:'leather_yellow', name:'Жёлтые кожаные штаны', type:'pants', level:80, price:13650, image:'/images/items/pants/leather_yellow.png?1', image_mini:'/images/items/pants/mini/leather_yellow.png?1', bonus:{skills:{health:18, tough:20}, attributes:{strength:4}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10132] = {item_id:10132, nshort:'leather_blue', name:'Синие кожаные штаны', type:'pants', level:80, price:13650, image:'/images/items/pants/leather_blue.png?1', image_mini:'/images/items/pants/mini/leather_blue.png?1', bonus:{skills:{finger_dexterity:18, swim:20}, attributes:{flexibility:4}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10133] = {item_id:10133, nshort:'leather_green', name:'Зелёные кожаные штаны', type:'pants', level:80, price:13650, image:'/images/items/pants/leather_green.png?1', image_mini:'/images/items/pants/mini/leather_green.png?1', bonus:{skills:{reflex:18, build:20}, attributes:{dexterity:4}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10134] = {item_id:10134, nshort:'leather_brown', name:'Коричневые кожаные штаны', type:'pants', level:85, price:14625, image:'/images/items/pants/leather_brown.png?1', image_mini:'/images/items/pants/mini/leather_brown.png?1', bonus:{skills:{aim:17, dodge:17, punch:17}, attributes:{dexterity:2, strength:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10135] = {item_id:10135, nshort:'leather_black', name:'Чёрные кожаные штаны', type:'pants', level:85, price:14625, image:'/images/items/pants/leather_black.png?1', image_mini:'/images/items/pants/mini/leather_black.png?1', bonus:{skills:{pitfall:17, hide:17, endurance:17}, attributes:{dexterity:2, flexibility:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10136] = {item_id:10136, nshort:'leather_p1', name:'Знатные кожаные штаны', type:'pants', level:95, price:20400, image:'/images/items/pants/leather_p1.png?1', image_mini:'/images/items/pants/mini/leather_p1.png?1', bonus:{skills:{animal:20, tactic:20, repair:20}, attributes:{flexibility:4, strength:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10137] = {item_id:10137, nshort:'leather_fine', name:'Кожаные штаны Кочайза', type:'pants', level:100, price:21680, image:'/images/items/pants/leather_fine.png?1', image_mini:'/images/items/pants/mini/leather_fine.png?1', bonus:{skills:{appearance:15, trade:20, leadership:20, shot:16}, attributes:{charisma:4, flexibility:4}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10140] = {item_id:10140, nshort:'chapsfine_grey', name:'Серые мягкие чапсы', type:'pants', level:84, price:11625, image:'/images/items/pants/chapsfine_grey.png?1', image_mini:'/images/items/pants/mini/chapsfine_grey.png?1', bonus:{skills:{finger_dexterity:17, reflex:17}, attributes:{charisma:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10141] = {item_id:10141, nshort:'chapsfine_yellow', name:'Жёлтые мягкие чапсы', type:'pants', level:88, price:16660, image:'/images/items/pants/chapsfine_yellow.png?1', image_mini:'/images/items/pants/mini/chapsfine_yellow.png?1', bonus:{skills:{leadership:20, swim:24, tough:20}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10142] = {item_id:10142, nshort:'chapsfine_blue', name:'Синие мягкие чапсы', type:'pants', level:88, price:17000, image:'/images/items/pants/chapsfine_blue.png?1', image_mini:'/images/items/pants/mini/chapsfine_blue.png?1', bonus:{skills:{aim:26, health:20}, attributes:{flexibility:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10143] = {item_id:10143, nshort:'chapsfine_green', name:'Зелёные мягкие чапсы', type:'pants', level:88, price:17000, image:'/images/items/pants/chapsfine_green.png?1', image_mini:'/images/items/pants/mini/chapsfine_green.png?1', bonus:{skills:{animal:19, trade:20}, attributes:{charisma:3, flexibility:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10144] = {item_id:10144, nshort:'chapsfine_brown', name:'Коричневые мягкие чапсы', type:'pants', level:94, price:18105, image:'/images/items/pants/chapsfine_brown.png?1', image_mini:'/images/items/pants/mini/chapsfine_brown.png?1', bonus:{skills:{appearance:11, punch:20, build:20}, attributes:{charisma:1, flexibility:1, strength:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10145] = {item_id:10145, nshort:'chapsfine_black', name:'Чёрные мягкие чапсы', type:'pants', level:94, price:18360, image:'/images/items/pants/chapsfine_black.png?1', image_mini:'/images/items/pants/mini/chapsfine_black.png?1', bonus:{skills:{trade:15, finger_dexterity:20, swim:13, tough:20}, attributes:{charisma:2, flexibility:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10146] = {item_id:10146, nshort:'chapsfine_p1', name:'Знатные мягкие чапсы', type:'pants', level:99, price:23310, image:'/images/items/pants/chapsfine_p1.png?1', image_mini:'/images/items/pants/mini/chapsfine_p1.png?1', bonus:{skills:{leadership:25, aim:20, dodge:20, ride:20}, attributes:{charisma:1, dexterity:2, flexibility:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10147] = {item_id:10147, nshort:'chapsfine_fine', name:'Мягкие чапсы Буффало Билла', type:'pants', level:110, price:25920, image:'/images/items/pants/chapsfine_fine.png?1', image_mini:'/images/items/pants/mini/chapsfine_fine.png?1', bonus:{skills:{pitfall:18, reflex:20, endurance:20, tough:20}, attributes:{charisma:3, dexterity:3, flexibility:3, strength:3}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[10148] = {item_id:10148, nshort:'greenhorn_pants', name:'Рейтузы', type:'pants', level:1, price:259, image:'/images/items/pants/greenhorn_pants.png?1', image_mini:'/images/items/pants/mini/greenhorn_pants.png?1', bonus:{skills:{swim:3, ride:3}}, set:{key:'greenhorn_set', name:'Набор чечако'}, sellable:true};
    PK_S3_TEST.items[10149] = {item_id:10149, nshort:'undergarn', name:'Пеньюар', type:'pants', level:40, price:3450, image:'/images/items/pants/undergarn.png?1', image_mini:'/images/items/pants/mini/undergarn.png?1', bonus:{skills:{aim:9, hide:15, health:8}, attributes:{charisma:1}}, set:{key:'set_dancer', name:'Набор танцовщицы'}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[10150] = {item_id:10150, nshort:'collector_pants', name:'Штаны Плюшкина', type:'pants', level:100, price:10000, image:'/images/items/pants/collector_pants.png?1', image_mini:'/images/items/pants/mini/collector_pants.png?1', bonus:{skills:{leadership:15, dodge:15}, attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{key:'collector_set', name:'Набор коллекционера'}, traderlevel:99, dropable:true, tradeable:true};

PK_S3_TEST.items[11000] = {item_id:11000, nshort:'cotton_grey', name:'Серый шерстяной пояс', type:'belt', level:1, price:10, image:'/images/items/belt/cotton_grey.png?1', image_mini:'/images/items/belt/mini/cotton_grey.png?1', bonus:{skills:{endurance:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[11001] = {item_id:11001, nshort:'cotton_yellow', name:'Жёлтый шерстяной пояс', type:'belt', level:2, price:35, image:'/images/items/belt/cotton_yellow.png?1', image_mini:'/images/items/belt/mini/cotton_yellow.png?1', bonus:{skills:{pitfall:1, swim:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[11002] = {item_id:11002, nshort:'cotton_blue', name:'Синий шерстяной пояс', type:'belt', level:3, price:45, image:'/images/items/belt/cotton_blue.png?1', image_mini:'/images/items/belt/mini/cotton_blue.png?1', bonus:{skills:{reflex:1, ride:1, punch:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
PK_S3_TEST.items[11003] = {item_id:11003, nshort:'cotton_green', name:'Зелёный шерстяной пояс', type:'belt', level:3, price:45, image:'/images/items/belt/cotton_green.png?1', image_mini:'/images/items/belt/mini/cotton_green.png?1', bonus:{skills:{repair:1, tough:1, build:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11004] = {item_id:11004, nshort:'cotton_brown', name:'Коричневый шерстяной пояс', type:'belt', level:4, price:60, image:'/images/items/belt/cotton_brown.png?1', image_mini:'/images/items/belt/mini/cotton_brown.png?1', bonus:{attributes:{flexibility:1}}, set:{}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11005] = {item_id:11005, nshort:'cotton_black', name:'Чёрный шерстяной пояс', type:'belt', level:4, price:60, image:'/images/items/belt/cotton_black.png?1', image_mini:'/images/items/belt/mini/cotton_black.png?1', bonus:{attributes:{dexterity:1}}, set:{key:'set_farmer', name:'Набор фермера'}, traderlevel:1, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11006] = {item_id:11006, nshort:'cotton_p1', name:'Знатный шерстяной пояс', type:'belt', level:5, price:250, image:'/images/items/belt/cotton_p1.png?1', image_mini:'/images/items/belt/mini/cotton_p1.png?1', bonus:{skills:{appearance:1, aim:1, dodge:2}, attributes:{charisma:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11007] = {item_id:11007, nshort:'cotton_fine', name:'Шерстяной пояс Джона Баттерфилда', type:'belt', level:8, price:390, image:'/images/items/belt/cotton_fine.png?1', image_mini:'/images/items/belt/mini/cotton_fine.png?1', bonus:{skills:{repair:2, build:3}, attributes:{charisma:1, strength:1}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[11010] = {item_id:11010, nshort:'check_grey_belt', name:'Серый в клеточку пояс', type:'belt', level:7, price:142, image:'/images/items/belt/check_grey_belt.png?1', image_mini:'/images/items/belt/mini/check_grey_belt.png?1', bonus:{skills:{shot:1, health:1}, attributes:{dexterity:1}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11011] = {item_id:11011, nshort:'check_yellow_belt', name:'Жёлтый в клеточку пояс', type:'belt', level:8, price:290, image:'/images/items/belt/check_yellow_belt.png?1', image_mini:'/images/items/belt/mini/check_yellow_belt.png?1', bonus:{skills:{finger_dexterity:3, hide:1, reflex:1}, attributes:{charisma:1}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11012] = {item_id:11012, nshort:'check_blue_belt', name:'Синий в клеточку пояс', type:'belt', level:9, price:310, image:'/images/items/belt/check_blue_belt.png?1', image_mini:'/images/items/belt/mini/check_blue_belt.png?1', bonus:{skills:{animal:4, swim:3, ride:3}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11013] = {item_id:11013, nshort:'check_green_belt', name:'Зелёный в клеточку пояс', type:'belt', level:10, price:370, image:'/images/items/belt/check_green_belt.png?1', image_mini:'/images/items/belt/mini/check_green_belt.png?1', bonus:{skills:{appearance:3, trade:4}, attributes:{charisma:1}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11014] = {item_id:11014, nshort:'check_brown_belt', name:'Коричневый в клеточку пояс', type:'belt', level:11, price:390, image:'/images/items/belt/check_brown_belt.png?1', image_mini:'/images/items/belt/mini/check_brown_belt.png?1', bonus:{skills:{tactic:5, leadership:6}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11015] = {item_id:11015, nshort:'check_black_belt', name:'Чёрный в клеточку пояс', type:'belt', level:11, price:390, image:'/images/items/belt/check_black_belt.png?1', image_mini:'/images/items/belt/mini/check_black_belt.png?1', bonus:{skills:{pitfall:6, hide:5}}, set:{}, traderlevel:2, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11016] = {item_id:11016, nshort:'check_p1_belt', name:'Знатный пояс в клетку', type:'belt', level:12, price:1160, image:'/images/items/belt/check_p1_belt.png?1', image_mini:'/images/items/belt/mini/check_p1_belt.png?1', bonus:{skills:{aim:6, punch:7}, attributes:{strength:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11017] = {item_id:11017, nshort:'check_fine_belt', name:'Клетчатый пояс Неда Бантлайна', type:'belt', level:15, price:1280, image:'/images/items/belt/check_fine_belt.png?1', image_mini:'/images/items/belt/mini/check_fine_belt.png?1', bonus:{skills:{appearance:3, shot:7, aim:6}, attributes:{dexterity:1}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[11020] = {item_id:11020, nshort:'fine_grey_belt', name:'Серый ремень', type:'belt', level:12, price:210, image:'/images/items/belt/fine_grey_belt.png?1', image_mini:'/images/items/belt/mini/fine_grey_belt.png?1', bonus:{skills:{tough:7}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11021] = {item_id:11021, nshort:'fine_yellow_belt', name:'Жёлтый ремень', type:'belt', level:14, price:450, image:'/images/items/belt/fine_yellow_belt.png?1', image_mini:'/images/items/belt/mini/fine_yellow_belt.png?1', bonus:{skills:{swim:3, health:5, endurance:6}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11022] = {item_id:11022, nshort:'fine_blue_belt', name:'Синий ремень', type:'belt', level:14, price:440, image:'/images/items/belt/fine_blue_belt.png?1', image_mini:'/images/items/belt/mini/fine_blue_belt.png?1', bonus:{skills:{dodge:5, reflex:4}, attributes:{dexterity:1}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11023] = {item_id:11023, nshort:'fine_green_belt', name:'Зелёный ремень', type:'belt', level:15, price:480, image:'/images/items/belt/fine_green_belt.png?1', image_mini:'/images/items/belt/mini/fine_green_belt.png?1', bonus:{skills:{trade:6, leadership:4}, attributes:{charisma:1}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11024] = {item_id:11024, nshort:'fine_brown_belt', name:'Коричневый ремень', type:'belt', level:15, price:480, image:'/images/items/belt/fine_brown_belt.png?1', image_mini:'/images/items/belt/mini/fine_brown_belt.png?1', bonus:{skills:{finger_dexterity:4, shot:6}, attributes:{strength:1}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11025] = {item_id:11025, nshort:'fine_black_belt', name:'Чёрный ремень', type:'belt', level:17, price:540, image:'/images/items/belt/fine_black_belt.png?1', image_mini:'/images/items/belt/mini/fine_black_belt.png?1', bonus:{skills:{animal:6, tactic:6, ride:6}}, set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11026] = {item_id:11026, nshort:'fine_p1_belt', name:'Знатный ремень', type:'belt', level:17, price:1300, image:'/images/items/belt/fine_p1_belt.png?1', image_mini:'/images/items/belt/mini/fine_p1_belt.png?1', bonus:{skills:{appearance:6, leadership:7, punch:8}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11027] = {item_id:11027, nshort:'fine_fine_belt', name:'Ремень Томаса Бентона', type:'belt', level:20, price:1620, image:'/images/items/belt/fine_fine_belt.png?1', image_mini:'/images/items/belt/mini/fine_fine_belt.png?1', bonus:{skills:{repair:8, build:9}, attributes:{dexterity:1, strength:1}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[11030] = {item_id:11030, nshort:'buckle_grey', name:'Серый пояс с пряжкой', type:'belt', level:18, price:420, image:'/images/items/belt/buckle_grey.png?1', image_mini:'/images/items/belt/mini/buckle_grey.png?1', bonus:{attributes:{dexterity:2, flexibility:2}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11031] = {item_id:11031, nshort:'buckle_yellow', name:'Жёлтый пояс с пряжкой', type:'belt', level:20, price:1160, image:'/images/items/belt/buckle_yellow.png?1', image_mini:'/images/items/belt/mini/buckle_yellow.png?1', bonus:{skills:{repair:7, endurance:6}, attributes:{strength:1}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11032] = {item_id:11032, nshort:'buckle_blue', name:'Синий пояс с пряжкой', type:'belt', level:20, price:1140, image:'/images/items/belt/buckle_blue.png?1', image_mini:'/images/items/belt/mini/buckle_blue.png?1', bonus:{skills:{appearance:9, tactic:7}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11033] = {item_id:11033, nshort:'buckle_green', name:'Зелёный пояс с пряжкой', type:'belt', level:22, price:1340, image:'/images/items/belt/buckle_green.png?1', image_mini:'/images/items/belt/mini/buckle_green.png?1', bonus:{skills:{shot:9, dodge:10}}, set:{}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11034] = {item_id:11034, nshort:'buckle_brown', name:'Коричневый пояс с пряжкой', type:'belt', level:22, price:1340, image:'/images/items/belt/buckle_brown.png?1', image_mini:'/images/items/belt/mini/buckle_brown.png?1', bonus:{skills:{aim:9, punch:10}}, set:{key:'set_pilgrim_male', name:'Набор проповедника'}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11035] = {item_id:11035, nshort:'buckle_black', name:'Чёрный пояс с пряжкой', type:'belt', level:24, price:1520, image:'/images/items/belt/buckle_black.png?1', image_mini:'/images/items/belt/mini/buckle_black.png?1', bonus:{skills:{repair:4, finger_dexterity:10}, attributes:{flexibility:2}}, set:{key:'set_pilgrim_female', name:'Набор монашки'}, traderlevel:4, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11036] = {item_id:11036, nshort:'buckle_p1', name:'Знатный пояс с пряжкой', type:'belt', level:25, price:2700, image:'/images/items/belt/buckle_p1.png?1', image_mini:'/images/items/belt/mini/buckle_p1.png?1', bonus:{skills:{trade:10, tactic:10, reflex:10}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11037] = {item_id:11037, nshort:'buckle_fine', name:'Пояс с пряжкой Чарльза Гуднайта', type:'belt', level:27, price:3000, image:'/images/items/belt/buckle_fine.png?1', image_mini:'/images/items/belt/mini/buckle_fine.png?1', bonus:{skills:{trade:10, leadership:10, tough:10, build:10}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[11040] = {item_id:11040, nshort:'bull_grey', name:'Серый пояс с бизоном', type:'belt', level:23, price:490, image:'/images/items/belt/bull_grey.png?1', image_mini:'/images/items/belt/mini/bull_grey.png?1', bonus:{skills:{hide:7, endurance:7}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11041] = {item_id:11041, nshort:'bull_yellow', name:'Жёлтый пояс с бизоном', type:'belt', level:24, price:1360, image:'/images/items/belt/bull_yellow.png?1', image_mini:'/images/items/belt/mini/bull_yellow.png?1', bonus:{skills:{pitfall:14}, attributes:{strength:1}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11042] = {item_id:11042, nshort:'bull_blue', name:'Синий пояс с бизоном', type:'belt', level:24, price:1320, image:'/images/items/belt/bull_blue.png?1', image_mini:'/images/items/belt/mini/bull_blue.png?1', bonus:{skills:{ride:2, build:15}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11043] = {item_id:11043, nshort:'bull_green', name:'Зелёный пояс с бизоном', type:'belt', level:26, price:1400, image:'/images/items/belt/bull_green.png?1', image_mini:'/images/items/belt/mini/bull_green.png?1', bonus:{skills:{appearance:7, animal:8, repair:8}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11044] = {item_id:11044, nshort:'bull_brown', name:'Коричневый пояс с бизоном', type:'belt', level:27, price:1500, image:'/images/items/belt/bull_brown.png?1', image_mini:'/images/items/belt/mini/bull_brown.png?1', bonus:{skills:{leadership:7, health:7, tough:10}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11045] = {item_id:11045, nshort:'bull_black', name:'Чёрный пояс с бизоном', type:'belt', level:27, price:1540, image:'/images/items/belt/bull_black.png?1', image_mini:'/images/items/belt/mini/bull_black.png?1', bonus:{skills:{tactic:7, shot:8}, attributes:{flexibility:2}}, set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11046] = {item_id:11046, nshort:'bull_p1', name:'Знатный пояс с бизоном', type:'belt', level:28, price:2940, image:'/images/items/belt/bull_p1.png?1', image_mini:'/images/items/belt/mini/bull_p1.png?1', bonus:{skills:{appearance:8, trade:8}, attributes:{charisma:2, dexterity:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11047] = {item_id:11047, nshort:'bull_fine', name:'Пояс с бизоном Билла Хикока', type:'belt', level:30, price:3210, image:'/images/items/belt/bull_fine.png?1', image_mini:'/images/items/belt/mini/bull_fine.png?1', bonus:{skills:{animal:5, swim:10, hide:10, ride:10}, attributes:{strength:1}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[11050] = {item_id:11050, nshort:'studs_grey', name:'Серый клёпаный ремень', type:'belt', level:27, price:780, image:'/images/items/belt/studs_grey.png?1', image_mini:'/images/items/belt/mini/studs_grey.png?1', bonus:{skills:{reflex:4, health:10}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11051] = {item_id:11051, nshort:'studs_yellow', name:'Жёлтый клёпаный ремень', type:'belt', level:28, price:2220, image:'/images/items/belt/studs_yellow.png?1', image_mini:'/images/items/belt/mini/studs_yellow.png?1', bonus:{skills:{finger_dexterity:11, swim:10}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11052] = {item_id:11052, nshort:'studs_blue', name:'Синий клёпаный ремень', type:'belt', level:28, price:2100, image:'/images/items/belt/studs_blue.png?1', image_mini:'/images/items/belt/mini/studs_blue.png?1', bonus:{skills:{aim:7, dodge:7}, attributes:{dexterity:1, flexibility:1}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11053] = {item_id:11053, nshort:'studs_green', name:'Зелёный клёпаный ремень', type:'belt', level:30, price:2280, image:'/images/items/belt/studs_green.png?1', image_mini:'/images/items/belt/mini/studs_green.png?1', bonus:{skills:{endurance:19}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11054] = {item_id:11054, nshort:'studs_brown', name:'Коричневый клёпаный ремень', type:'belt', level:30, price:2340, image:'/images/items/belt/studs_brown.png?1', image_mini:'/images/items/belt/mini/studs_brown.png?1', bonus:{skills:{tough:10, punch:12}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11055] = {item_id:11055, nshort:'studs_black', name:'Чёрный клёпаный ремень', type:'belt', level:31, price:2430, image:'/images/items/belt/studs_black.png?1', image_mini:'/images/items/belt/mini/studs_black.png?1', bonus:{skills:{reflex:12, ride:11}}, set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11056] = {item_id:11056, nshort:'studs_p1', name:'Знатный клёпаный ремень', type:'belt', level:32, price:3640, image:'/images/items/belt/studs_p1.png?1', image_mini:'/images/items/belt/mini/studs_p1.png?1', bonus:{skills:{animal:12, pitfall:12, hide:10}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11057] = {item_id:11057, nshort:'studs_fine', name:'Клёпаный ремень Сэма Хьюстона', type:'belt', level:35, price:3990, image:'/images/items/belt/studs_fine.png?1', image_mini:'/images/items/belt/mini/studs_fine.png?1', bonus:{skills:{shot:11, aim:11, ride:12, punch:11}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[11060] = {item_id:11060, nshort:'horse_grey', name:'Серый пояс с лошадью', type:'belt', level:31, price:840, image:'/images/items/belt/horse_grey.png?1', image_mini:'/images/items/belt/mini/horse_grey.png?1', bonus:{skills:{dodge:8}, attributes:{dexterity:2}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11061] = {item_id:11061, nshort:'horse_yellow', name:'Жёлтый пояс с лошадью', type:'belt', level:33, price:2430, image:'/images/items/belt/horse_yellow.png?1', image_mini:'/images/items/belt/mini/horse_yellow.png?1', bonus:{attributes:{charisma:2, dexterity:3, flexibility:2, strength:3}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11062] = {item_id:11062, nshort:'horse_blue', name:'Синий пояс с лошадью', type:'belt', level:33, price:2370, image:'/images/items/belt/horse_blue.png?1', image_mini:'/images/items/belt/mini/horse_blue.png?1', bonus:{skills:{swim:4}, attributes:{charisma:3, flexibility:3}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11063] = {item_id:11063, nshort:'horse_green', name:'Зелёный пояс с лошадью', type:'belt', level:35, price:2520, image:'/images/items/belt/horse_green.png?1', image_mini:'/images/items/belt/mini/horse_green.png?1', bonus:{skills:{finger_dexterity:9, health:8}, attributes:{charisma:2}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11064] = {item_id:11064, nshort:'horse_brown', name:'Коричневый пояс с лошадью', type:'belt', level:35, price:2520, image:'/images/items/belt/horse_brown.png?1', image_mini:'/images/items/belt/mini/horse_brown.png?1', bonus:{skills:{pitfall:5, hide:6}, attributes:{flexibility:1, strength:3}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11065] = {item_id:11065, nshort:'horse_black', name:'Чёрный пояс с лошадью', type:'belt', level:36, price:2640, image:'/images/items/belt/horse_black.png?1', image_mini:'/images/items/belt/mini/horse_black.png?1', bonus:{skills:{repair:10, swim:9}, attributes:{flexibility:1, strength:1}}, set:{}, traderlevel:7, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11066] = {item_id:11066, nshort:'horse_p1', name:'Знатный пояс с лошадью', type:'belt', level:37, price:3395, image:'/images/items/belt/horse_p1.png?1', image_mini:'/images/items/belt/mini/horse_p1.png?1', bonus:{skills:{tactic:5, leadership:6, tough:12}, attributes:{charisma:1, strength:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11067] = {item_id:11067, nshort:'horse_fine', name:'Пояс Сета Буллока с лошадью', type:'belt', level:40, price:4130, image:'/images/items/belt/horse_fine.png?1', image_mini:'/images/items/belt/mini/horse_fine.png?1', bonus:{skills:{dodge:8, reflex:8, health:9}, attributes:{dexterity:2, strength:2}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[11070] = {item_id:11070, nshort:'eagle_grey', name:'Серый пояс с орлом', type:'belt', level:37, price:885, image:'/images/items/belt/eagle_grey.png?1', image_mini:'/images/items/belt/mini/eagle_grey.png?1', bonus:{skills:{animal:5, pitfall:7, build:7}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11071] = {item_id:11071, nshort:'eagle_yellow', name:'Жёлтый пояс с орлом', type:'belt', level:38, price:2310, image:'/images/items/belt/eagle_yellow.png?1', image_mini:'/images/items/belt/mini/eagle_yellow.png?1', bonus:{skills:{hide:11, endurance:11}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11072] = {item_id:11072, nshort:'eagle_blue', name:'Синий пояс с орлом', type:'belt', level:38, price:2460, image:'/images/items/belt/eagle_blue.png?1', image_mini:'/images/items/belt/mini/eagle_blue.png?1', bonus:{skills:{tactic:10, finger_dexterity:13}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11073] = {item_id:11073, nshort:'eagle_green', name:'Зелёный пояс с орлом', type:'belt', level:42, price:2730, image:'/images/items/belt/eagle_green.png?1', image_mini:'/images/items/belt/mini/eagle_green.png?1', bonus:{skills:{leadership:10, repair:10}, attributes:{charisma:1, flexibility:1}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11074] = {item_id:11074, nshort:'eagle_brown', name:'Коричневый пояс с орлом', type:'belt', level:42, price:2730, image:'/images/items/belt/eagle_brown.png?1', image_mini:'/images/items/belt/mini/eagle_brown.png?1', bonus:{skills:{animal:10, swim:10}, attributes:{charisma:1, flexibility:1}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11075] = {item_id:11075, nshort:'eagle_black', name:'Чёрный пояс с орлом', type:'belt', level:45, price:2940, image:'/images/items/belt/eagle_black.png?1', image_mini:'/images/items/belt/mini/eagle_black.png?1', bonus:{skills:{appearance:13, trade:12, build:5}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11076] = {item_id:11076, nshort:'eagle_p1', name:'Знатный пояс с орлом', type:'belt', level:45, price:4200, image:'/images/items/belt/eagle_p1.png?1', image_mini:'/images/items/belt/mini/eagle_p1.png?1', bonus:{skills:{aim:10, dodge:10, reflex:10}, attributes:{charisma:1, dexterity:1, flexibility:1, strength:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11077] = {item_id:11077, nshort:'eagle_fine', name:'Пояс Аля Сверенгена с орлом', type:'belt', level:48, price:4235, image:'/images/items/belt/eagle_fine.png?1', image_mini:'/images/items/belt/mini/eagle_fine.png?1', bonus:{skills:{pitfall:15, shot:8, ride:15}}, set:{key:'set_gentleman', name:'Набор джентльмена'}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[11080] = {item_id:11080, nshort:'ammo_grey', name:'Серый патронташ', type:'belt', level:44, price:1300, image:'/images/items/belt/ammo_grey.png?1', image_mini:'/images/items/belt/mini/ammo_grey.png?1', bonus:{skills:{punch:11}, attributes:{dexterity:1, strength:1}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11081] = {item_id:11081, nshort:'ammo_yellow', name:'Жёлтый патронташ', type:'belt', level:47, price:3600, image:'/images/items/belt/ammo_yellow.png?1', image_mini:'/images/items/belt/mini/ammo_yellow.png?1', bonus:{skills:{repair:10, tough:10, build:10}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11082] = {item_id:11082, nshort:'ammo_blue', name:'Синий патронташ', type:'belt', level:47, price:3600, image:'/images/items/belt/ammo_blue.png?1', image_mini:'/images/items/belt/mini/ammo_blue.png?1', bonus:{skills:{leadership:10, finger_dexterity:10, endurance:10}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11083] = {item_id:11083, nshort:'ammo_green', name:'Зелёный патронташ', type:'belt', level:48, price:3600, image:'/images/items/belt/ammo_green.png?1', image_mini:'/images/items/belt/mini/ammo_green.png?1', bonus:{skills:{animal:10, trade:10, tactic:10}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11084] = {item_id:11084, nshort:'ammo_brown', name:'Коричневый патронташ', type:'belt', level:49, price:4000, image:'/images/items/belt/ammo_brown.png?1', image_mini:'/images/items/belt/mini/ammo_brown.png?1', bonus:{skills:{appearance:10, shot:10, hide:10, reflex:10}}, set:{}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11085] = {item_id:11085, nshort:'ammo_black', name:'Чёрный патронташ', type:'belt', level:49, price:4120, image:'/images/items/belt/ammo_black.png?1', image_mini:'/images/items/belt/mini/ammo_black.png?1', bonus:{skills:{swim:10, health:10}, attributes:{dexterity:1, strength:2}}, set:{key:'set_quackery', name:'Набор знахаря'}, traderlevel:8, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11086] = {item_id:11086, nshort:'ammo_p1', name:'Знатный патронташ', type:'belt', level:52, price:5805, image:'/images/items/belt/ammo_p1.png?1', image_mini:'/images/items/belt/mini/ammo_p1.png?1', bonus:{skills:{aim:15}, attributes:{charisma:3, dexterity:1, flexibility:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11087] = {item_id:11087, nshort:'ammo_fine', name:'Патронташ Джейн-катастрофы', type:'belt', level:57, price:6750, image:'/images/items/belt/ammo_fine.png?1', image_mini:'/images/items/belt/mini/ammo_fine.png?1', bonus:{skills:{aim:10, health:10, punch:10}, attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[11096] = {item_id:11096, nshort:'flag_russia', name:'Русский ремень', type:'belt', level:55, price:3000, image:'/images/items/belt/flag_russia.png?1', image_mini:'/images/items/belt/mini/flag_russia.png?1', bonus:{attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{}, traderlevel:20, tradeable:true};

    PK_S3_TEST.items[11102] = {item_id:11102, nshort:'skull_grey', name:'Серый пояс с черепом', type:'belt', level:57, price:4500, image:'/images/items/belt/skull_grey.png?1', image_mini:'/images/items/belt/mini/skull_grey.png?1', bonus:{skills:{punch:5, build:15}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11103] = {item_id:11103, nshort:'skull_yellow', name:'Жёлтый пояс с черепом', type:'belt', level:60, price:6825, image:'/images/items/belt/skull_yellow.png?1', image_mini:'/images/items/belt/mini/skull_yellow.png?1', bonus:{skills:{repair:15, tough:15}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11104] = {item_id:11104, nshort:'skull_blue', name:'Синий пояс с черепом', type:'belt', level:60, price:6825, image:'/images/items/belt/skull_blue.png?1', image_mini:'/images/items/belt/mini/skull_blue.png?1', bonus:{skills:{pitfall:15, endurance:15}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11105] = {item_id:11105, nshort:'skull_green', name:'Зелёный пояс с черепом', type:'belt', level:65, price:7605, image:'/images/items/belt/skull_green.png?1', image_mini:'/images/items/belt/mini/skull_green.png?1', bonus:{skills:{tactic:15, finger_dexterity:15}, attributes:{flexibility:1}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11106] = {item_id:11106, nshort:'skull_brown', name:'Коричневый пояс с черепом', type:'belt', level:65, price:7605, image:'/images/items/belt/skull_brown.png?1', image_mini:'/images/items/belt/mini/skull_brown.png?1', bonus:{skills:{animal:15, health:15}, attributes:{dexterity:1}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11107] = {item_id:11107, nshort:'skull_black', name:'Чёрный пояс с черепом', type:'belt', level:70, price:8190, image:'/images/items/belt/skull_black.png?1', image_mini:'/images/items/belt/mini/skull_black.png?1', bonus:{skills:{appearance:15, trade:15}, attributes:{charisma:1, strength:1}}, set:{}, traderlevel:9, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11108] = {item_id:11108, nshort:'skull_p1', name:'Знатный пояс с черепом', type:'belt', level:70, price:11550, image:'/images/items/belt/skull_p1.png?1', image_mini:'/images/items/belt/mini/skull_p1.png?1', bonus:{skills:{leadership:15, shot:15, ride:15}, attributes:{charisma:1, dexterity:1, flexibility:1, strength:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11109] = {item_id:11109, nshort:'skull_fine', name:'Пояс Билли Кида с черепом', type:'belt', level:80, price:12600, image:'/images/items/belt/skull_fine.png?1', image_mini:'/images/items/belt/mini/skull_fine.png?1', bonus:{attributes:{charisma:6, dexterity:6, flexibility:6, strength:6}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};
    
    PK_S3_TEST.items[11110] = {item_id:11110, nshort:'pistols_grey', name:'Серый пояс с пистолетами', type:'belt', level:75, price:7350, image:'/images/items/belt/pistols_grey.png?1', image_mini:'/images/items/belt/mini/pistols_grey.png?1', bonus:{skills:{swim:15, reflex:15}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11111] = {item_id:11111, nshort:'pistols_yellow', name:'Жёлтый пояс с пистолетами', type:'belt', level:85, price:10575, image:'/images/items/belt/pistols_yellow.png?1', image_mini:'/images/items/belt/mini/pistols_yellow.png?1', bonus:{attributes:{charisma:4, dexterity:5, flexibility:4, strength:5}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11112] = {item_id:11112, nshort:'pistols_blue', name:'Синий пояс с пистолетами', type:'belt', level:90, price:10875, image:'/images/items/belt/pistols_blue.png?1', image_mini:'/images/items/belt/mini/pistols_blue.png?1', bonus:{skills:{hide:15, dodge:25}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11113] = {item_id:11113, nshort:'pistols_green', name:'Зелёный пояс с пистолетами', type:'belt', level:95, price:12825, image:'/images/items/belt/pistols_green.png?1', image_mini:'/images/items/belt/mini/pistols_green.png?1', bonus:{attributes:{charisma:6, dexterity:5, flexibility:6, strength:5}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11114] = {item_id:11114, nshort:'pistols_brown', name:'Коричневый пояс с пистолетами', type:'belt', level:100, price:12375, image:'/images/items/belt/pistols_brown.png?1', image_mini:'/images/items/belt/mini/pistols_brown.png?1', bonus:{skills:{repair:15, finger_dexterity:15}, attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11115] = {item_id:11115, nshort:'pistols_black', name:'Чёрный пояс с пистолетами', type:'belt', level:105, price:13500, image:'/images/items/belt/pistols_black.png?1', image_mini:'/images/items/belt/mini/pistols_black.png?1', bonus:{skills:{appearance:15, shot:15, reflex:15, punch:15}, attributes:{charisma:1, dexterity:1, flexibility:1, strength:1}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11116] = {item_id:11116, nshort:'pistols_p1', name:'Знатный пояс с пистолетами', type:'belt', level:110, price:19200, image:'/images/items/belt/pistols_p1.png?1', image_mini:'/images/items/belt/mini/pistols_p1.png?1', bonus:{skills:{tactic:15, leadership:15, endurance:15, build:15}, attributes:{charisma:3, dexterity:3, flexibility:3, strength:3}}, set:{}, traderlevel:10, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11117] = {item_id:11117, nshort:'pistols_fine', name:'Пояс Уильяма Тильгмана с пистолетами', type:'belt', level:115, price:21600, image:'/images/items/belt/pistols_fine.png?1', image_mini:'/images/items/belt/mini/pistols_fine.png?1', bonus:{skills:{dodge:15, ride:15, health:15, tough:15}, attributes:{charisma:4, dexterity:4, flexibility:4, strength:4}}, set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11118] = {item_id:11118, nshort:'greenhorn_belt', name:'Кожаный ремень', type:'belt', level:4, price:375, image:'/images/items/belt/greenhorn_belt.png?1', image_mini:'/images/items/belt/mini/greenhorn_belt.png?1', bonus:{skills:{leadership:2, shot:3, build:3}}, set:{key:'greenhorn_set', name:'Набор чечако'}, sellable:true};

    PK_S3_TEST.items[11137] = {item_id:11137, nshort:'flag_indian', name:'Индейский ремень', type:'belt', level:55, price:3000, image:'/images/items/belt/flag_indian.png?1', image_mini:'/images/items/belt/mini/flag_indian.png?1', bonus:{attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{key:'set_indian', name:'Набор индейца'}, traderlevel:20, tradeable:true};
    PK_S3_TEST.items[11138] = {item_id:11138, nshort:'adah_belt', name:'Пояс Ады Менкен', type:'belt', level:48, price:4235, image:'/images/items/belt/adah_belt.png?1', image_mini:'/images/items/belt/mini/adah_belt.png?1', bonus:{skills:{animal:15, trade:15, swim:8}}, set:{key:'set_dancer', name:'Набор танцовщицы'}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[11139] = {item_id:11139, nshort:'collector_belt', name:'Пояс Плюшкина', type:'belt', level:100, price:10000, image:'/images/items/belt/collector_belt.png?1', image_mini:'/images/items/belt/mini/collector_belt.png?1', bonus:{skills:{aim:15, build:15}, attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{key:'collector_set', name:'Набор коллекционера'}, traderlevel:99, tradeable:true};

    PK_S3_TEST.items[12700] = {item_id:12700, nshort:'adventcal', name:'Рождественский календарь', type:'yield', level:0, price:10, image:'/images/items/yield/adventcal.png?1', image_mini:'images/items/yield/adventcal.png?1', set:{}};
    PK_S3_TEST.items[12701] = {item_id:12701, nshort:'xmas_licorice', name:'Liquorice', type:'yield', level:0, price:15, image:'/images/items/yield/xmas_licorice.png?1', image_mini:'images/items/yield/xmas_licorice.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, sellable:true};
    PK_S3_TEST.items[12702] = {item_id:12702, nshort:'xmas_oat', name:'Oat', type:'yield', level:0, price:32, image:'/images/items/yield/xmas_oat.png?1', image_mini:'images/items/yield/xmas_oat.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, sellable:true};
    PK_S3_TEST.items[12703] = {item_id:12703, nshort:'xmas_cracker', name:'Christmas cracker', type:'yield', level:0, price:27, image:'/images/items/yield/xmas_cracker.png?1', image_mini:'images/items/yield/xmas_cracker.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, sellable:true};
    PK_S3_TEST.items[12704] = {item_id:12704, nshort:'xmas_lebkuchen', name:'Gingerbread', type:'yield', level:0, price:31, image:'/images/items/yield/xmas_lebkuchen.png?1', image_mini:'images/items/yield/xmas_lebkuchen.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, sellable:true};
    PK_S3_TEST.items[12705] = {item_id:12705, nshort:'xmas_cookie', name:'Chocolate cookie', type:'yield', level:0, price:29, image:'/images/items/yield/xmas_cookie.png?1', image_mini:'images/items/yield/xmas_cookie.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, sellable:true};
    PK_S3_TEST.items[12706] = {item_id:12706, nshort:'xmas_potato', name:'Marzipan potato', type:'yield', level:0, price:39, image:'/images/items/yield/xmas_potato.png?1', image_mini:'images/items/yield/xmas_potato.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, sellable:true};
    PK_S3_TEST.items[12707] = {item_id:12707, nshort:'xmas_coal', name:'Уголёк', type:'yield', level:0, price:2, image:'/images/items/yield/xmas_coal.png?1', image_mini:'images/items/yield/xmas_coal.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, sellable:true};
    PK_S3_TEST.items[12708] = {item_id:12708, nshort:'xmas_sphere', name:'Glass marble', type:'yield', level:0, price:35, image:'/images/items/yield/xmas_sphere.png?1', image_mini:'images/items/yield/xmas_sphere.png?1', bonus:{skills:{}, attributes:{}, fortbattle:{}, fortbattlesector:{}}, set:{}, sellable:true};
PK_S3_TEST.items[12709] = {item_id:12709, nshort:'xmas_present', name:'Подарок', type:'yield', level:0, price:39, image:'/images/items/yield/xmas_present.png?1', image_mini:'images/items/yield/xmas_present.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[12710] = {item_id:12710, nshort:'xmas_present_mid', name:'Красивый подарок', type:'yield', level:0, price:39, image:'/images/items/yield/xmas_present_mid.png?1', image_mini:'images/items/yield/xmas_present_mid.png?1', set:{}, auctionable:true, sellable:true};
PK_S3_TEST.items[12711] = {item_id:12711, nshort:'xmas_present_high', name:'Особый подарок', type:'yield', level:0, price:39, image:'/images/items/yield/xmas_present_high.png?1', image_mini:'images/items/yield/xmas_present_high.png?1', set:{}, auctionable:true, sellable:true};

    PK_S3_TEST.items[12713] = {item_id:12713, nshort:'xmas_bag', name:'Мешочек с шариками', type:'yield', level:0, price:330, image:'/images/items/yield/xmas_bag.png?1', image_mini:'images/items/yield/xmas_bag.png?1', bonus:{skills:{finger_dexterity:5}}, set:{}, auctionable:true, sellable:true};

    PK_S3_TEST.items[13701] = {item_id:13701, nshort:'promo_tomato', name:'Juicy Tomato', type:'yield', level:0, price:15, image:'/images/items/yield/promo_tomato.png?1', image_mini:'images/items/yield/promo_tomato.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[13702] = {item_id:13702, nshort:'promo_horseshoe', name:'Noble Horseshoe', type:'yield', level:0, price:32, image:'/images/items/yield/promo_horseshoe.png?1', image_mini:'images/items/yield/promo_horseshoe.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[13703] = {item_id:13703, nshort:'promo_cigaretts', name:'Hand-rolled cigarette', type:'yield', level:0, price:27, image:'/images/items/yield/promo_cigaretts.png?1', image_mini:'images/items/yield/promo_cigaretts.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[13704] = {item_id:13704, nshort:'promo_whiskey', name:'Fine Liquor', type:'yield', level:0, price:31, image:'/images/items/yield/promo_whiskey.png?1', image_mini:'images/items/yield/promo_whiskey.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[13705] = {item_id:13705, nshort:'promo_meal', name:'Stewed beans and bacon', type:'yield', level:0, price:29, image:'/images/items/yield/promo_meal.png?1', image_mini:'images/items/yield/promo_meal.png?1', set:{}, sellable:true};
    PK_S3_TEST.items[13706] = {item_id:13706, nshort:'promo_orange', name:'Ripe Orange', type:'yield', level:0, price:39, image:'/images/items/yield/promo_orange.png?1', image_mini:'images/items/yield/promo_orange.png?1', set:{}, sellable:true};

    PK_S3_TEST.items[16100] = {item_id:16100, nshort:'fb_aidkit', name:'Аптечка', type:'yield', level:0, price:590, image:'/images/items/yield/fb_aidkit.png?1', image_mini:'images/items/yield/fb_aidkit.png?1', set:{}, auctionable:true, sellable:true};

    PK_S3_TEST.items[17000] = {item_id:17000, nshort:'fb_chest_wooden', name:'Деревянный сундук', type:'yield', level:0, price:1204, image:'/images/items/yield/fb_chest_wooden.png?1', image_mini:'images/items/yield/fb_chest_wooden.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[17001] = {item_id:17001, nshort:'fb_chest_iron', name:'Обитый железом сундук', type:'yield', level:0, price:6584, image:'/images/items/yield/fb_chest_iron.png?1', image_mini:'images/items/yield/fb_chest_iron.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[17002] = {item_id:17002, nshort:'fb_chest_steel', name:'Укреплённый сталью сундук', type:'yield', level:0, price:11490, image:'/images/items/yield/fb_chest_steel.png?1', image_mini:'images/items/yield/fb_chest_steel.png?1', set:{}, auctionable:true, sellable:true};

    PK_S3_TEST.items[17021] = {item_id:17021, nshort:'hot_granit', name:'Red-hot granite', type:'yield', level:0, price:1, image:'/images/items/yield/hot_granit.png?1', image_mini:'images/items/yield/hot_granit.png?1', set:{}};

    PK_S3_TEST.items[20003] = {item_id:20003, nshort:'beansandbacon_recipe', name:'Повар: Тушёные бобы с беконом (50)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20004] = {item_id:20004, nshort:'marmelade_recipe', name:'Повар: Джем (50)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20005] = {item_id:20005, nshort:'mash_recipe', name:'Повар: Сусло (100)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20006] = {item_id:20006, nshort:'dough_recipe', name:'Повар: Тесто (100)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20007] = {item_id:20007, nshort:'steakseasoning_recipe', name:'Повар: Стейк в маринаде (100)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20008] = {item_id:20008, nshort:'licor_recipe', name:'Повар: Ягодный ликёр (150)', type:'recipe', level:1, price:750, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20009] = {item_id:20009, nshort:'cake_recipe', name:'Повар: Торт (150)', type:'recipe', level:1, price:750, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20010] = {item_id:20010, nshort:'fishfond_recipe', name:'Повар: Рыбный бульон (150)', type:'recipe', level:1, price:1750, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20011] = {item_id:20011, nshort:'turkey_recipe', name:'Повар: Жареная индейка (250)', type:'recipe', level:1, price:2250, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20012] = {item_id:20012, nshort:'fishsoup_recipe', name:'Повар: Уха (250)', type:'recipe', level:1, price:2250, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20013] = {item_id:20013, nshort:'veggiepun_recipe', name:'Повар: Овощные пельмени (250)', type:'recipe', level:1, price:2250, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20014] = {item_id:20014, nshort:'meatloaf_recipe', name:'Повар: Фарш (300)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20015] = {item_id:20015, nshort:'fishonastick_recipe', name:'Повар: Запечённая рыба (350)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20016] = {item_id:20016, nshort:'parfumsmoke_recipe', name:'Повар: Ладан (350)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20017] = {item_id:20017, nshort:'sauce_recipe', name:'Повар: Сливочный соус (350)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20018] = {item_id:20018, nshort:'paperfish_recipe', name:'Повар: Копчёная рыба (400)', type:'recipe', level:1, price:3500, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20019] = {item_id:20019, nshort:'gentlemen_recipe', name:'Повар: Обед джентльмена (450)', type:'recipe', level:1, price:3500, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, traderlevel:20, auctionable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[20023] = {item_id:20023, nshort:'pipecleaner_recipe', name:'Знахарь: Ёршик (50)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20024] = {item_id:20024, nshort:'stomach_recipe', name:'Знахарь: Лекарство от гастрита (50)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20025] = {item_id:20025, nshort:'sulfuracid_recipe', name:'Знахарь: Серная кислота (100)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20026] = {item_id:20026, nshort:'ink_recipe', name:'Знахарь: Чернила (100)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20027] = {item_id:20027, nshort:'petroleum_recipe', name:'Знахарь: Керосин (100)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20028] = {item_id:20028, nshort:'fetish_recipe', name:'Знахарь: Идол (150)', type:'recipe', level:1, price:750, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20029] = {item_id:20029, nshort:'destillate_recipe', name:'Знахарь: Дистилляты (150)', type:'recipe', level:1, price:750, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20030] = {item_id:20030, nshort:'firewater_recipe', name:'Знахарь: Самогон (150)', type:'recipe', level:1, price:1750, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20031] = {item_id:20031, nshort:'tea_recipe', name:'Знахарь: Чай из ягод (250)', type:'recipe', level:1, price:2250, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20032] = {item_id:20032, nshort:'chewtabaco_recipe', name:'Знахарь: Жевательный табак (250)', type:'recipe', level:1, price:2250, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20033] = {item_id:20033, nshort:'fruitlicor_recipe', name:'Знахарь: Фруктовый ликёр (250)', type:'recipe', level:1, price:2250, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20034] = {item_id:20034, nshort:'battery_recipe', name:'Знахарь: Гальванический элемент (300)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20035] = {item_id:20035, nshort:'lye_recipe', name:'Знахарь: Щёлок (350)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20036] = {item_id:20036, nshort:'herbbrew_recipe', name:'Знахарь: Травяной ликёр (350)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20037] = {item_id:20037, nshort:'paper_recipe', name:'Знахарь: Сбор макулатуры (350)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20038] = {item_id:20038, nshort:'mathdraw_recipe', name:'Знахарь: Циркуль (400)', type:'recipe', level:1, price:3500, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20039] = {item_id:20039, nshort:'rosewater_recipe', name:'Знахарь: Розовая вода (450)', type:'recipe', level:1, price:3500, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, traderlevel:20, auctionable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[20043] = {item_id:20043, nshort:'bajonett_recipe', name:'Кузнец: Штык (50)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20044] = {item_id:20044, nshort:'weightstone_recipe', name:'Кузнец: Грузило (50)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20045] = {item_id:20045, nshort:'steel_recipe', name:'Кузнец: Стальная заготовка (100)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20046] = {item_id:20046, nshort:'liquid_lead_recipe', name:'Кузнец: Плавление свинца (100)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20047] = {item_id:20047, nshort:'forge_recipe', name:'Кузнец: Наковальня (100)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20048] = {item_id:20048, nshort:'leadfigure_recipe', name:'Кузнец: Статуэтка из свинца (150)', type:'recipe', level:1, price:750, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20049] = {item_id:20049, nshort:'marble_recipe', name:'Кузнец: Мраморный шарик (150)', type:'recipe', level:1, price:750, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20050] = {item_id:20050, nshort:'rivets_recipe', name:'Кузнец: Заклёпки (150)', type:'recipe', level:1, price:1750, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20051] = {item_id:20051, nshort:'gripprotection_recipe', name:'Кузнец: Эфес (250)', type:'recipe', level:1, price:2250, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20052] = {item_id:20052, nshort:'coolingpackage_recipe', name:'Кузнец: Охлаждение стрелкового оружия (250)', type:'recipe', level:1, price:2250, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20053] = {item_id:20053, nshort:'weaponchain_recipe', name:'Кузнец: Оружейная цепь (250)', type:'recipe', level:1, price:2250, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20054] = {item_id:20054, nshort:'handle_recipe', name:'Кузнец: Рукоять (300)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20055] = {item_id:20055, nshort:'revolverform_recipe', name:'Кузнец: Литейная форма для револьвера (350)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20056] = {item_id:20056, nshort:'steelblade_recipe', name:'Кузнец: Стальное лезвие (350)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20057] = {item_id:20057, nshort:'customize_recipe', name:'Кузнец: Побрякушки для оружия (350)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20058] = {item_id:20058, nshort:'druse_recipe', name:'Кузнец: Распилка жеоды (400)', type:'recipe', level:1, price:3500, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20059] = {item_id:20059, nshort:'polishstone_recipe', name:'Кузнец: Полировочный камень (450)', type:'recipe', level:1, price:3500, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, traderlevel:20, auctionable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[20063] = {item_id:20063, nshort:'horseshoe_recipe', name:'Шорник: Набивка подков (50)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20064] = {item_id:20064, nshort:'energyfood_recipe', name:'Шорник: Комбикорм (50)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:3, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20065] = {item_id:20065, nshort:'naked_saddle_recipe', name:'Шорник: Потрошение седла (100)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20066] = {item_id:20066, nshort:'fillmaterial_recipe', name:'Шорник: Наполнитель (100)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20067] = {item_id:20067, nshort:'leatherskin_recipe', name:'Шорник: Кожаный чехол (100)', type:'recipe', level:1, price:500, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20068] = {item_id:20068, nshort:'brandingiron_recipe', name:'Шорник: Клеймо (150)', type:'recipe', level:1, price:750, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20069] = {item_id:20069, nshort:'notworking_compass_recipe', name:'Шорник: Компас (150)', type:'recipe', level:1, price:750, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20070] = {item_id:20070, nshort:'ironstep_recipe', name:'Шорник: Стремена (150)', type:'recipe', level:1, price:1750, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20071] = {item_id:20071, nshort:'spores_recipe', name:'Шорник: Шпоры (250)', type:'recipe', level:1, price:2250, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20072] = {item_id:20072, nshort:'harnish_recipe', name:'Шорник: Уздечка (250)', type:'recipe', level:1, price:2250, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20073] = {item_id:20073, nshort:'fieldcamp_recipe', name:'Шорник: Спальный мешок (250)', type:'recipe', level:1, price:2250, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:5, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20074] = {item_id:20074, nshort:'horse_cloth_recipe', name:'Шорник: Попона (300)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20075] = {item_id:20075, nshort:'custom_leather_recipe', name:'Шорник: Побрякушки для кожаных изделий (350)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20076] = {item_id:20076, nshort:'charriotpiece_recipe', name:'Шорник: Деталь для дилижанса (350)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20077] = {item_id:20077, nshort:'wagonwheel_recipe', name:'Шорник: Колесо (350)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:6, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20078] = {item_id:20078, nshort:'aimwater_recipe', name:'Шорник: Эликсир меткости (400)', type:'recipe', level:1, price:3500, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:20, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20079] = {item_id:20079, nshort:'gemsaddle_recipe', name:'Шорник: Украшение седла (450)', type:'recipe', level:1, price:3500, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, traderlevel:20, auctionable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[20096] = {item_id:20096, nshort:'dried_meat_recipe', name:'Повар: Вяленое мясо (500)', type:'recipe', level:1, price:250, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20097] = {item_id:20097, nshort:'gulash_recipe', name:'Повар: Гуляш (525)', type:'recipe', level:1, price:2500, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, auctionable:true, dropable:true, tradeable:true, sellable:true};
    PK_S3_TEST.items[20098] = {item_id:20098, nshort:'spare_ribs_recipe', name:'Повар: Свиные рёбрышки (550)', type:'recipe', level:1, price:5000, image:'images/items/recipe/recipe_cook.png?1', image_mini:'images/items/recipe/recipe_cook.png?1', set:{}, auctionable:true, dropable:true, tradeable:true, sellable:true};

    PK_S3_TEST.items[20101] = {item_id:20101, nshort:'snake_oil_recipe', name:'Знахарь: Панацея (500)', type:'recipe', level:1, price:250, image:'images/items/recipe/recipe_quack.png?1', image_mini:'images/items/recipe/recipe_quack.png?1', set:{}, auctionable:true, dropable:true, sellable:true};

    PK_S3_TEST.items[20106] = {item_id:20106, nshort:'fine_leather_polish_recipe', name:'Шорник: Крем для кожи (500)', type:'recipe', level:1, price:250, image:'images/items/recipe/recipe_sattle.png?1', image_mini:'images/items/recipe/recipe_sattle.png?1', set:{}, auctionable:true, dropable:true, sellable:true};
    
    PK_S3_TEST.items[20111] = {item_id:20111, nshort:'rustprove_bolts_recipe', name:'Кузнец: Нержавеющие болты (500)', type:'recipe', level:1, price:250, image:'images/items/recipe/recipe_smith.png?1', image_mini:'images/items/recipe/recipe_smith.png?1', set:{}, auctionable:true, dropable:true, sellable:true};
    
    PK_S3_TEST.items[40000] = {item_id:40000, nshort:'greenhorn_poncho', name:'Шерстяное пончо', type:'body', level:1, price:125, image:'/images/items/body/greenhorn_poncho.png?1', image_mini:'/images/items/body/mini/greenhorn_poncho.png?1', bonus:{skills:{appearance:3, tough:3}}, set:{key:'greenhorn_set', name:'Набор чечако'}, dropable:true, sellable:true};
    PK_S3_TEST.items[40001] = {item_id:40001, nshort:'vest_golddigger', name:'Жилетка золотоискателя', type:'body', level:10, price:50, image:'/images/items/body/vest_golddigger.png?1', image_mini:'/images/items/body/mini/vest_golddigger.png?1', bonus:{skills:{swim:1, endurance:1, tough:4}}, set:{}, dropable:true, sellable:true};
    PK_S3_TEST.items[40002] = {item_id:40002, nshort:'collector_jacket', name:'Жакет Плюшкина', type:'body', level:100, price:10000, image:'/images/items/body/collector_jacket.png?1', image_mini:'/images/items/body/mini/collector_jacket.png?1', bonus:{skills:{shot:15, punch:15}, attributes:{charisma:2, dexterity:2, flexibility:2, strength:2}}, set:{key:'collector_set', name:'Набор коллекционера'}};


    PK_S3_TEST.items[185200] = {item_id:185200, nshort:'easter_11_egg1', name:'Пасхальное яйцо', type:'yield', level:0, price:15, image:'/images/items/yield/easter_11_egg1.png?1', image_mini:'images/items/yield/easter_11_egg1.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[185201] = {item_id:185201, nshort:'easter_11_egg2', name:'Пасхальное яйцо', type:'yield', level:0, price:32, image:'/images/items/yield/easter_11_egg2.png?1', image_mini:'images/items/yield/easter_11_egg2.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[185202] = {item_id:185202, nshort:'easter_11_egg3', name:'Пасхальное яйцо', type:'yield', level:0, price:27, image:'/images/items/yield/easter_11_egg3.png?1', image_mini:'images/items/yield/easter_11_egg3.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[185203] = {item_id:185203, nshort:'easter_11_egg4', name:'Пасхальное яйцо', type:'yield', level:0, price:31, image:'/images/items/yield/easter_11_egg4.png?1', image_mini:'images/items/yield/easter_11_egg4.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[185204] = {item_id:185204, nshort:'easter_11_egg5', name:'Пасхальное яйцо', type:'yield', level:0, price:29, image:'/images/items/yield/easter_11_egg5.png?1', image_mini:'images/items/yield/easter_11_egg5.png?1', set:{}, auctionable:true, sellable:true};
    PK_S3_TEST.items[185205] = {item_id:185205, nshort:'easter_11_egg6', name:'Пасхальное яйцо', type:'yield', level:0, price:39, image:'/images/items/yield/easter_11_egg6.png?1', image_mini:'images/items/yield/easter_11_egg6.png?1', set:{}, auctionable:true, sellable:true};
    
    for (var i in PK_S3_TEST.items){
	if (isNaN(i)) continue;
	if (!PK_S3_TEST.items[i].bonus) {PK_S3_TEST.items[i].bonus = {};}
	if (!PK_S3_TEST.items[i].bonus.skills) {PK_S3_TEST.items[i].bonus.skills = {};}
	if (!PK_S3_TEST.items[i].bonus.attributes) {PK_S3_TEST.items[i].bonus.attributes = {};}
	if (!PK_S3_TEST.items[i].bonus.fortbattle) {PK_S3_TEST.items[i].bonus.fortbattle = {};}
	if (!PK_S3_TEST.items[i].bonus.fortbattlesector) {PK_S3_TEST.items[i].bonus.fortbattlesector = {};}
    }

    
    PK_S3_TEST.raboty[1] = {rus_name:'Выпас свиней', name:'swine', malus:2, navyki:{tough:1,endurance:1,leadership:1,animal:2}, resultaty:{dengi:3, opyt:1, vezenie:0, boom:1, produkty:{700:20}}};
    PK_S3_TEST.raboty[2] = {rus_name:'Присмотр за полем', name:'scarecrow', malus:1, navyki:{build:1,shot:1,pitfall:1,tactic:1,animal:1}, resultaty:{dengi:1, opyt:3, vezenie:2, boom:20, produkty:{757:20}}};
    PK_S3_TEST.raboty[3] = {rus_name:'Расклейка плакатов', name:'wanted', malus:1, navyki:{endurance:1,ride:1,hide:1,finger_dexterity:1,pitfall:1}, resultaty:{dengi:2, opyt:3, vezenie:0, boom:10, produkty:{743:40}}};
    PK_S3_TEST.raboty[4] = {rus_name:'Сбор табака', name:'tabacco', malus:1, navyki:{tough:1,finger_dexterity:2,tactic:1,trade:1}, resultaty:{dengi:6, opyt:1, vezenie:2, boom:2, produkty:{702:100}}};
    PK_S3_TEST.raboty[5] = {rus_name:'Сбор хлопка', name:'cotton', malus:2, navyki:{tough:1,endurance:1,finger_dexterity:1,leadership:1,trade:1}, resultaty:{dengi:1, opyt:4, vezenie:0, boom:3, produkty:{704:50}}};
    PK_S3_TEST.raboty[6] = {rus_name:'Сбор сахарного тростника', name:'sugar', malus:4, navyki:{punch:1,tough:1,finger_dexterity:1,repair:1,trade:1}, resultaty:{dengi:5, opyt:2, vezenie:4, boom:1, produkty:{703:100}}};
    PK_S3_TEST.raboty[7] = {rus_name:'Рыбалка', name:'angle', malus:3, navyki:{hide:1,swim:3,repair:1}, resultaty:{dengi:1, opyt:0, vezenie:6, boom:2, produkty:{705:60, 782:3}}};
    PK_S3_TEST.raboty[8] = {rus_name:'Жатва', name:'cereal', malus:11, navyki:{punch:1,tough:1,endurance:1,ride:1,finger_dexterity:1}, resultaty:{dengi:2, opyt:6, vezenie:2, boom:4, produkty:{701:55}}};
    PK_S3_TEST.raboty[9] = {rus_name:'Сбор ягод', name:'berry', malus:16, navyki:{tough:2,hide:1,finger_dexterity:2}, resultaty:{dengi:2, opyt:6, vezenie:5, boom:6, produkty:{706:45}}};
    PK_S3_TEST.raboty[10] = {rus_name:'Выпас овец', name:'sheeps', malus:12, navyki:{tough:1,endurance:1,leadership:1,animal:2}, resultaty:{dengi:3, opyt:5, vezenie:0, boom:2, produkty:{707:25}}};
    PK_S3_TEST.raboty[11] = {rus_name:'Продажа прессы', name:'newspaper', malus:9, navyki:{ride:2,trade:2,appearance:1}, resultaty:{dengi:6, opyt:1, vezenie:2, boom:1, produkty:{744:60}}};
    PK_S3_TEST.raboty[12] = {rus_name:'Сенокос', name:'cut', malus:22, navyki:{punch:1,ride:1,finger_dexterity:1,animal:2}, resultaty:{dengi:5, opyt:7, vezenie:3, boom:3, produkty:{765:5}}};
    PK_S3_TEST.raboty[13] = {rus_name:'Помол зерна', name:'grinding', malus:25, navyki:{punch:1,tough:1,endurance:1,ride:1,finger_dexterity:1}, resultaty:{dengi:11, opyt:7, vezenie:0, boom:5, produkty:{745:40}}};
    PK_S3_TEST.raboty[14] = {rus_name:'Сбор кукурузы', name:'corn', malus:23, navyki:{finger_dexterity:1,tactic:1,trade:1,animal:1,appearance:1}, resultaty:{dengi:4, opyt:7, vezenie:8, boom:5, produkty:{748:25}}};
    PK_S3_TEST.raboty[15] = {rus_name:'Сбор фасоли', name:'beans', malus:23, navyki:{endurance:1,finger_dexterity:1,leadership:1,tactic:1,animal:1}, resultaty:{dengi:9, opyt:7, vezenie:4, boom:5, produkty:{746:40}}};
    PK_S3_TEST.raboty[16] = {rus_name:'Охрана форта', name:'fort_guard', malus:25, navyki:{reflex:1,shot:1,leadership:1,appearance:2}, resultaty:{dengi:3, opyt:9, vezenie:2, boom:7, produkty:{758:2}}};
    PK_S3_TEST.raboty[17] = {rus_name:'Дубление кожи', name:'tanning', malus:40, navyki:{tough:1,endurance:1,swim:1,finger_dexterity:1,trade:1}, resultaty:{dengi:12, opyt:15, vezenie:5, boom:18, produkty:{712:15}}};
    PK_S3_TEST.raboty[18] = {rus_name:'Поиск золота', name:'digging', malus:31, navyki:{tough:1,reflex:1,swim:1,trade:2}, resultaty:{dengi:11, opyt:3, vezenie:5, boom:7, produkty:{708:17, 1791:1}}};
    PK_S3_TEST.raboty[19] = {rus_name:'Захоронение', name:'grave', malus:76, navyki:{build:1,punch:1,tough:1,endurance:1,ride:1}, resultaty:{dengi:16, opyt:12, vezenie:22, boom:9, produkty:{736:8}}};
    PK_S3_TEST.raboty[20] = {rus_name:'Охота на индейку', name:'turkey', malus:43, navyki:{reflex:1,hide:2,shot:1,pitfall:1}, resultaty:{dengi:3, opyt:14, vezenie:7, boom:21, produkty:{709:13}}};
    PK_S3_TEST.raboty[21] = {rus_name:'Строительство железной дороги', name:'rail', malus:45, navyki:{build:2,endurance:1,repair:1,leadership:1}, resultaty:{dengi:10, opyt:18, vezenie:5, boom:10, produkty:{766:25}}};
    PK_S3_TEST.raboty[22] = {rus_name:'Выпас коров', name:'cow', malus:39, navyki:{ride:2,reflex:1,tactic:1,animal:1}, resultaty:{dengi:5, opyt:17, vezenie:0, boom:11, produkty:{710:15}}};
    PK_S3_TEST.raboty[23] = {rus_name:'Ремонт забора', name:'fence', malus:36, navyki:{finger_dexterity:1,repair:2,animal:2}, resultaty:{dengi:7, opyt:11, vezenie:5, boom:6, produkty:{747:11}}};
    PK_S3_TEST.raboty[24] = {rus_name:'Лесопилка', name:'saw', malus:64, navyki:{reflex:2,finger_dexterity:2,trade:1}, resultaty:{dengi:23, opyt:12, vezenie:6, boom:32, produkty:{742:10}}};
    PK_S3_TEST.raboty[25] = {rus_name:'Выработка камня', name:'stone', malus:53, navyki:{punch:3,endurance:1,reflex:1}, resultaty:{dengi:17, opyt:8, vezenie:9, boom:33, produkty:{716:22}}};
    PK_S3_TEST.raboty[26] = {rus_name:'Спрямление русла', name:'straighten', malus:85, navyki:{build:1,swim:3,tactic:1}, resultaty:{dengi:8, opyt:22, vezenie:15, boom:12, produkty:{795:5}}};
    PK_S3_TEST.raboty[27] = {rus_name:'Лесоповал', name:'wood', malus:48, navyki:{punch:2,endurance:1,reflex:1,appearance:1}, resultaty:{dengi:18, opyt:5, vezenie:2, boom:21, produkty:{711:25}}};
    PK_S3_TEST.raboty[28] = {rus_name:'Орошение', name:'irrigation', malus:45, navyki:{build:1,ride:1,repair:1,leadership:1,tactic:1}, resultaty:{dengi:7, opyt:13, vezenie:15, boom:6, produkty:{736:6}}};
    PK_S3_TEST.raboty[29] = {rus_name:'Клеймение скота', name:'brand', malus:50, navyki:{ride:1,reflex:1,pitfall:1,animal:2}, resultaty:{dengi:8, opyt:25, vezenie:0, boom:35, produkty:{740:13}}};
    PK_S3_TEST.raboty[30] = {rus_name:'Ограждение пастбища', name:'wire', malus:58, navyki:{build:1,finger_dexterity:2,pitfall:1,animal:1}, resultaty:{dengi:17, opyt:13, vezenie:6, boom:0, produkty:{739:10}}};
    PK_S3_TEST.raboty[31] = {rus_name:'Прорыв плотины', name:'dam', malus:54, navyki:{swim:2,tactic:2,animal:1}, resultaty:{dengi:4, opyt:18, vezenie:9, boom:41, produkty:{714:5}}};
    PK_S3_TEST.raboty[32] = {rus_name:'Добыча самоцветов', name:'gems', malus:75, navyki:{swim:2,finger_dexterity:1,trade:2}, resultaty:{dengi:25, opyt:7, vezenie:8, boom:4, produkty:{720:8}}};
    PK_S3_TEST.raboty[33] = {rus_name:'Разметка приисков', name:'claim', malus:57, navyki:{build:1,endurance:1,swim:1,trade:1,appearance:1}, resultaty:{dengi:31, opyt:4, vezenie:4, boom:29, produkty:{755:25}}};
    PK_S3_TEST.raboty[34] = {rus_name:'Ремонт повозок', name:'chuck_wagon', malus:134, navyki:{ride:1,repair:2,leadership:1,trade:1}, resultaty:{dengi:5, opyt:23, vezenie:42, boom:11, produkty:{722:15}}};
    PK_S3_TEST.raboty[35] = {rus_name:'Объездка лошадей', name:'break_in', malus:72, navyki:{ride:2,reflex:1,pitfall:1,animal:1}, resultaty:{dengi:13, opyt:32, vezenie:10, boom:52, produkty:{787:5}}};
    PK_S3_TEST.raboty[36] = {rus_name:'Торговля', name:'trade', malus:85, navyki:{pitfall:1,trade:2,appearance:2}, resultaty:{dengi:15, opyt:3, vezenie:25, boom:12, produkty:{715:13, 774:1}}};
    PK_S3_TEST.raboty[37] = {rus_name:'Прокладка телеграфной линии', name:'mast', malus:75, navyki:{build:2,punch:1,swim:1,repair:1}, resultaty:{dengi:21, opyt:25, vezenie:3, boom:14, produkty:{767:14}}};
    PK_S3_TEST.raboty[38] = {rus_name:'Рытьё колодца', name:'spring', malus:103, navyki:{build:1,endurance:1,swim:1,leadership:1,tactic:1}, resultaty:{dengi:9, opyt:33, vezenie:23, boom:19, produkty:{741:10}}};
    PK_S3_TEST.raboty[39] = {rus_name:'Охота на бобра', name:'beaver', malus:120, navyki:{hide:2,pitfall:3}, resultaty:{dengi:32, opyt:17, vezenie:6, boom:21, produkty:{714:17, 771:13}}};
    PK_S3_TEST.raboty[40] = {rus_name:'Добыча угля', name:'coal', malus:86, navyki:{punch:2,reflex:1,finger_dexterity:1,trade:1}, resultaty:{dengi:30, opyt:14, vezenie:0, boom:13, produkty:{721:37}}};
    PK_S3_TEST.raboty[41] = {rus_name:'Типография', name:'print', malus:83, navyki:{tough:1,endurance:1,finger_dexterity:1,repair:1,leadership:1}, resultaty:{dengi:30, opyt:20, vezenie:5, boom:7, produkty:{744:40}}};
    PK_S3_TEST.raboty[42] = {rus_name:'Рыбная ловля', name:'fishing', malus:91, navyki:{swim:2,pitfall:2,leadership:1}, resultaty:{dengi:6, opyt:23, vezenie:23, boom:38, produkty:{717:15, 705:5}}};
    PK_S3_TEST.raboty[43] = {rus_name:'Строительство вокзала', name:'trainstation', malus:113, navyki:{build:2,finger_dexterity:1,repair:1,leadership:1}, resultaty:{dengi:12, opyt:47, vezenie:7, boom:15, produkty:{759:7}}};
    PK_S3_TEST.raboty[44] = {rus_name:'Строительство ветряной мельницы', name:'windmeel', malus:164, navyki:{build:1,endurance:1,ride:1,leadership:1,tactic:1}, resultaty:{dengi:42, opyt:43, vezenie:6, boom:18, produkty:{756:5}}};
    PK_S3_TEST.raboty[45] = {rus_name:'Рекогносцировка', name:'explore', malus:112, navyki:{endurance:1,shot:1,ride:1,swim:1,leadership:1}, resultaty:{dengi:1, opyt:45, vezenie:22, boom:37, produkty:{760:15}}};
    PK_S3_TEST.raboty[46] = {rus_name:'Сплав леса', name:'float', malus:138, navyki:{reflex:1,swim:3,tactic:1}, resultaty:{dengi:23, opyt:45, vezenie:0, boom:52, produkty:{711:30}}};
    PK_S3_TEST.raboty[47] = {rus_name:'Строительство моста', name:'bridge', malus:108, navyki:{build:1,endurance:1,swim:2,repair:1}, resultaty:{dengi:17, opyt:33, vezenie:18, boom:53, produkty:{761:8}}};
    PK_S3_TEST.raboty[48] = {rus_name:'Отлов лошадей', name:'springe', malus:135, navyki:{endurance:1,ride:2,animal:2}, resultaty:{dengi:29, opyt:45, vezenie:0, boom:42, produkty:{749:22}}};
    PK_S3_TEST.raboty[49] = {rus_name:'Изготовление гробов', name:'coffin', malus:119, navyki:{build:1,reflex:1,repair:2,appearance:1}, resultaty:{dengi:42, opyt:8, vezenie:15, boom:20, produkty:{734:25}}};
    PK_S3_TEST.raboty[50] = {rus_name:'Доставка амуниции', name:'dynamite', malus:145, navyki:{ride:1,reflex:1,shot:1,finger_dexterity:1,appearance:1}, resultaty:{dengi:23, opyt:12, vezenie:64, boom:93, produkty:{737:5}}};
    PK_S3_TEST.raboty[51] = {rus_name:'Охота на койотов', name:'coyote', malus:141, navyki:{endurance:2,shot:1,pitfall:1,hide:1}, resultaty:{dengi:15, opyt:43, vezenie:26, boom:45, produkty:{718:6}}};
    PK_S3_TEST.raboty[52] = {rus_name:'Охота на бизона', name:'buffalo', malus:179, navyki:{ride:1,pitfall:1,leadership:1,tactic:1,animal:1}, resultaty:{dengi:24, opyt:62, vezenie:0, boom:72, produkty:{724:14}}};
    PK_S3_TEST.raboty[53] = {rus_name:'Строительство особняка', name:'fort', malus:225, navyki:{build:1,pitfall:1,repair:1,leadership:2}, resultaty:{dengi:33, opyt:71, vezenie:17, boom:35, produkty:{762:3}}};
    PK_S3_TEST.raboty[54] = {rus_name:'Торговля с индейцами', name:'indians', malus:224, navyki:{pitfall:1,trade:2,appearance:2}, resultaty:{dengi:11, opyt:14, vezenie:63, boom:34, produkty:{719:13}}};
    PK_S3_TEST.raboty[55] = {rus_name:'Вырубка леса', name:'clearing', malus:179, navyki:{punch:2,reflex:1,leadership:1,tactic:1}, resultaty:{dengi:62, opyt:8, vezenie:9, boom:16, produkty:{711:65}}};
    PK_S3_TEST.raboty[56] = {rus_name:'Добыча серебра', name:'silver', malus:194, navyki:{punch:1,tough:1,finger_dexterity:1,trade:2}, resultaty:{dengi:76, opyt:8, vezenie:0, boom:32, produkty:{725:17}}};
    PK_S3_TEST.raboty[57] = {rus_name:'Охрана дилижанса', name:'diligence_guard', malus:404, navyki:{ride:1,shot:1,repair:1,leadership:2}, resultaty:{dengi:34, opyt:77, vezenie:45, boom:43, produkty:{780:12}}};
    PK_S3_TEST.raboty[58] = {rus_name:'Охота на волков', name:'wolf', malus:208, navyki:{hide:2,pitfall:2,animal:1}, resultaty:{dengi:21, opyt:63, vezenie:15, boom:67, produkty:{763:11}}};
    PK_S3_TEST.raboty[59] = {rus_name:'Охрана каравана', name:'track', malus:213, navyki:{hide:2,leadership:2,tactic:1}, resultaty:{dengi:10, opyt:60, vezenie:30, boom:33, produkty:{778:12}}};
    PK_S3_TEST.raboty[60] = {rus_name:'Конокрадство', name:'ox', malus:238, navyki:{reflex:1,hide:1,pitfall:2,animal:1}, resultaty:{dengi:64, opyt:34, vezenie:18, boom:43, produkty:{787:13}}};
    PK_S3_TEST.raboty[61] = {rus_name:'Охрана тюрьмы', name:'guard', malus:222, navyki:{punch:1,reflex:1,shot:1,appearance:2}, resultaty:{dengi:25, opyt:35, vezenie:38, boom:4, produkty:{750:1}}};
    PK_S3_TEST.raboty[62] = {rus_name:'Миссионерство', name:'bible', malus:236, navyki:{tough:1,ride:1,trade:1,appearance:2}, resultaty:{dengi:5, opyt:61, vezenie:52, boom:77, produkty:{768:1}}};
    PK_S3_TEST.raboty[63] = {rus_name:'Пони-экспресс', name:'ponyexpress', malus:226, navyki:{endurance:1,ride:2,shot:1,animal:1}, resultaty:{dengi:15, opyt:45, vezenie:51, boom:44, produkty:{779:5}}};
    PK_S3_TEST.raboty[64] = {rus_name:'Торговля оружием с индейцами', name:'weapons', malus:258, navyki:{hide:1,shot:1,repair:1,trade:2}, resultaty:{dengi:15, opyt:35, vezenie:72, boom:82, produkty:{783:4}}};
    PK_S3_TEST.raboty[65] = {rus_name:'Мародёрство', name:'dead', malus:266, navyki:{tough:1,hide:1,finger_dexterity:2,repair:1}, resultaty:{dengi:14, opyt:14, vezenie:90, boom:34, produkty:{774:1,723:1}}};
    PK_S3_TEST.raboty[66] = {rus_name:'Охота на гризли', name:'grizzly', malus:281, navyki:{hide:1,shot:1,pitfall:2,animal:1}, resultaty:{dengi:25, opyt:78, vezenie:35, boom:71, produkty:{731:3}}};
    PK_S3_TEST.raboty[67] = {rus_name:'Добыча нефти', name:'oil', malus:295, navyki:{build:1,tough:1,endurance:1,leadership:1,trade:1}, resultaty:{dengi:83, opyt:25, vezenie:20, boom:7, produkty:{752:25}}};
    PK_S3_TEST.raboty[68] = {rus_name:'Поиски клада', name:'treasure_hunting', malus:294, navyki:{hide:2,repair:2,tactic:1}, resultaty:{dengi:20, opyt:20, vezenie:83, boom:24, produkty:{726:1}}};
    PK_S3_TEST.raboty[69] = {rus_name:'Служба в армии', name:'army', malus:299, navyki:{endurance:1,swim:1,shot:1,pitfall:1,appearance:1}, resultaty:{dengi:55, opyt:76, vezenie:17, boom:35, produkty:{727:2}}};
    PK_S3_TEST.raboty[70] = {rus_name:'Мелкое воровство', name:'steal', malus:372, navyki:{reflex:1,hide:1,shot:1,pitfall:1,finger_dexterity:1}, resultaty:{dengi:48, opyt:50, vezenie:74, boom:66, produkty:{728:4}}};
    PK_S3_TEST.raboty[71] = {rus_name:'Служба наёмником', name:'mercenary', malus:332, navyki:{tough:1,swim:1,shot:1,repair:1,appearance:1}, resultaty:{dengi:92, opyt:52, vezenie:23, boom:65, produkty:{1708:85}}};
    PK_S3_TEST.raboty[72] = {rus_name:'Преследование бандитов', name:'bandits', malus:385, navyki:{tough:1,endurance:1,hide:1,leadership:1,tactic:1}, resultaty:{dengi:28, opyt:75, vezenie:85, boom:83, produkty:{729:5}}};
    PK_S3_TEST.raboty[73] = {rus_name:'Налёт', name:'aggression', malus:422, navyki:{hide:2,pitfall:1,tactic:1,appearance:1}, resultaty:{dengi:78, opyt:27, vezenie:78, boom:86, produkty:{730:13,774:1}}};
    PK_S3_TEST.raboty[74] = {rus_name:'Нападение на дилижанс', name:'diligence_aggression', malus:476, navyki:{shot:1,pitfall:1,leadership:1,tactic:1,appearance:1}, resultaty:{dengi:43, opyt:73, vezenie:95, boom:67, produkty:{733:15}}};
    PK_S3_TEST.raboty[75] = {rus_name:'Охота за преступниками', name:'bounty', malus:426, navyki:{punch:1,endurance:1,shot:1,pitfall:1,appearance:1}, resultaty:{dengi:92, opyt:32, vezenie:79, boom:72, produkty:{1756:25}}};
    PK_S3_TEST.raboty[76] = {rus_name:'Перевозка заключённых', name:'captured', malus:438, navyki:{endurance:1,reflex:1,hide:1,tactic:2}, resultaty:{dengi:23, opyt:69, vezenie:85, boom:44, produkty:{764:4}}};
    PK_S3_TEST.raboty[77] = {rus_name:'Нападение на поезд', name:'train', malus:506, navyki:{endurance:1,hide:1,shot:1,pitfall:1,trade:1}, resultaty:{dengi:67, opyt:87, vezenie:92, boom:96, produkty:{1755:1}}};
    PK_S3_TEST.raboty[78] = {rus_name:'Кража со взломом', name:'burglary', malus:518, navyki:{endurance:1,hide:2,tactic:1,trade:1}, resultaty:{dengi:80, opyt:34, vezenie:81, boom:26, produkty:{786:12}}};
    PK_S3_TEST.raboty[79] = {rus_name:'Знахарство', name:'quackery', malus:316, navyki:{hide:1,shot:1,pitfall:1,trade:1,appearance:1}, resultaty:{dengi:65, opyt:50, vezenie:52, boom:67, produkty:{794:9}}};
    PK_S3_TEST.raboty[80] = {rus_name:'Парламентёрство', name:'peace', malus:367, navyki:{endurance:1,hide:1,shot:1,trade:1,appearance:1}, resultaty:{dengi:33, opyt:68, vezenie:76, boom:44, produkty:{751:8}}};
    PK_S3_TEST.raboty[82] = {rus_name:'Речные перевозки', name:'ship', malus:348, navyki:{punch:1,swim:2,leadership:2}, resultaty:{dengi:82, opyt:35, vezenie:15, boom:14, produkty:{788:12}}};
    PK_S3_TEST.raboty[83] = {rus_name:'Контрабанда', name:'smuggle', malus:411, navyki:{hide:1,swim:1,shot:1,trade:1,appearance:1}, resultaty:{dengi:62, opyt:45, vezenie:83, boom:56, produkty:{729:22}}};
    PK_S3_TEST.raboty[84] = {rus_name:'Строительство ранчо', name:'ranch', malus:221, navyki:{build:2,endurance:1,ride:1,animal:1}, resultaty:{dengi:28, opyt:61, vezenie:17, boom:24, produkty:{784:45}}};
    PK_S3_TEST.raboty[85] = {rus_name:'Добыча железа', name:'iron', malus:177, navyki:{build:1,punch:1,reflex:1,finger_dexterity:1,repair:1}, resultaty:{dengi:52, opyt:32, vezenie:15, boom:29, produkty:{790:38, 753:2}}};
    PK_S3_TEST.raboty[86] = {rus_name:'Сбор агавы', name:'agave', malus:153, navyki:{punch:1,tough:2,endurance:1,finger_dexterity:1}, resultaty:{dengi:25, opyt:42, vezenie:12, boom:27, produkty:{792:12}}};
    PK_S3_TEST.raboty[87] = {rus_name:'Сбор помидоров', name:'tomato', malus:43, navyki:{ride:1,finger_dexterity:1,leadership:1,tactic:1,trade:1}, resultaty:{dengi:13, opyt:12, vezenie:7, boom:11, produkty:{793:33}}};
    PK_S3_TEST.raboty[88] = {rus_name:'Набивка подков', name:'horseshoe', malus:93, navyki:{punch:1,ride:2,animal:2}, resultaty:{dengi:14, opyt:28, vezenie:9, boom:23, produkty:{754:22}}};
    PK_S3_TEST.raboty[90] = {rus_name:'Тушение пожара', name:'fire', malus:229, navyki:{build:1,tough:1,reflex:1,leadership:1,tactic:1}, resultaty:{dengi:15, opyt:41, vezenie:65, boom:45, produkty:{781:2}}};
    PK_S3_TEST.raboty[91] = {rus_name:'Сбор апельсинов', name:'orange', malus:67, navyki:{endurance:1,reflex:1,pitfall:1,repair:1,tactic:1}, resultaty:{dengi:14, opyt:25, vezenie:10, boom:21, produkty:{791:25}}};
    PK_S3_TEST.raboty[92] = {rus_name:'Чистка хлева', name:'muck_out', malus:8, navyki:{tough:1,ride:1,repair:1,animal:2}, resultaty:{dengi:4, opyt:5, vezenie:2, boom:6, produkty:{797:5}}};
    PK_S3_TEST.raboty[93] = {rus_name:'Чистка обуви', name:'shoes', malus:1, navyki:{hide:1,pitfall:1,finger_dexterity:1,trade:1,appearance:1}, resultaty:{dengi:3, opyt:2, vezenie:3, boom:2, produkty:{789:35}}};

    PK_S3_TEST.raboty[94] = {rus_name:'Штопка носков', name:'socks_darn', malus:1, navyki:{tough:2,endurance:1,finger_dexterity:2}, resultaty:{dengi:1, opyt:4, vezenie:0, boom:2, produkty:{1807:75}}};
    PK_S3_TEST.raboty[95] = {rus_name:'Уборка картошки', name:'potatoe', malus:113, navyki:{tough:2,endurance:2,finger_dexterity:1}, resultaty:{dengi:8, opyt:53, vezenie:5, boom:5, produkty:{1808:75}}};
    PK_S3_TEST.raboty[96] = {rus_name:'Кормление скота', name:'feed_animal', malus:147, navyki:{punch:1,tough:1,leadership:1,animal:2}, resultaty:{dengi:17, opyt:60, vezenie:10, boom:20, produkty:{1809:50}}};
    PK_S3_TEST.raboty[97] = {rus_name:'Сбор тыквы', name:'pumpkin', malus:175, navyki:{punch:2,tough:1,endurance:1,tactic:1}, resultaty:{dengi:45, opyt:45, vezenie:10, boom:10, produkty:{1810:60}}};
    PK_S3_TEST.raboty[98] = {rus_name:'Сбор черники', name:'blueberries', malus:200, navyki:{punch:1,tough:1,ride:2,finger_dexterity:1}, resultaty:{dengi:52, opyt:35, vezenie:35, boom:15, produkty:{1811:65}}};
    PK_S3_TEST.raboty[99] = {rus_name:'Озеленение', name:'plant_trees', malus:226, navyki:{build:2,ride:1,finger_dexterity:1,tactic:1}, resultaty:{dengi:34, opyt:25, vezenie:54, boom:25, produkty:{1812:30}}};
    PK_S3_TEST.raboty[100] = {rus_name:'Сбор орлиных перьев', name:'gather_feathers', malus:276, navyki:{finger_dexterity:1, repair:2,tactic:1,trade:1}, resultaty:{dengi:47, opyt:23, vezenie:60, boom:15, produkty:{1813:20}}};
    PK_S3_TEST.raboty[101] = {rus_name:'Сбор лотоса', name:'lotus_gathering', malus:351, navyki:{tough:1,swim:2,finger_dexterity:1,repair:1}, resultaty:{dengi:54, opyt:45, vezenie:35, boom:20, produkty:{1814:15}}};
    PK_S3_TEST.raboty[102] = {rus_name:'Ловля крабов', name:'crab_hunting', malus:376, navyki:{tough:1,reflex:1,swim:2,finger_dexterity:1}, resultaty:{dengi:67, opyt:56, vezenie:35, boom:12, produkty:{1815:10}}};
    PK_S3_TEST.raboty[103] = {rus_name:'Преподавание', name:'teaching', malus:401, navyki:{endurance:1,pitfall:1,leadership:1,appearance:2}, resultaty:{dengi:54, opyt:79, vezenie:5, boom:23, produkty:{1816:25}}};
    PK_S3_TEST.raboty[104] = {rus_name:'Служба шерифом', name:'sheriff_work', malus:411, navyki:{reflex:1,shot:2,leadership:1,appearance:1}, resultaty:{dengi:67, opyt:76, vezenie:56, boom:45, produkty:{1817:50}}};
    PK_S3_TEST.raboty[105] = {rus_name:'Добыча серы', name:'sulfur_gathering', malus:421, navyki:{punch:2,reflex:2,repair:1}, resultaty:{dengi:76, opyt:34, vezenie:78, boom:32, produkty:{1818:10}}};
    PK_S3_TEST.raboty[106] = {rus_name:'Сплав по бурному потоку', name:'wildwater', malus:426, navyki:{reflex:2,swim:2,tactic:1}, resultaty:{dengi:84, opyt:74, vezenie:30, boom:57, produkty:{999:25}}};
    PK_S3_TEST.raboty[107] = {rus_name:'Шулерство', name:'gambler', malus:431, navyki:{reflex:1,hide:1,shot:1,trade:1,appearance:1}, resultaty:{dengi:67, opyt:57, vezenie:69, boom:63, produkty:{1819:25}}};
    PK_S3_TEST.raboty[108] = {rus_name:'Отлов гремучих змей', name:'rattlesnake', malus:441, navyki:{reflex:2,hide:1,pitfall:1,animal:1}, resultaty:{dengi:72, opyt:46, vezenie:71, boom:73, produkty:{1820:15}}};
    PK_S3_TEST.raboty[109] = {rus_name:'Добыча селитры', name:'salpeter_gathering', malus:451, navyki:{tough:2,endurance:1,finger_dexterity:1,repair:1}, resultaty:{dengi:62, opyt:53, vezenie:58, boom:27, produkty:{1821:35}}};
    PK_S3_TEST.raboty[110] = {rus_name:'Перегонка лошадей', name:'horse_transport', malus:451, navyki:{ride:2,leadership:1,animal:2}, resultaty:{dengi:66, opyt:82, vezenie:69, boom:48, produkty:{1822:10}}};
    PK_S3_TEST.raboty[111] = {rus_name:'Организация родео', name:'rodeo', malus:500, navyki:{endurance:1,ride:2,pitfall:1,animal:1}, resultaty:{dengi:76, opyt:56, vezenie:69, boom:78, produkty:{1823:5}}};
    PK_S3_TEST.raboty[112] = {rus_name:'Коммивояжёрство', name:'travelling_salesman', malus:501, navyki:{tough:1,pitfall:1,trade:2,appearance:1}, resultaty:{dengi:59, opyt:46, vezenie:97, boom:67, produkty:{999:7}}};
    PK_S3_TEST.raboty[113] = {rus_name:'Брачный аферист', name:'con_artist', malus:521, navyki:{endurance:1,pitfall:1,tactic:1,trade:1,appearance:1}, resultaty:{dengi:78, opyt:89, vezenie:35, boom:83, produkty:{1836:2}}};
    PK_S3_TEST.raboty[114] = {rus_name:'Охота на пуму', name:'cougar', malus:541, navyki:{shot:2,pitfall:1,tactic:1,animal:1}, resultaty:{dengi:46, opyt:89, vezenie:39, boom:93, produkty:{1824:20}}};
    PK_S3_TEST.raboty[115] = {rus_name:'Сбор индигоферы', name:'indigo_gathering', malus:591, navyki:{reflex:1,finger_dexterity:2,tactic:1,trade:1}, resultaty:{dengi:87, opyt:73, vezenie:29, boom:69, produkty:{1825:5}}};
    PK_S3_TEST.raboty[116] = {rus_name:'Доставка спиртного', name:'alcohol', malus:601, navyki:{ride:1,hide:2,shot:1,leadership:1}, resultaty:{dengi:74, opyt:91, vezenie:34, boom:56, produkty:{1826:50}}};
    PK_S3_TEST.raboty[117] = {rus_name:'Добыча свинца', name:'lead_gathering', malus:621, navyki:{punch:1,finger_dexterity:1,repair:2,leadership:1}, resultaty:{dengi:89, opyt:72, vezenie:22, boom:72, produkty:{1827:30}}};
    PK_S3_TEST.raboty[118] = {rus_name:'Поиск редких самоцветов', name:'gem_gathering', malus:641, navyki:{punch:2,endurance:1,shot:1,repair:1}, resultaty:{dengi:91, opyt:78, vezenie:23, boom:77, produkty:{1828:20, 1829:20, 1830:20}}};
    PK_S3_TEST.raboty[119] = {rus_name:'Сооружение миссии', name:'mission', malus:571, navyki:{build:2,punch:1,endurance:1,repair:1}, resultaty:{dengi:92, opyt:82, vezenie:54, boom:38, produkty:{1831:3}}};
    PK_S3_TEST.raboty[120] = {rus_name:'Строительство казино', name:'casino', malus:651, navyki:{build:3,repair:1,leadership:1}, resultaty:{dengi:78, opyt:92, vezenie:23, boom:45, produkty:{1832:10}}};
    PK_S3_TEST.raboty[121] = {rus_name:'Служба шерифом округа', name:'marshall', malus:701, navyki:{ride:1,shot:2,pitfall:1,appearance:1}, resultaty:{dengi:87, opyt:90, vezenie:60, boom:94, produkty:{1833:1}}};
    PK_S3_TEST.raboty[122] = {rus_name:'Борьба с бандитизмом', name:'shatter_gang', malus:726, navyki:{endurance:1,hide:2,pitfall:1,tactic:1}, resultaty:{dengi:84, opyt:70, vezenie:89, boom:99, produkty:{999:10}}};
    PK_S3_TEST.raboty[123] = {rus_name:'Ограбление банка', name:'bankrobbery', malus:741, navyki:{hide:2,pitfall:1,leadership:1,trade:1}, resultaty:{dengi:93, opyt:84, vezenie:30, boom:89, produkty:{1837:1}}};
    PK_S3_TEST.raboty[124] = {rus_name:'Освобождение рабов', name:'free_slaves', malus:751, navyki:{swim:1,shot:1,leadership:1,tactic:1,appearance:1}, resultaty:{dengi:84, opyt:93, vezenie:28, boom:92, produkty:{1834:5}}};
    PK_S3_TEST.raboty[125] = {rus_name:'Выступление в шоу Буффало Билла', name:'buffelo_bill', malus:801, navyki:{ride:1,shot:1,animal:1,appearance:2}, resultaty:{dengi:92, opyt:94, vezenie:65, boom:70, produkty:{1835:5}}};
    PK_S3_TEST.raboty[126] = {rus_name:'Строительство частокола', name:'build_palisade', malus:301, navyki:{build:1,punch:1,endurance:1,repair:1,leadership:1}, resultaty:{dengi:33, opyt:65, vezenie:20, boom:30, produkty:{999:20}}};

    PK_S3_TEST.raboty[PK_S3_TEST.raboty.build] = {rus_name:'!Строительство города/форта', name:'build', malus:0, navyki:{build:3,repair:1,leadership:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:0, produkty:{}}};
    PK_S3_TEST.raboty[PK_S3_TEST.raboty.moving] = {rus_name:'!Передвижение', name:'moving', malus:0, navyki:{ride:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:0, produkty:{}}};
    PK_S3_TEST.raboty[PK_S3_TEST.raboty.health] = {rus_name:'!СОН-жизнь', name:'health', malus:0, navyki:{health:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:0, produkty:{}}};
    PK_S3_TEST.raboty[PK_S3_TEST.raboty.energy] = {rus_name:'!СОН-энергия', name:'energy', malus:0, navyki:{health:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:0, produkty:{}}};
//
    PK_S3_TEST.raboty[301] = {rus_name:'Форт. Атака', name:'attack', malus:0, navyki:{aim:.5,dodge:.5,endurance:1,leadership:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[302] = {rus_name:'Форт. Атака (меткость)', name:'attack', malus:0, navyki:{aim:1,dodge:.001,endurance:1,leadership:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[303] = {rus_name:'Форт. Атака (уворот)', name:'attack', malus:0, navyki:{aim:.001,dodge:1,endurance:1,leadership:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[304] = {rus_name:'Форт. Защита', name:'defend', malus:0, navyki:{aim:.5,dodge:.5,hide:1,leadership:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:50, produkty:{}}};
    PK_S3_TEST.raboty[305] = {rus_name:'Форт. Защита (меткость)', name:'defend', malus:0, navyki:{aim:1,dodge:.001,hide:1,leadership:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:50, produkty:{}}};
    PK_S3_TEST.raboty[306] = {rus_name:'Форт. Защита (уворот)', name:'defend', malus:0, navyki:{aim:.001,dodge:1,hide:1,leadership:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:50, produkty:{}}};
//    
    PK_S3_TEST.raboty[401] = {rus_name:'!Стрелок-стрелок атака', name:'sh_vs_sh_at', malus:0, navyki:{aim:1, dodge:1, shot:1, reflex:1, appearance:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[402] = {rus_name:'!Стрелок-стрелок защита', name:'sh_vs_sh_de', malus:0, navyki:{aim:1, dodge:1, shot:1, reflex:1, tactic:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[403] = {rus_name:'!Стрелок-ударник атака', name:'sh_vs_me_at', malus:0, navyki:{aim:1, dodge:1, shot:1, tough:1, appearance:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[404] = {rus_name:'!Стрелок-ударник защита', name:'sh_vs_me_de', malus:0, navyki:{aim:1, dodge:1, shot:1, tough:1, tactic:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[405] = {rus_name:'!Стрелок-все защита', name:'sh_vs_al_de', malus:0, navyki:{aim:1, dodge:1, shot:1, tough:0.75, reflex:0.75}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[406] = {rus_name:'!Ударник-стрелок атака', name:'me_vs_sh_at', malus:0, navyki:{aim:1, dodge:1, punch:1, reflex:1, appearance:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[407] = {rus_name:'!Ударник-стрелок защита', name:'me_vs_sh_de', malus:0, navyki:{aim:1, dodge:1, punch:1, reflex:1, tactic:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[408] = {rus_name:'!Ударник-ударник атака', name:'me_vs_me_at', malus:0, navyki:{aim:1, dodge:1, punch:1, tough:1, appearance:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[409] = {rus_name:'!Ударник-ударник защита', name:'me_vs_me_de', malus:0, navyki:{aim:1, dodge:1, punch:1, tough:1, tactic:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[410] = {rus_name:'!Ударник-все защита', name:'me_vs_al_de', malus:0, navyki:{aim:1, dodge:1, punch:1, tough:0.75, reflex:0.75}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
//
    PK_S3_TEST.raboty[421] = {rus_name:'Блеф, меткость', name:'duel421', malus:0, navyki:{appearance:1, aim:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[422] = {rus_name:'Блеф, меткость, стрельба', name:'duel422', malus:0, navyki:{aim:1,shot:1,appearance:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[423] = {rus_name:'Блеф, меткость, удар', name:'duel423', malus:0, navyki:{aim:1,punch:1,appearance:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[424] = {rus_name:'Блеф, меткость, уворот', name:'duel424', malus:0, navyki:{aim:1,dodge:1,appearance:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[425] = {rus_name:'Блеф, меткость, уворот, стрельба', name:'duel425', malus:0, navyki:{aim:1,dodge:1,appearance:1, shot:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[426] = {rus_name:'Блеф, уворот', name:'duel426', malus:0, navyki:{dodge:1,appearance:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[427] = {rus_name:'Тактика, уворот', name:'duel427', malus:0, navyki:{dodge:1,tactic:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[428] = {rus_name:'Тактика, меткость, уворот', name:'duel428', malus:0, navyki:{aim:1,dodge:1,tactic:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[429] = {rus_name:'Тактика, меткость, уворот, стрельба', name:'duel429', malus:0, navyki:{aim:1,dodge:1,tactic:1, shot:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[430] = {rus_name:'Стрельба, меткость', name:'duel430', malus:0, navyki:{aim:1,shot:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[431] = {rus_name:'Стрельба, уворот', name:'duel431', malus:0, navyki:{dodge:1,shot:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[432] = {rus_name:'Удар, меткость', name:'duel432', malus:0, navyki:{aim:1,punch:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[433] = {rus_name:'Удар, реакция', name:'duel433', malus:0, navyki:{punch:1,reflex:1,tough:0.5}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[434] = {rus_name:'Удар, стойкость', name:'duel434', malus:0, navyki:{punch:1,reflex:0.25,tough:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[435] = {rus_name:'Удар, меткость, реакция', name:'duel435', malus:0, navyki:{aim:1,punch:1,reflex:1,tough:0.25}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[436] = {rus_name:'Удар, меткость, стойкость', name:'duel436', malus:0, navyki:{aim:1,punch:1,reflex:0.25,tough:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[437] = {rus_name:'Меткость, реакция', name:'duel437', malus:0, navyki:{aim:1,reflex:1,tough:0.5}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[438] = {rus_name:'Меткость, стойкость', name:'duel438', malus:0, navyki:{aim:1,reflex:0.25,tough:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[439] = {rus_name:'Меткость, уворот', name:'duel439', malus:0, navyki:{aim:1,dodge:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[440] = {rus_name:'Блеф, меткость, уворот, удар', name:'duel440', malus:0, navyki:{aim:1,dodge:1,appearance:1, punch:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[441] = {rus_name:'Блеф, уворот, стрельба', name:'duel441', malus:0, navyki:{dodge:1,appearance:1, shot:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[442] = {rus_name:'Блеф, уворот, удар', name:'duel442', malus:0, navyki:{dodge:1,appearance:1, punch:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[443] = {rus_name:'Тактика, меткость, уворот, удар', name:'duel443', malus:0, navyki:{aim:1,dodge:1,tactic:1, punch:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[444] = {rus_name:'Тактика, меткость', name:'duel444', malus:0, navyki:{aim:1,tactic:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
    PK_S3_TEST.raboty[445] = {rus_name:'Удар, уворот', name:'duel445', malus:0, navyki:{dodge:1,punch:1}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:100, produkty:{}}};
//
    PK_S3_TEST.komplekty.max = 9;
    PK_S3_TEST.komplekty.set_farmer=[];
    PK_S3_TEST.komplekty.set_farmer[1] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_farmer[2] = {bonus:{attributes:{flexibility:1, strength:1}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_farmer[2].raboty[8]=10;PK_S3_TEST.komplekty.set_farmer[2].raboty[12]=10;PK_S3_TEST.komplekty.set_farmer[2].raboty[13]=10;
    PK_S3_TEST.komplekty.set_farmer[3] = {bonus:{attributes:{flexibility:1, strength:1, dexterity:1, charisma:1}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_farmer[3].raboty[8]=10;PK_S3_TEST.komplekty.set_farmer[3].raboty[12]=10;PK_S3_TEST.komplekty.set_farmer[3].raboty[13]=10;
    PK_S3_TEST.komplekty.set_farmer[3].raboty[88]=20;PK_S3_TEST.komplekty.set_farmer[3].raboty[30]=20;PK_S3_TEST.komplekty.set_farmer[3].raboty[22]=20;
    PK_S3_TEST.komplekty.set_farmer[4] = {bonus:{attributes:{flexibility:2, strength:2, dexterity:2, charisma:2}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_farmer[4].raboty[8]=10;PK_S3_TEST.komplekty.set_farmer[4].raboty[12]=10;PK_S3_TEST.komplekty.set_farmer[4].raboty[13]=10;
    PK_S3_TEST.komplekty.set_farmer[4].raboty[88]=20;PK_S3_TEST.komplekty.set_farmer[4].raboty[30]=20;PK_S3_TEST.komplekty.set_farmer[4].raboty[22]=20;
    PK_S3_TEST.komplekty.set_farmer[4].raboty[48]=40;PK_S3_TEST.komplekty.set_farmer[4].raboty[84]=40;PK_S3_TEST.komplekty.set_farmer[4].raboty[44]=40;
    PK_S3_TEST.komplekty.set_farmer[5] = {bonus:{attributes:{flexibility:2, strength:2, dexterity:2, charisma:2}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_farmer[5].raboty[8]=10;PK_S3_TEST.komplekty.set_farmer[5].raboty[12]=10;PK_S3_TEST.komplekty.set_farmer[5].raboty[13]=10;
    PK_S3_TEST.komplekty.set_farmer[5].raboty[88]=20;PK_S3_TEST.komplekty.set_farmer[5].raboty[30]=20;PK_S3_TEST.komplekty.set_farmer[5].raboty[22]=20;
    PK_S3_TEST.komplekty.set_farmer[5].raboty[48]=40;PK_S3_TEST.komplekty.set_farmer[5].raboty[84]=40;PK_S3_TEST.komplekty.set_farmer[5].raboty[44]=40;PK_S3_TEST.komplekty.set_farmer[5].raboty[95]=40;
    PK_S3_TEST.komplekty.set_farmer[6] = {bonus:{attributes:{flexibility:2, strength:2, dexterity:2, charisma:2}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_farmer[6].raboty[8]=10;PK_S3_TEST.komplekty.set_farmer[6].raboty[12]=10;PK_S3_TEST.komplekty.set_farmer[6].raboty[13]=10;
    PK_S3_TEST.komplekty.set_farmer[6].raboty[88]=20;PK_S3_TEST.komplekty.set_farmer[6].raboty[30]=20;PK_S3_TEST.komplekty.set_farmer[6].raboty[22]=20;
    PK_S3_TEST.komplekty.set_farmer[6].raboty[48]=40;PK_S3_TEST.komplekty.set_farmer[6].raboty[84]=40;PK_S3_TEST.komplekty.set_farmer[6].raboty[44]=40;PK_S3_TEST.komplekty.set_farmer[6].raboty[95]=40;PK_S3_TEST.komplekty.set_farmer[6].raboty[110]=40;
    PK_S3_TEST.komplekty.set_farmer[7] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_farmer[8] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_farmer[9] = {bonus:{attributes:{}, skills:{}}, raboty:[]};

    PK_S3_TEST.komplekty.set_indian=[];
    PK_S3_TEST.komplekty.set_indian[1] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_indian[2] = {bonus:{attributes:{flexibility:2}, skills:{hide:8}}, speed:(1 / 1.15), raboty:[]};
    PK_S3_TEST.komplekty.set_indian[2].raboty[51]=30;
    PK_S3_TEST.komplekty.set_indian[3] = {bonus:{attributes:{flexibility:5}, skills:{hide:8, swim:8}}, speed:(1 / 1.3), raboty:[]};
    PK_S3_TEST.komplekty.set_indian[3].raboty[51]=30;PK_S3_TEST.komplekty.set_indian[3].raboty[52]=40;
    PK_S3_TEST.komplekty.set_indian[4] = {bonus:{attributes:{flexibility:8}, skills:{hide:8, swim:8, pitfall:8}}, speed:(1 / 1.45), raboty:[]};
    PK_S3_TEST.komplekty.set_indian[4].raboty[51]=30;PK_S3_TEST.komplekty.set_indian[4].raboty[52]=40;PK_S3_TEST.komplekty.set_indian[4].raboty[58]=50;
    PK_S3_TEST.komplekty.set_indian[5] = {bonus:{attributes:{flexibility:12}, skills:{hide:8, swim:8, pitfall:8, animal:8}}, speed:(1 / 1.6), raboty:[]};
    PK_S3_TEST.komplekty.set_indian[5].raboty[51]=30;PK_S3_TEST.komplekty.set_indian[5].raboty[52]=40;PK_S3_TEST.komplekty.set_indian[5].raboty[58]=50;PK_S3_TEST.komplekty.set_indian[5].raboty[66]=60;
    PK_S3_TEST.komplekty.set_indian[6] = {bonus:{attributes:{flexibility:16}, skills:{hide:8, swim:8, pitfall:8, animal:8, shot:8}}, speed:(1 / 1.75), raboty:[]};
    PK_S3_TEST.komplekty.set_indian[6].raboty[51]=30;PK_S3_TEST.komplekty.set_indian[6].raboty[52]=40;PK_S3_TEST.komplekty.set_indian[6].raboty[58]=50;PK_S3_TEST.komplekty.set_indian[6].raboty[66]=60;PK_S3_TEST.komplekty.set_indian[6].raboty[114]=70;
    PK_S3_TEST.komplekty.set_indian[7] = {bonus:{attributes:{flexibility:21}, skills:{tough:8, hide:8, swim:8, pitfall:8, animal:8, shot:8}}, speed:(1 / 1.9), raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.set_indian[7].raboty[i]=25};PK_S3_TEST.komplekty.set_indian[7].raboty[PK_S3_TEST.raboty.build]=25;
    PK_S3_TEST.komplekty.set_indian[7].raboty[51]+=30;PK_S3_TEST.komplekty.set_indian[7].raboty[52]+=40;PK_S3_TEST.komplekty.set_indian[7].raboty[58]+=50;PK_S3_TEST.komplekty.set_indian[7].raboty[66]+=60;PK_S3_TEST.komplekty.set_indian[7].raboty[114]+=70;
    PK_S3_TEST.komplekty.set_indian[8] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_indian[9] = {bonus:{attributes:{}, skills:{}}, raboty:[]};

    PK_S3_TEST.komplekty.set_mexican=[];
    PK_S3_TEST.komplekty.set_mexican[1] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_mexican[2] = {bonus:{attributes:{strength:1}, skills:{}}, speed:(1 / 1.12), raboty:[]};
    PK_S3_TEST.komplekty.set_mexican[3] = {bonus:{attributes:{strength:2}, skills:{}}, speed:(1 / 1.24), raboty:[]};
    PK_S3_TEST.komplekty.set_mexican[3].raboty[86]=60;
    PK_S3_TEST.komplekty.set_mexican[4] = {bonus:{attributes:{strength:4}, skills:{}}, speed:(1 / 1.36), raboty:[]};
    PK_S3_TEST.komplekty.set_mexican[4].raboty[86]=60;PK_S3_TEST.komplekty.set_mexican[4].raboty[67]=70;
    PK_S3_TEST.komplekty.set_mexican[5] = {bonus:{attributes:{strength:6}, skills:{}}, speed:(1 / 1.48), raboty:[]};
    PK_S3_TEST.komplekty.set_mexican[5].raboty[86]=60;PK_S3_TEST.komplekty.set_mexican[5].raboty[67]=70;PK_S3_TEST.komplekty.set_mexican[5].raboty[83]=80;
    PK_S3_TEST.komplekty.set_mexican[6] = {bonus:{attributes:{strength:9}, skills:{}}, speed:(1 / 1.6), raboty:[]};
    PK_S3_TEST.komplekty.set_mexican[6].raboty[86]=60;PK_S3_TEST.komplekty.set_mexican[6].raboty[67]=70;PK_S3_TEST.komplekty.set_mexican[6].raboty[83]=80;PK_S3_TEST.komplekty.set_mexican[6].raboty[50]=90;
    PK_S3_TEST.komplekty.set_mexican[7] = {bonus:{attributes:{strength:12}, skills:{}}, speed:(1 / 1.72), raboty:[]};
    PK_S3_TEST.komplekty.set_mexican[7].raboty[86]=60;PK_S3_TEST.komplekty.set_mexican[7].raboty[67]=70;PK_S3_TEST.komplekty.set_mexican[7].raboty[83]=80;PK_S3_TEST.komplekty.set_mexican[7].raboty[50]=90;PK_S3_TEST.komplekty.set_mexican[7].raboty[115]=100;
    PK_S3_TEST.komplekty.set_mexican[8] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_mexican[9] = {bonus:{attributes:{}, skills:{}}, raboty:[]};

    PK_S3_TEST.komplekty.set_quackery=[];
    PK_S3_TEST.komplekty.set_quackery[1] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_quackery[2] = {bonus:{attributes:{dexterity:1}, skills:{endurance:5, trade:5}}, raboty:[]};
    PK_S3_TEST.komplekty.set_quackery[2].raboty[79]=30;
    PK_S3_TEST.komplekty.set_quackery[3] = {bonus:{attributes:{dexterity:2}, skills:{endurance:10, trade:10}}, raboty:[]};
    PK_S3_TEST.komplekty.set_quackery[3].raboty[79]=60;
    PK_S3_TEST.komplekty.set_quackery[4] = {bonus:{attributes:{dexterity:4}, skills:{endurance:15, trade:15}}, raboty:[]};
    PK_S3_TEST.komplekty.set_quackery[4].raboty[79]=90;
    PK_S3_TEST.komplekty.set_quackery[5] = {bonus:{attributes:{dexterity:6}, skills:{endurance:20, trade:20}}, raboty:[]};
    PK_S3_TEST.komplekty.set_quackery[5].raboty[79]=120;
    PK_S3_TEST.komplekty.set_quackery[6] = {bonus:{attributes:{dexterity:9}, skills:{endurance:20, trade:20, reflex:18, tough:18, aim:18, shot:18}}, raboty:[]};
    PK_S3_TEST.komplekty.set_quackery[6].raboty[79]=120;
    PK_S3_TEST.komplekty.set_quackery[7] = {bonus:{attributes:{dexterity:12}, skills:{endurance:20, trade:20, reflex:18, tough:18, aim:18, shot:18, tactic:18, appearance:18, dodge:18}}, raboty:[]};
    PK_S3_TEST.komplekty.set_quackery[7].raboty[79]=120;PK_S3_TEST.komplekty.set_quackery[7].raboty[113]=50;
    PK_S3_TEST.komplekty.set_quackery[8] = {bonus:{attributes:{dexterity:16}, skills:{endurance:20, trade:20, reflex:18, tough:18, aim:18, shot:18, tactic:18, appearance:18, dodge:18}}, speed:0.6667, raboty:[]};
    PK_S3_TEST.komplekty.set_quackery[8].raboty[79]=120;PK_S3_TEST.komplekty.set_quackery[8].raboty[113]=100;
    PK_S3_TEST.komplekty.set_quackery[9] = {bonus:{attributes:{}, skills:{}}, raboty:[]};

    PK_S3_TEST.komplekty.set_pilgrim_male=[];
    PK_S3_TEST.komplekty.set_pilgrim_male[1] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_male[2] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_male[2].raboty[PK_S3_TEST.raboty.build]=5;
    PK_S3_TEST.komplekty.set_pilgrim_male[3] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_male[3].raboty[PK_S3_TEST.raboty.build]=15;
    PK_S3_TEST.komplekty.set_pilgrim_male[4] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_male[4].raboty[PK_S3_TEST.raboty.build]=30;
    PK_S3_TEST.komplekty.set_pilgrim_male[5] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_male[5].raboty[PK_S3_TEST.raboty.build]=50;PK_S3_TEST.komplekty.set_pilgrim_male[5].raboty[62]=150;
    PK_S3_TEST.komplekty.set_pilgrim_male[6] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_male[6].raboty[PK_S3_TEST.raboty.build]=75;PK_S3_TEST.komplekty.set_pilgrim_male[6].raboty[62]=150;PK_S3_TEST.komplekty.set_pilgrim_male[6].raboty[119]=175;
    PK_S3_TEST.komplekty.set_pilgrim_male[7] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_male[8] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_male[9] = {bonus:{attributes:{}, skills:{}}, raboty:[]};

    PK_S3_TEST.komplekty.set_pilgrim_female=[];
    PK_S3_TEST.komplekty.set_pilgrim_female[1] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_female[2] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_female[2].raboty[PK_S3_TEST.raboty.build]=5;
    PK_S3_TEST.komplekty.set_pilgrim_female[3] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_female[3].raboty[PK_S3_TEST.raboty.build]=15;
    PK_S3_TEST.komplekty.set_pilgrim_female[4] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_female[4].raboty[PK_S3_TEST.raboty.build]=30;
    PK_S3_TEST.komplekty.set_pilgrim_female[5] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_female[5].raboty[PK_S3_TEST.raboty.build]=50;PK_S3_TEST.komplekty.set_pilgrim_female[5].raboty[62]=150;
    PK_S3_TEST.komplekty.set_pilgrim_female[6] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_female[6].raboty[PK_S3_TEST.raboty.build]=75;PK_S3_TEST.komplekty.set_pilgrim_female[6].raboty[62]=150;PK_S3_TEST.komplekty.set_pilgrim_female[6].raboty[119]=175;
    PK_S3_TEST.komplekty.set_pilgrim_female[7] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_female[8] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_pilgrim_female[9] = {bonus:{attributes:{}, skills:{}}, raboty:[]};

    PK_S3_TEST.komplekty.set_gentleman=[];
    PK_S3_TEST.komplekty.set_gentleman[1] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_gentleman[2] = {bonus:{attributes:{charisma:1}, skills:{appearance:8}}, raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.set_gentleman[2].raboty[i]=5};PK_S3_TEST.komplekty.set_gentleman[2].raboty[PK_S3_TEST.raboty.build]=5;
    PK_S3_TEST.komplekty.set_gentleman[3] = {bonus:{attributes:{charisma:3}, skills:{appearance:8, leadership:8}}, raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.set_gentleman[3].raboty[i]=15};PK_S3_TEST.komplekty.set_gentleman[3].raboty[PK_S3_TEST.raboty.build]=15;
    PK_S3_TEST.komplekty.set_gentleman[4] = {bonus:{attributes:{charisma:6}, skills:{appearance:8, leadership:8, trade:8}}, raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.set_gentleman[4].raboty[i]=30};PK_S3_TEST.komplekty.set_gentleman[4].raboty[PK_S3_TEST.raboty.build]=30;
    PK_S3_TEST.komplekty.set_gentleman[5] = {bonus:{attributes:{charisma:10}, skills:{appearance:16, leadership:8, trade:8}}, raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.set_gentleman[5].raboty[i]=50};PK_S3_TEST.komplekty.set_gentleman[5].raboty[PK_S3_TEST.raboty.build]=50;
    PK_S3_TEST.komplekty.set_gentleman[6] = {bonus:{attributes:{charisma:15}, skills:{appearance:25, leadership:8, trade:8}}, raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.set_gentleman[6].raboty[i]=75};PK_S3_TEST.komplekty.set_gentleman[6].raboty[PK_S3_TEST.raboty.build]=75;
    PK_S3_TEST.komplekty.set_gentleman[7] = {bonus:{attributes:{charisma:20}, skills:{appearance:25, leadership:8, trade:20}}, raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.set_gentleman[7].raboty[i]=100};PK_S3_TEST.komplekty.set_gentleman[7].raboty[PK_S3_TEST.raboty.build]=100;
    PK_S3_TEST.komplekty.set_gentleman[8] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_gentleman[9] = {bonus:{attributes:{}, skills:{}}, raboty:[]};

    PK_S3_TEST.komplekty.set_dancer=[];
    PK_S3_TEST.komplekty.set_dancer[1] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_dancer[2] = {bonus:{attributes:{charisma:2}, skills:{appearance:10}}, raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.set_dancer[2].raboty[i]=5};PK_S3_TEST.komplekty.set_dancer[2].raboty[PK_S3_TEST.raboty.build]=5;
    PK_S3_TEST.komplekty.set_dancer[3] = {bonus:{attributes:{charisma:5}, skills:{appearance:10, animal:10}}, raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.set_dancer[3].raboty[i]=15};PK_S3_TEST.komplekty.set_dancer[3].raboty[PK_S3_TEST.raboty.build]=15;
    PK_S3_TEST.komplekty.set_dancer[4] = {bonus:{attributes:{charisma:9}, skills:{appearance:10, animal:10, finger_dexterity:12}}, raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.set_dancer[4].raboty[i]=30};PK_S3_TEST.komplekty.set_dancer[4].raboty[PK_S3_TEST.raboty.build]=30;
    PK_S3_TEST.komplekty.set_dancer[5] = {bonus:{attributes:{charisma:11},skills:{endurance :6, appearance:16, animal:10, finger_dexterity:12}}, raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.set_dancer[5].raboty[i]=50};PK_S3_TEST.komplekty.set_dancer[5].raboty[PK_S3_TEST.raboty.build]=50;
    PK_S3_TEST.komplekty.set_dancer[6] = {bonus:{attributes:{charisma:15},skills:{endurance :6, appearance:25, animal:10, finger_dexterity:12}}, raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.set_dancer[6].raboty[i]=75};PK_S3_TEST.komplekty.set_dancer[6].raboty[PK_S3_TEST.raboty.build]=75;
    PK_S3_TEST.komplekty.set_dancer[7] = {bonus:{attributes:{charisma:20},skills:{endurance :18, appearance:25, animal:10, finger_dexterity:12}}, raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.set_dancer[7].raboty[i]=100};PK_S3_TEST.komplekty.set_dancer[7].raboty[PK_S3_TEST.raboty.build]=100;
    PK_S3_TEST.komplekty.set_dancer[8] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_dancer[9] = {bonus:{attributes:{}, skills:{}}, raboty:[]};

    PK_S3_TEST.komplekty.fireworker_set=[];
    PK_S3_TEST.komplekty.fireworker_set[1] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.fireworker_set[1].raboty[90]=15;
    PK_S3_TEST.komplekty.fireworker_set[2] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.fireworker_set[3] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.fireworker_set[4] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.fireworker_set[5] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.fireworker_set[6] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.fireworker_set[7] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.fireworker_set[8] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.fireworker_set[9] = {bonus:{attributes:{}, skills:{}}, raboty:[]};

    PK_S3_TEST.komplekty.gold_set=[];
    PK_S3_TEST.komplekty.gold_set[1] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.gold_set[2] = {bonus:{attributes:{}, skills:{health:10}}, speed:(1 / 1.2), raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.gold_set[2].raboty[i]=25};PK_S3_TEST.komplekty.gold_set[2].raboty[PK_S3_TEST.raboty.build]=25;
    PK_S3_TEST.komplekty.gold_set[3] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.gold_set[4] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.gold_set[5] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.gold_set[6] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.gold_set[7] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.gold_set[8] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.gold_set[9] = {bonus:{attributes:{}, skills:{}}, raboty:[]};

    PK_S3_TEST.komplekty.greenhorn_set=[];
    PK_S3_TEST.komplekty.greenhorn_set[1] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.greenhorn_set[2] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.greenhorn_set[2].raboty[6]=10;
    PK_S3_TEST.komplekty.greenhorn_set[3] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.greenhorn_set[3].raboty[6]=10;PK_S3_TEST.komplekty.greenhorn_set[3].raboty[27]=20;
    PK_S3_TEST.komplekty.greenhorn_set[4] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.greenhorn_set[4].raboty[6]=10;PK_S3_TEST.komplekty.greenhorn_set[4].raboty[27]=20;PK_S3_TEST.komplekty.greenhorn_set[4].raboty[17]=20;
    PK_S3_TEST.komplekty.greenhorn_set[5] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.greenhorn_set[5].raboty[6]=10;PK_S3_TEST.komplekty.greenhorn_set[5].raboty[27]=20;PK_S3_TEST.komplekty.greenhorn_set[5].raboty[17]=20;PK_S3_TEST.komplekty.greenhorn_set[5].raboty[20]=20;
    PK_S3_TEST.komplekty.greenhorn_set[6] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.greenhorn_set[6].raboty[6]=10;PK_S3_TEST.komplekty.greenhorn_set[6].raboty[27]=20;PK_S3_TEST.komplekty.greenhorn_set[6].raboty[17]=20;PK_S3_TEST.komplekty.greenhorn_set[6].raboty[20]=20;PK_S3_TEST.komplekty.greenhorn_set[6].raboty[22]=20;
    PK_S3_TEST.komplekty.greenhorn_set[7] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.greenhorn_set[7].raboty[i]=5};PK_S3_TEST.komplekty.greenhorn_set[7].raboty[PK_S3_TEST.raboty.build]=5;
    PK_S3_TEST.komplekty.greenhorn_set[7].raboty[6]+=10;PK_S3_TEST.komplekty.greenhorn_set[7].raboty[27]+=20;PK_S3_TEST.komplekty.greenhorn_set[7].raboty[17]+=20;PK_S3_TEST.komplekty.greenhorn_set[7].raboty[20]+=20;PK_S3_TEST.komplekty.greenhorn_set[7].raboty[22]+=20;
    PK_S3_TEST.komplekty.greenhorn_set[8] = {bonus:{attributes:{strength:1, charisma:1}, skills:{}}, speed:(1 / 1.2), raboty:[]};
    for (var i=1;i<PK_S3_TEST.raboty.max;++i) {PK_S3_TEST.komplekty.greenhorn_set[8].raboty[i]=15};PK_S3_TEST.komplekty.greenhorn_set[8].raboty[PK_S3_TEST.raboty.build]=15;
    PK_S3_TEST.komplekty.greenhorn_set[8].raboty[6]+=10;PK_S3_TEST.komplekty.greenhorn_set[8].raboty[27]+=20;PK_S3_TEST.komplekty.greenhorn_set[8].raboty[17]+=20;PK_S3_TEST.komplekty.greenhorn_set[8].raboty[20]+=20;PK_S3_TEST.komplekty.greenhorn_set[8].raboty[22]+=20;
    PK_S3_TEST.komplekty.greenhorn_set[9] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
 
    PK_S3_TEST.komplekty.set_sleeper = [];  
    PK_S3_TEST.komplekty.set_sleeper[1] = {regeneration: 1.0, bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_sleeper[2] = {regeneration: 1.06, bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_sleeper[3] = {regeneration: 1.08, bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_sleeper[4] = {regeneration: 1.12, bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_sleeper[5] = {regeneration: 1.18, bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_sleeper[6] = {regeneration: 1.25, bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_sleeper[7] = {regeneration: 0, bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_sleeper[8] = {regeneration: 0, bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.set_sleeper[9] = {regeneration: 0, bonus:{attributes:{}, skills:{}}, raboty:[]};
    
    PK_S3_TEST.komplekty.collector_set = [];  
    PK_S3_TEST.komplekty.collector_set[1] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.collector_set[2] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.collector_set[3] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.collector_set[4] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.collector_set[5] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.collector_set[6] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.collector_set[7] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.collector_set[8] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.collector_set[9] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    
    PK_S3_TEST.komplekty.season_set = [];  
    PK_S3_TEST.komplekty.season_set[1] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.season_set[2] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.season_set[3] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.season_set[4] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.season_set[5] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.season_set[6] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.season_set[7] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.season_set[8] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    PK_S3_TEST.komplekty.season_set[9] = {bonus:{attributes:{}, skills:{}}, raboty:[]};
    
    PK_S3_TEST.my_name_is();
/*    
    var al='';
    var it = [];
    var hou = 4 * 6;
    for (var i = 0; i < PK_S3_TEST.raboty.max; ++i){
	if (!PK_S3_TEST.raboty[i]) continue;
	for (j in PK_S3_TEST.raboty[i].resultaty.produkty){
	    if (j==999) continue;
	    var val = PK_S3_TEST.raboty[i].resultaty.produkty[j] * hou / 100;
	    if (!it[j] || (it[j].value<val)){
		it[j] = {value:val, name:PK_S3_TEST.items[j].name};
	    }
	}
    }
    
    for (var i = 0; i < it.length; ++i){
	if (!it[i]) continue;
	al += it[i].name += '\t' + it[i].value + '\n';
    }
    alert (al);
 */

    PK_S3_TEST.setJSHTML = AjaxWindow.setJSHTML;
    AjaxWindow.setJSHTML = function(div,content) {
	PK_S3_TEST.setJSHTML(div,content);
	if (div&&(div.id.indexOf('window_job')!=-1)){
	    var tmp = document.createElement('div');
	    tmp.innerHTML = content;
	    var h2 = tmp.getElementsByTagName('h2')[0];
	    var name = h2.textContent;
	    var jd = div.getElementsByClassName('jobDetails');
	    if (jd) jd = jd[0];
	    if (!jd) return;
	    var divb = new Element ('div', {'style':'text-align:center; margin: -15px 0px 0px;'});
	    var span = document.createElement('span');
	    var html = '<a class="button_wrap button" style="padding: 0px 5px;" href="#" onClick="PK_S3_TEST.equip_motivation(\''+name+'\')">' + '<span class="button_left"></span><span class="button_middle">Одеться</span><span class="button_right"></span></a>';
	    span.innerHTML = html;
	    for (var i = 0; i < PK_S3_TEST.cookies.save.length; ++i){
		if (PK_S3_TEST.cookies.save[i].name == name){
		    divb.appendChild(span);
		    break;
		}
	    }
	    var span = document.createElement('span');
	    var html = '<a class="button_wrap button" style="padding: 0px 5px;"  href="#" onClick="PK_S3_TEST.four_init(\''+name+'\')">' + '<span class="button_left"></span><span class="button_middle">Расчёт (beta)</span><span class="button_right"></span></a>';
	    span.innerHTML = html;
	    divb.appendChild(span);
	    jd.appendChild(divb);
	}
    }
    
     
    if (Wear && Wear.open){
	PK_S3_TEST.wear_open = Wear.open;
	Wear.open = function (){
	    PK_S3_TEST.wear_open();
	    setTimeout(PK_S3_TEST.spam_bagazh,PK_S3_TEST.odevalo4ka.wait_inventory);
	}
    }

};

PK_S3_TEST.fort_bonus = function (value){
    return isNaN(value) ? .5 : .5 + Math.pow(value, .4);
}

PK_S3_TEST.apply_fort_bonus_lead = function (bonus){
    var value = bonus - .5;
    value = Math.pow(value, 2.5);
    value *= PK_S3_TEST.bonus.leader;
    return PK_S3_TEST.fort_bonus(value);
}

PK_S3_TEST.qsort = function(arr, li, ri, key){
    if ((li+1)>=ri) return;
    var tmp;
    if (ri-li<15){
	for (var ii=li+1;ii<ri;++ii){
	    var tmp = arr[ii];
	    jj=ii-1;
	    while((jj>=li)&&(arr[jj][key]>tmp[key])){
		arr[jj+1]=arr[jj];
		--jj;
	    }
	    arr[jj+1]=tmp;
	}
    }
    else{
	var mi=parseInt((li+ri)/2,10);
	if (arr[li][key]>arr[ri-1][key]){
	    tmp=arr[li];
	    arr[li]=arr[ri-1];
	    arr[ri-1]=tmp;
	}
	if (arr[li][key]>arr[mi][key]){
	    tmp=arr[li];
	    arr[li]=arr[mi];
	    arr[mi]=tmp;
	}
	if (arr[mi][key]>arr[ri-1][key]){
	    tmp=arr[mi];
	    arr[mi]=arr[ri-1];
	    arr[ri-1]=tmp;
	}
	var em=arr[mi][key];
	var cl=li;
	var cr=ri-1;
	while(cl<cr){
	    while((cl<ri)&&(arr[cl][key]<=em)) ++cl;
	    while((cr>li)&&(arr[cr][key]>=em)) --cr;
	    if (cl<cr){
		tmp=arr[cl];
		arr[cl]=arr[cr];
		arr[cr]=tmp;
	    }
	}
	if (cr < ri -1){
	    PK_S3_TEST.qsort(arr,li,cr+1,key);
	}
	PK_S3_TEST.qsort(arr,cl,ri,key);
    }
};

PK_S3_TEST.bsort = function (arr, key){
    var left = 0;
    var right = arr.length - 1;
    var last = 0;
    while (left < right){
	for (var i = left; i < right; ++i){
	    if (arr[i][key] > arr[i+1][key]){
		var tmp = arr[i];
		arr[i] = arr[i+1];
		arr[i+1]=tmp;
		last = i;
	    }
	}
	right = last;
	for (var i = right; i > left; --i){
	    if (arr[i][key] < arr[i-1][key]){
		var tmp = arr[i];
		arr[i] = arr[i-1];
		arr[i-1]=tmp;
		last = i;
	    }
	}
	left = last;
    }
}

PK_S3_TEST.input_select_rdf = function(){
    var sl;
    var i1 = j1 = 4;
    var str_id = 'pk_s3_select_rab'
    for (var i = 0; i < 4; ++i){
	for (var j = 0; j < 3; ++j){
	    sl = document.getElementById(str_id+'_'+'rdfo'[i]+'onv'[j]);
	    if (sl.checked){
		i1 = i; j1 = j;
		break;
	    }
	}
    }
    sl = document.getElementById(str_id);
    sl.innerHTML = '';
    var ind_beg;
    var ind_end
    if (i1 == 0){
	ind_beg = 1; ind_end = PK_S3_TEST.raboty.fort_min;
    }
    else if (i1 == 1){
	ind_beg = PK_S3_TEST.raboty.duel_min; ind_end = PK_S3_TEST.raboty.duel_max;
    }
    else if (i1 == 2){
	ind_beg = PK_S3_TEST.raboty.fort_min; ind_end = PK_S3_TEST.raboty.fort_max;
    }
    else{
	ind_beg = ind_end = 0; j1 = 0;
    }
    if (j1 == 2) {
	ind_beg = ind_end = 0;
    }
    var srab = [];
    srab[0]={id:0, name:'Выберите работу, дуэль, форт'};
    var opt = document.createElement('option');
    opt.value = 0;
    var txt = '';
    if ((i1 == 3)){
	txt = 'Выбран спец. перебор';
    }
    else if (j1 == 2){
	txt = 'Выбраны все ';
	if (i1 == 0){
	    txt += 'работы';
	}
	else if (i1 == 1){
	    txt += 'дуэльные типажи';
	}
	else if (i1 == 2){
	    txt += 'фортовые варианты'
	}
    }
    else if (i1 == 4){
	txt = 'Выбран конструктор навыков';
    }
    else{
	txt = 'Выберите ';
	if (i1 == 0) txt += 'работу';
	if (i1 == 1) txt += ' дуэльный типаж';
	if (i1 == 2) txt += ' экипировку бойца';
    }
    opt.textContent = txt;
    opt.disabled = true;
    opt.selected = true;
    sl.appendChild(opt);

    if ((j1 == 0)||(j1 == 2)||(i1 == 3)){
	sl.size = 1;
	sl.multiple = null;
	sl.style.height = '25px';
    }
    else{
	sl.size = 5;
	sl.multiple = true;
	sl.style.height = '125px';
    }
    
    j = 1;
    for (var i = ind_beg; i < ind_end; ++i){
	if (PK_S3_TEST.raboty[i]&&(!PK_S3_TEST.raboty[i].except)){
	    srab[j]={id:i, name:PK_S3_TEST.raboty[i].rus_name};
	    ++j;
	}
    }
    PK_S3_TEST.qsort(srab, 1, j, 'name');
    for (var i = 1; i < j; ++i){
	var opt = document.createElement('option');
	opt.value = srab[i].id;
	opt.textContent = srab[i].name;
	sl.appendChild(opt);
    }
 
    var elem = document.getElementById('pk_s3_select_konstr_en');
    if (elem){
	for (var i=0;i<20;++i){
	    var el = document.getElementById('pk_s3_select_konstr_s'+i);
	    if (elem.checked) {el.disabled=false}
	    else {el.value = null;el.disabled=true;}
	}
	for (var i=0;i<4;++i){
	    var el = document.getElementById('pk_s3_select_konstr_a'+i);
	    if (elem.checked) {el.disabled=false}
	    else {el.value = null;el.disabled=true;}
	}
    }
}

PK_S3_TEST.running_bar = function(){
    var progress = $('pk_s3_progress_bar');
    if (progress){
	progress.setAttribute ('value', PK_S3_TEST.progress.percent);
	if (++PK_S3_TEST.progress.percent > 100) PK_S3_TEST.progress.percent = 0;
    }
    else{
	clearInterval(PK_S3_TEST.progress.id);
    }
}

PK_S3_TEST.minimize_window_settings = function(){
    AjaxWindow.toggleSize('pereodevalka_setting');
    setTimeout(PK_S3_TEST.minimize_window_settings2, 100);
}

PK_S3_TEST.minimize_window_settings2 = function(){
    var bar = $('window_bar_pereodevalka_setting');
    if (!bar){
        setTimeout(PK_S3_TEST.minimize_window_settings2, 100);
	return;
    }
    bar.firstChild.firstChild.nextSibling.innerHTML='Переодевалка (beta)';
}

PK_S3_TEST.show_window_settings = function(init){
    var name = 'pereodevalka_setting';
    //var group = 'inventory';
    var group = 'inventory_new';
    var window_div = $('window_' + name);
    
    if (!window_div){
	window_div = new Element('div',{'id':'window_' + name,'class':'window css_inventory'});
	AjaxWindow.windows[name] = window_div;
	window_div.injectInside('windows');
	window_div.centerLeft();
    }
    else{
	AjaxWindow.maximize (name);
	if (init){
	    window_div.innerHTML = '';
	}
	else{
	    return;
	}
    }
    AjaxWindow.bringToTop(window_div);

    var xhtml = '';
    xhtml += '<div class="window_borders">';
    xhtml += '  <h2 id="window_' + name + '_title" class="window_title"> </h2>';
    xhtml += '	<a class="window_refresh" href="javascript:PK_S3_TEST.show_window_settings(true);void(0)" title="<b>Обновить окно</b>"></a>'
    xhtml += '  <a href="javascript:AjaxWindow.closeAll();" class="window_closeall" title="<b>Закрыть все окна</b>"></a>';
    //xhtml += '  <a href="javascript:AjaxWindow.toggleSize(\'' + name + '\', \'' + group + '\');" class="window_minimize" title="<b>Свернуть окно</b>"></a>';
    xhtml += '  <a href="javascript:PK_S3_TEST.minimize_window_settings();" class="window_minimize" title="<b>Свернуть окно</b>"></a>';
    xhtml += '  <a href="javascript:AjaxWindow.close(\'' + name + '\');" class="window_close" title="<b>Закрыть окно</b>"></a>';
    xhtml += '  <div id="window_' + name + '_content" class="window_content">';
    xhtml += '    	<table class="shadow_table" style="margin-left:6px; width:100%; height:390px">';
    xhtml += '    		<tr>';
    xhtml += '    			<td class="edge_shadow_top_left"></td>';
    xhtml += '    			<td class="border_shadow_top"></td>';
    xhtml += '    			<td class="edge_shadow_top_right"></td>';
    xhtml += '    		</tr>';
    xhtml += '    		<tr>';
    xhtml += '    			<td class="border_shadow_left"></td>';
    xhtml += '    			<td class="shadow_content">';
    xhtml += '    				<div style="overflow:none; width: 675px; height:390px; position: relative;" id="pk_s3_settings">';
    xhtml += '    				</div>';
    xhtml += '    			</td>';
    xhtml += '    			<td class="border_shadow_right"></td>';
    xhtml += '    		</tr>';
    xhtml += '    		<tr>';
    xhtml += '    			<td class="edge_shadow_bottom_left"></td>';
    xhtml += '    			<td class="border_shadow_bottom"></td>';
    xhtml += '    			<td class="edge_shadow_bottom_right"></td>';
    xhtml += '	 		</tr>';
    xhtml += '	 	</table>';
    xhtml += '	</div>';
    xhtml += '</div>';
    window_div.setHTML(xhtml);
    
    //перезагрузка, иногда не срабатывало в инит()
    PK_S3_TEST.bonus.speed = (Character.characterClass != 'duelist') ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.2 : 1.1;
    PK_S3_TEST.bonus.money = (PremiumBoni.hasBonus('money')) ? 1.5 : 1.0;
    PK_S3_TEST.bonus.drop = (Character.characterClass != 'adventurer') ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.2 : 1.1;
    PK_S3_TEST.bonus.life = (Character.characterClass != 'soldier') ? 10 : (PremiumBoni.hasBonus('character')) ? 20 : 15;
    PK_S3_TEST.bonus.exp = (Character.characterClass) != 'worker' ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.1 : 1.05;
    PK_S3_TEST.bonus.build = (Character.characterClass) != 'worker' ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.1 : 1.05;
    PK_S3_TEST.bonus.weapon = (Character.characterClass != 'soldier') ? 0 : (PremiumBoni.hasBonus('character')) ? 6 : 3;
    PK_S3_TEST.bonus.leader = (Character.characterClass != 'soldier') ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.5 : 1.25;

	
    var window_title_div = $('window_' + name + '_title');
    window_div.makeDraggable({handle:window_title_div});
    window_title_div.addEvent('dblclick',function(){
				window_div.centerLeft();
				window_div.setStyle('top',133);
				});
    window_div.addEvent('mousedown',AjaxWindow.bringToTop.bind(AjaxWindow,[window_div]));
    window_title_div.addEvent('mousedown',AjaxWindow.bringToTop.bind(AjaxWindow,[window_div]));

    var div_left = new Element('div', {'style':'margin: 0; height: 390px; width: 240px; float: left;'});
    var div_sel = new Element('div', {'style':'height: 140px; width: 240px;'});

    var spis = new Element('select',{'id':'pk_s3_select_rab','size':'1','style':'background-color:#e8dab3; font-size: 12px; margin: 5px 1px 5px 5px; width:235px; height:25px'});
    spis.multiple = null;
    div_sel.appendChild(spis);
    div_left.appendChild(div_sel);
    
    var div_zakup = new Element('div', {'style':'height: 175px; width: 240px; border-bottom: 1px solid #321; border-right: 1px solid #321;'});
    var div_zakup_zag = new Element ('div', {'style':'clear: both; font-weight:bold; text-align:center;', 'title':'Поищем из всего, что встречается на просторах Запада!'});
    div_zakup_zag.textContent = 'Отсутвующие (пока) вещи:';
    div_zakup.appendChild(div_zakup_zag);
    
    var div = new Element ('div', {'title':'Верхний лимит суммарной стоимости закупаемых вещей.'});
    var img = new Element('span', {'style':'width:23px; height:23px; background-image:url(http://www.the-west.ru/images/job/danger.png); float:left; margin: 2px 5px 2px 5px;', 'title':'Внимание! может сильно замедлить поиск.'});
    div.appendChild(img);
    var inp = new Element ('input', {'id':'pk_s3_select_baks_n', 'type':'text', 'size':'6', 'value':'0','style':'background-color:#e8dab3; margin: 2px 5px 2px 0px;'});
    inp.addEventListener('change',function () {this.value = parseInt(this.value); if (isNaN(this.value)) this.value=0; if (this.value < 0) this.value=0;}, false);
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Есть $ на магазины';
    div.appendChild(span);
    div_zakup.appendChild(div);

    var div = new Element ('div', {'title':'Закупка из магазинов на любую сумму.'});
    var inp = new Element ('input', {'id':'pk_s3_select_baks_inf', 'type':'checkbox', 'style':'margin: 3px 5px 3px 0px;'});
    inp.addEventListener('change', function () {var bks = $('pk_s3_select_baks_n'); if (this.checked) { bks.value = 0; bks.disabled=true;} else {bks.disabled=false;} }, false);
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Покупаем любые у торговцев';
    div.appendChild(span);
    div_zakup.appendChild(div);

    var div = new Element ('div', {'title':'Закупка всех немагазинных с аукциона по номинальной стоимости.'});
    var inp = new Element ('input', {'id':'pk_s3_select_auction', 'type':'checkbox', 'style':'margin: 3px 5px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Аукционные, кроме магазинных';
    div.appendChild(span);
    div_zakup.appendChild(div);

/*
    var div = new Element ('div', {'title':'Подбор любого немагазинного дропа. Стоимость считается нулевой.'});
    var inp = new Element ('input', {'id':'pk_s3_select_drop', 'type':'checkbox', 'style':'margin: 3px 5px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Любой дроп, кроме магазинных';
    div.appendChild(span);
    div_zakup.appendChild(div);
*/
    var div = new Element ('div', {'title':'Уникальные квестовые вещи. Стоимость считается нулевой.'});
    var inp = new Element ('input', {'id':'pk_s3_select_unique', 'type':'checkbox', 'style':'margin: 3px 5px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Уникальные вещи';
    div.appendChild(span);
    div_zakup.appendChild(div);

    var div = new Element ('div', {'title':'Приоритет праздничному набору.'});
    var inp = new Element ('input', {'id':'pk_s3_select_season', 'type':'checkbox', 'style':'margin: 3px 5px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Приоритет на удачу';
    div.appendChild(span);
    div_zakup.appendChild(div);

//    div_left.appendChild(div_zakup);    

    var div = new Element('div', {'title':'Подсчитываем для персонажа с указанным уровнем.'});
    var inp = new Element ('input', {'id':'pk_s3_select_level',  'type':'text', 'value':Character.level?Character.level:0, 'size':'3', 'style':'background-color:#e8dab3; margin: 3px 5px; width: 30px;'});
    inp.addEventListener('change',function () {this.value = parseInt(this.value); if (isNaN(this.value)) this.value=1; if (this.value < 1) this.value=1;}, false);
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Подсчёт для уровня';
    div.appendChild(span);
    div_zakup.appendChild(div);
    div_left.appendChild(div_zakup);    

//    var div_slots_zag = new Element ('div', {'style':'float:right; clear: both; font-weight:bold; text-align:center;'});
//    div_slots_zag.textContent = 'Вещи из слотов экипировки:';
//    div_left.appendChild(div_slots_zag);
    
    var div = document.createElement('div');
    div.style.borderTop = '1px solid #321';
    div.style.borderRight = '1px solid #321';
    div.style.marginTop = '10px';
    div.style.clear = 'both';
    // <span id="submit_delete_reports"><a href="#" class="button_wrap button"><span class="button_left"></span><span class="button_middle">Удалить</span><span class="button_right"></span><span style="clear: both;"></span></a></span>
    var span = document.createElement('span');
    span.id = 'pk_s3_poehali';
    span.style.margin = '10px 5px';
    var text = 'Поехали (beta)';
    span.innerHTML = '<a href="#" class="button_wrap button"><span class="button_left"></span><span class="button_middle">'+text+'</span><span class="button_right"></span><span style="clear: both;"></span></a>';
    span.addEventListener('click',PK_S3_TEST.second_init, false);
    div.appendChild (span);
    var span = document.createElement('span');
    span.id = 'pk_s3_prosto_veshi';
    span.style.margin = '10px 5px';
    var text = 'null';
    span.innerHTML = '<a href="#" class="button_wrap button"><span class="button_left"></span><span class="button_middle">'+text+'</span><span class="button_right"></span><span style="clear: both;"></span></a>';
    span.addEventListener('click',PK_S3_TEST.second_init, false);
    div.appendChild (span);
    div_left.appendChild(div);
    
    var div = new Element('div', {'id':'pk_s3_sprogress'});
    var percent = new Element ('progress', {'id':'pk_s3_progress_bar', 'style':'margin: 5px; width:208px', 'max':100, 'value':1});
    div.appendChild(percent);
    div_left.appendChild(div);

    var div_top = new Element('div', {'style':'margin: 0; height: 390px; width:425px; float: left;'});
    var div_right = new Element('div',{'style':'clear:left; margin:0; padding:0, border:0'})

    var form_sel = document.createElement('form');
    form_sel.id = 'pk_s3_form_select';
    
    var div_sel_rab = new Element ('div', {'style':'height: 80px; width: 140px; float:left;  margin: 5px 0px;'});
    var div_sel_rab_zag = new Element ('div', {'style':'clear: both; font-weight:bold; text-align:center;'});
    div_sel_rab_zag.textContent = 'Работы:';
    div_sel_rab.appendChild(div_sel_rab_zag);

    var div = document.createElement('div');
    var inp = new Element ('input', {'id':'pk_s3_select_rab_ro', 'name':'pk_s3_raboty_radio', 'type':'radio', 'checked':'true', 'style':'margin: 2px 2px 2px 15px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Одна работа';
    div.appendChild(span);
    div_sel_rab.appendChild(div);
    
    var div = document.createElement('div');
    var inp = new Element ('input', {'id':'pk_s3_select_rab_rn', 'name':'pk_s3_raboty_radio','type':'radio', 'style':'margin: 2px 2px 2px 15px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Несколько работ';
    div.appendChild(span);
    div_sel_rab.appendChild(div);

    var div = document.createElement('div');
    var inp = new Element ('input', {'id':'pk_s3_select_rab_rv', 'name':'pk_s3_raboty_radio','type':'radio', 'style':'margin: 2px 2px 2px 15px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Все работы';
    div.appendChild(span);
    div_sel_rab.appendChild(div);

    form_sel.appendChild(div_sel_rab);

    var div_sel_duel = new Element ('div', {'style':'height: 80px; width: 140px;  margin: 5px 0px; float:left;'});
    var div_sel_duel_zag = new Element ('div', {'style':'clear: both; font-weight:bold; text-align:center;'});
    div_sel_duel_zag.textContent = 'Дуэли:';
    div_sel_duel.appendChild(div_sel_duel_zag);

    var div = document.createElement('div');
    var inp = new Element ('input', {'id':'pk_s3_select_rab_do', 'name':'pk_s3_raboty_radio', 'type':'radio', 'style':'margin: 2px 2px 2px 5px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Один типаж';
    div.appendChild(span);
    div_sel_duel.appendChild(div);
    
    var div = document.createElement('div');
    var inp = new Element ('input', {'id':'pk_s3_select_rab_dn', 'name':'pk_s3_raboty_radio', 'type':'radio', 'style':'margin: 2px 2px 2px 5px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Несколько типажей';
    div.appendChild(span);
    div_sel_duel.appendChild(div);
    
    var div = document.createElement('div');
    var inp = new Element ('input', {'id':'pk_s3_select_rab_dv', 'name':'pk_s3_raboty_radio', 'type':'radio', 'style':'margin: 2px 2px 2px 5px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Все типажи';
    div.appendChild(span);
    div_sel_duel.appendChild(div);

    
    form_sel.appendChild(div_sel_duel);

    var div_sel_fort = new Element ('div', {'style':'height: 80px; width: 140px; margin: 5px 0px; float:left;'});
    var div_sel_fort_zag = new Element ('div', {'style':'clear: both; font-weight:bold; text-align:center;'});
    div_sel_fort_zag.textContent = 'Форты:';
    div_sel_fort.appendChild(div_sel_fort_zag);
    
    var div = document.createElement('div');
    var inp = new Element ('input', {'id':'pk_s3_select_rab_fo', 'name':'pk_s3_raboty_radio', 'type':'radio', 'style':'margin: 2px 2px 2px 5px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Один вариант';
    div.appendChild(span);
    div_sel_fort.appendChild(div);
    
    var div = document.createElement('div');
    var inp = new Element ('input', {'id':'pk_s3_select_rab_fn', 'name':'pk_s3_raboty_radio', 'type':'radio', 'style':'margin: 2px 2px 2px 5px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Несколько';
    div.appendChild(span);
    div_sel_fort.appendChild(div);
    
    var div = document.createElement('div');
    var inp = new Element ('input', {'id':'pk_s3_select_rab_fv', 'name':'pk_s3_raboty_radio', 'type':'radio', 'style':'margin: 2px 2px 2px 5px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Все варианты';
    div.appendChild(span);
    div_sel_fort.appendChild(div);
    form_sel.appendChild(div_sel_fort);
    form_sel.appendChild(div_right);

    var div_sel_dop = new Element ('div', {'style':'height: 80px; width: 250px; padding: 1px 0px; float:left; border-bottom: 1px solid #321; border-right: 1px solid #321; border-left: 1px solid #321;'});

    var attribs = ['Сила (3+ навыка)', 'Ловкость (3+ навыка)', 'Сноровка (3+ навыка)', 'Шарм (3+ навыка)']
    var skills = ['Строительство', 'Удар', 'Стойкость', 'Выносливость', 'Здоровье', 'Верховая езда', 'Реакция', 'Увёртливость', 'Маскировка', 'Плаванье', 'Меткость', 'Стрельба', 'Установка ловушек', 'Проворство', 'Ремонт', 'Руководство', 'Тактика', 'Торговля', 'Обращение с животными', 'Блеф'];
    var skills_color = ['#ff9999', '#99ff99', '#9999ff', '#ffff99'];
    var div = new Element('div', {'title':'Все работы с выбранным навыком. Для аттрибутов - три навыка в работе.'});
    var inp = new Element ('input', {'id':'pk_s3_select_rab_oo', 'name':'pk_s3_raboty_radio', 'type':'radio', 'style':'margin: 5px 2px 0px 2px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Навык';
    div.appendChild(span);
    var sel = new Element ('select', {'id':'pk_s3_select_nav','size':'1','style':'background-color:#e8dab3; font-size: 12px; width:185px; height:22px'})
    sel.addEventListener('change', function() {var elem = document.getElementById('pk_s3_select_rab_oo');elem.checked = true;}, false);
    var opt = new Element ('option', {'value':'0', 'selected':'true', 'disabled':'true'});
    opt.textContent = 'Выберите навык (для работ)';
    sel.appendChild(opt);
    for (var j = 0; j < 4; ++j)
    {
	var style = 'background-color: ' + skills_color[j];
	var opt = new Element ('option', {'value':100+j, 'style':style})
	opt.style.fontWeight = 'bold';
	opt.textContent = attribs[j];
	sel.appendChild(opt);
	for (var i = 0; i < 5; ++i){
	    var opt = new Element ('option', {'value':(j*5+i), 'style':style});
	    opt.textContent = skills[j*5+i];
	    sel.appendChild(opt);
	}
    }

    div.appendChild(sel);

    div_sel_dop.appendChild(div);
    
    var div = new Element('div', {'title':'Все работы, на которых дают выбранный продукт (сюрпризы не реализованы).'});
    var inp = new Element ('input', {'id':'pk_s3_select_rab_on', 'name':'pk_s3_raboty_radio', 'type':'radio', 'style':'margin: 5px 2px 0px 2px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Прод.';
    div.appendChild(span);
    var sel = new Element ('select', {'id':'pk_s3_select_product','size':'1','style':'background-color:#e8dab3; font-size: 12px; width:185px; height:22px; margin: 0 0 0 3px'})
    sel.addEventListener('change', function() {var elem = document.getElementById('pk_s3_select_rab_on');elem.checked = true;}, false);
    var opt = new Element ('option', {'value':'0', 'selected':'true', 'disabled':'true'});
    opt.textContent = 'Выберите получаемый предмет';
    sel.appendChild(opt);
    var drop = [];
    for (var i = 1; i < PK_S3_TEST.raboty.max; ++i){
	if (!PK_S3_TEST.raboty[i]) continue;
	for (var j in PK_S3_TEST.raboty[i].resultaty.produkty){
	    if (isNaN(j)||(j==0)) continue;
	    drop.push({id:j, name:PK_S3_TEST.items[j].name});
	}
    }
    PK_S3_TEST.qsort(drop, 0, drop.length, 'name');
    for (var i = 1; i < drop.length; ++i){
	if (drop[i].id == drop[i-1].id){
	    drop.splice(i,1);
	    --i;
	}
    }
    for (var i = 0; i < drop.length; ++i){
	var opt = new Element ('option', {'value':drop[i].id})
	opt.textContent = drop[i].name;
	sel.appendChild(opt);
    }
    div.appendChild(sel);

    div_sel_dop.appendChild(div);
    
    var div = new Element('div', {'title':'Поиск вещей, которые не применяются ни на одной из рассчитываемых (не спрятанных) работах/дуэлях/фортах'});
    var inp = new Element ('input', {'id':'pk_s3_select_rab_ov', 'name':'pk_s3_raboty_radio', 'type':'radio', 'style':'margin: 5px 2px 0px 2px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Поиск ненужных вещей';
    div.appendChild(span);
    div_sel_dop.appendChild(div);
    

/*
    var div = document.createElement('div');
    var inp = new Element ('input', {'id':'pk_s3_select_rab_ov', 'name':'pk_s3_raboty_radio', 'disabled':'true', 'type':'radio', 'style':'margin: 2px 2px 2px 2px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = 'Квест';
    div.appendChild(span);
    var sel = new Element ('select', {'id':'pk_s3_select_quest', 'size':'1', 'disabled':'true', 'style':'background-color:#e8dab3; font-size: 12px; width:185px; height:25px; margin: 0 0 0 4px;'})
    sel.addEventListener('change', function() {var elem = document.getElementById('pk_s3_select_rab_ov');elem.checked = true;}, false);
    var opt = new Element ('option', {'value':'0', 'selected':'true', 'disabled':'true'});
    opt.textContent = 'Выберите задание';
    sel.appendChild(opt);
    var opt = new Element ('option', {'value':'1'});
    opt.textContent = 'Убить три мауса';
    sel.appendChild(opt);
    div.appendChild(sel);
    div_sel_dop.appendChild(div);
*/    
    
    form_sel.appendChild(div_sel_dop);

    var div_sel_hp = new Element ('div', {'style':'height: 80px; padding: 3px 0px; float:left; text-align:center; width:160px;'});
    var div = new Element('div', {title:'Будет найден <b>фортовый набор</b> со здоровьем не меньше заданного.'});
    var span = document.createElement('span');
    span.textContent = 'Здоровье для форта:';
    div.appendChild(span);
    var aprox_hp = 90 + Character.level * 10 + Character.skills.health * PK_S3_TEST.bonus.life + Math.round(Character.level * .25 * PK_S3_TEST.bonus.life);
    var inp = new Element ('input', {'id':'pk_s3_select_hp', 'type':'text', 'value':aprox_hp, 'size':'5', 'style':'background-color:#e8dab3; margin: 2px 2px 2px 5px;'});
    inp.addEventListener('change',function () {this.value = parseInt(this.value); if (isNaN(this.value)) this.value=0; if (this.value < 0) this.value=0;}, false);
    div.appendChild(inp);
    div_sel_hp.appendChild(div);
    
    var div = document.createElement('div');
    var div_zag = new Element ('div', {'style':'clear: both; font-weight:bold; text-align:right; border-top: 1px solid #321'});
    div_zag.textContent = 'Конструктор навыков:';
    div.appendChild(div_zag);
    var inp = new Element ('input', {'id':'pk_s3_select_konstr_en', 'type':'radio', 'name':'pk_s3_raboty_radio', 'style':'margin: 2px 7px 2px 2px;'});
    div.appendChild(inp);
    var span = document.createElement('span');
    span.textContent = '"Сложность:"';
    div.appendChild(span);
    var inp = new Element ('input', {'id':'pk_s3_select_konstr_to', 'type':'text', 'value':0, 'size':'3', 'style':'background-color:#e8dab3; margin: 2px 0px 2px 2px; width: 25px;'});
    inp.addEventListener('change',function () {this.value = parseInt(this.value); if (isNaN(this.value)) this.value=0; if (this.value < 0) this.value=0;}, false);
    div.appendChild(inp);
    div_sel_hp.appendChild(div);
 
    var div_right = new Element('div',{'style':'clear:left; margin:0; padding:0, border:0'})
   
    form_sel.appendChild(div_sel_hp);
    form_sel.appendChild(div_right);

    form_sel.addEventListener('change',PK_S3_TEST.input_select_rdf, false);

    div_top.appendChild(form_sel);

    var div_slots = new Element ('div', {'style':'float: left; width: 170px;'});
    //var name_slots=['Головной убор', 'Шейная повязка', 'Одежда', 'Пояс', 'Штаны', 'Обувь', 'Дуэльное оружие', 'Фортовое оружие', 'Верховое животное', 'Продукт'];
    /*
     <select style="margin:0px 5px 0px 2px; width:40px;" id="pk_s3_select_slot_8"><option value="0">----</option><option value="100">из экипировки</option><option value="505">Жеребёнок</option></select><span>Верховое животное</span></div>
    */
    for (var i = 0; i < 10; ++i){
	var div = document.createElement('div');
	var id = 'pk_s3_select_slot_'+i;
	//var inp = new Element ('input', {'id':id, 'type':'checkbox', 'style':'margin: 2px 5px 2px 2px;'});
	//div.appendChild (inp);
	var sel = new Element ('select', {'id':id, 'style':'background-color:#e8dab3; width:40px; height:19px; margin:1px 5px 1px 1px;'});
	var opt = document.createElement('option');
	opt.value = 0;
	opt.textContent = '-----';
	sel.appendChild(opt);
	var opt = document.createElement('option');
	opt.value = 99;
	opt.textContent = '(пустой слот)';
	sel.appendChild(opt);
	var opt = document.createElement('option');
	opt.value = 98;
	opt.textContent = '(из экипировки)';
	sel.appendChild(opt);
	var typ = PK_S3_TEST.types[i]
	if (typ != 'yield'){
	    for (var j in PK_S3_TEST.items){
		if (isNaN(j)) continue;
		var obj = PK_S3_TEST.items[j];
		if (typ != obj.type) continue;
		var is_shop = obj.tradeable && obj.traderlevel && (obj.traderlevel <= 15);
		var is_set = obj.set && obj.set.key;
		var opt = document.createElement('option');
		opt.value = j;
		opt.textContent = obj.name;
		if (!is_shop){
		    opt.style.fontWeight = 'bold';
		}
		if (is_set){
		    opt.style.fontStyle = 'italic';
		}
		sel.appendChild(opt);
	    }
	}
	else{
	    for (var j in PK_S3_TEST.items){
		if (isNaN(j)) continue;
		var obj = PK_S3_TEST.items[j];
		if (typ != obj.type) continue;
		var is_set = obj.set && obj.set.key;
		if (!is_set) continue;
		var opt = document.createElement('option');
		opt.value = j;
		opt.textContent = obj.name;
		sel.appendChild(opt);
	    }
	}
	div.appendChild (sel);
	var span = document.createElement('span');
	span.textContent = PK_S3_TEST.types_name[i];
	div.appendChild(span);
	div_slots.appendChild(div);
    }
    div_top.appendChild(div_slots);

    var skills2 = ['стр ', 'удар', 'стой', 'вын ', 'здор', 'верх', 'реак', 'увёр', 'маск', 'плав', 'метк', 'стр ', 'лов ', 'пров', 'рем ', 'рук ', 'такт', 'торг', 'жив ', 'блеф'];
    var attrib2 = ['сила', 'ловк', 'снор', 'шарм'];
    var skills_color2 = ['#900','#060','#009','#660']
    var div_konstr1 = new Element ('div', {'style':'float: left; width: 250px; font-family: monospace; border-left: 1px solid #321'});
    for (var j = 0; j < 4; ++j){
	var div = document.createElement('div');
	var span1 = document.createElement('span');
	span1.style.color = skills_color2[j];
	span1.style.fontWeight = 'bold';
	var id = 'pk_s3_select_konstr_a'+(j*1);
	var inp = new Element ('input', {'id':id, 'type':'text', 'size':'2', 'style': 'margin: 1px 2px 1px 10px; width: 25px;', 'disabled':'true'});
	inp.addEventListener('change',function () {this.value = parseFloat(this.value); if (isNaN(this.value)) this.value=0; if (this.value < 0) this.value=0; if (this.value > 5) this.value=5;}, false);
	span1.appendChild(inp);
	var span = document.createElement('span');
	span.textContent = attrib2[j];
	span1.appendChild(span);
	div.appendChild(span1);
	for (var i = 0; i < 5; ++i){
	    var span1 = document.createElement('span');
	    span1.style.color = skills_color2[j];
	    var id = 'pk_s3_select_konstr_s'+(j*5+i);
	    var inp = new Element ('input', {'id':id, 'type':'text', 'size':'2', 'style': 'margin: 1px 2px 1px 10px; width: 25px;', 'disabled':'true'});
	    inp.addEventListener('change',function () {this.value = parseFloat(this.value); if (isNaN(this.value)) this.value=0; if (this.value < 0) this.value=0; if (this.value > 5) this.value=5;}, false);
	    span1.appendChild(inp);
	    var span = document.createElement('span');
	    span.textContent = skills2[j*5+i];
	    span1.appendChild(span);
	    div.appendChild(span1);
	}
	div_konstr1.appendChild(div);
    }
    div_top.appendChild(div_konstr1);
    
    
    var div_right = new Element('div',{'style':'clear:left; margin:0; padding:0, border:0'})

    var wind = document.getElementById('pk_s3_settings');
    wind.appendChild(div_left);
    wind.appendChild(div_top);
    wind.appendChild(div_right);
    PK_S3_TEST.input_select_rdf();
    //PK_S3_TEST.progress.id = setInterval(PK_S3_TEST.running_bar, 594);
};

PK_S3_TEST.minimize_window_informer = function(){
    AjaxWindow.toggleSize('pereodevalka_informer');
    setTimeout(PK_S3_TEST.minimize_window_informer2, 100);
};

PK_S3_TEST.minimize_window_informer2 = function(){
    var bar = $('window_bar_pereodevalka_informer');
    if (!bar){
        setTimeout(PK_S3_TEST.minimize_window_informer2, 100);
	return;
    }
    bar.firstChild.firstChild.nextSibling.innerHTML='Информация';
};


PK_S3_TEST.show_window_informer = function (){
    var name = 'pereodevalka_informer';
    var group = 'messages';
    var window_div = $('window_' + name);
    
    if (!window_div){
	window_div = new Element('div',{'id':'window_' + name,'class':'window css_messages'});
	AjaxWindow.windows[name] = window_div;
	window_div.injectInside('windows');
	window_div.centerLeft();
    }
    else{
	AjaxWindow.maximize (name);
	window_div.innerHTML = '';
    }
    AjaxWindow.bringToTop(window_div);

    var xhtml = '';
    xhtml += '<div class="window_borders">';
    xhtml += '  <h2 id="window_' + name + '_title" class="window_title"> </h2>';
    xhtml += '	<a class="window_refresh" href="javascript:AjaxWindow.close(\'' + name + '\'); PK_S3_TEST.show_window_informer();void(0)" title="<b>Обновить окно</b>"></a>'
    xhtml += '  <a href="javascript:AjaxWindow.closeAll();" class="window_closeall" title="<b>Закрыть все окна</b>"></a>';
    //xhtml += '  <a href="javascript:AjaxWindow.toggleSize(\'' + name + '\', \'' + group + '\');" class="window_minimize" title="<b>Свернуть окно</b>"></a>';
    xhtml += '  <a href="javascript:PK_S3_TEST.minimize_window_informer();" class="window_minimize" title="<b>Свернуть окно</b>"></a>';
    xhtml += '  <a href="javascript:AjaxWindow.close(\'' + name + '\');" class="window_close" title="<b>Закрыть окно</b>"></a>';
    xhtml += '  <div id="window_' + name + '_content" class="window_content">';
    xhtml += '    	<table class="shadow_table" style="margin-left:6px; width:100%; height:390px">';
    xhtml += '    		<tr>';
    xhtml += '    			<td class="edge_shadow_top_left"></td>';
    xhtml += '    			<td class="border_shadow_top"></td>';
    xhtml += '    			<td class="edge_shadow_top_right"></td>';
    xhtml += '    		</tr>';
    xhtml += '    		<tr>';
    xhtml += '    			<td class="border_shadow_left"></td>';
    xhtml += '    			<td class="shadow_content">';
    xhtml += '    				<div style="overflow:none; width: 675px; height:390px; position: relative;" id="pk_s3_informer">';
    xhtml += '    				</div>';
    xhtml += '    			</td>';
    xhtml += '    			<td class="border_shadow_right"></td>';
    xhtml += '    		</tr>';
    xhtml += '    		<tr>';
    xhtml += '    			<td class="edge_shadow_bottom_left"></td>';
    xhtml += '    			<td class="border_shadow_bottom"></td>';
    xhtml += '    			<td class="edge_shadow_bottom_right"></td>';
    xhtml += '	 		</tr>';
    xhtml += '	 	</table>';
    xhtml += '	</div>';
    xhtml += '</div>';
    window_div.setHTML(xhtml);
	
    var window_title_div = $('window_' + name + '_title');
    window_div.makeDraggable({handle:window_title_div});
    window_title_div.addEvent('dblclick',function(){
				window_div.centerLeft();
				window_div.setStyle('top',133);
				});
    window_div.addEvent('mousedown',AjaxWindow.bringToTop.bind(AjaxWindow,[window_div]));
    window_title_div.addEvent('mousedown',AjaxWindow.bringToTop.bind(AjaxWindow,[window_div]));

    var wind = document.getElementById('pk_s3_informer');
    var text = new Element ('textarea',{'style':'clear:left; margin:5px; width:661px; height:373px;', 'readonly':'true'});
    text.value = (PK_S3_TEST.informer);
    wind.appendChild(text);
};

PK_S3_TEST.sortirovka_rabot = function (type, old_type){
    var otse4to = $('pk_s3_sortirovka_valueto').value;
    var vy4islennoe = $('pk_s3_sortirovka_native').checked;
    // resultaty:{dengi:87, opyt:73, vezenie:29, boom:69,
    var array = [];
    var tmp_node = ['name', 'opyt', 'dengi', 'vezenie', 'boom', 'to', 'malus'];
    for (nod in tmp_node){
	if (isNaN(nod)) continue;
	var elem = $('pk_s3_sortirovka_'+tmp_node[nod]);
	if (elem){
	    elem.style.backgroundColor = '';
	}
    };
    var elem = $('pk_s3_sortirovka_'+type);
    if (type != old_type){
	elem.style.backgroundColor = '#6c6';
	PK_S3_TEST.vyvod.negativ = true;;
    }
    else{
	if (PK_S3_TEST.vyvod.negativ){
	    elem.style.backgroundColor = '#c66';
	}
	else{
	    elem.style.backgroundColor = '#6c6';
	}
	PK_S3_TEST.vyvod.negativ = !PK_S3_TEST.vyvod.negativ;
    }
    for (var ir = 0; ir < PK_S3_TEST.setting.porabotaem.length; ++ir){
	if (!PK_S3_TEST.resultaty[ir]) continue;
	if (PK_S3_TEST.resultaty[ir].TO < otse4to) continue;
	var val = 0;
	switch (type){
	case 'name':
	    val = PK_S3_TEST.raboty[ir].rus_name;
	    break;
	case 'malus':
	    val = PK_S3_TEST.raboty[ir].malus;
	    break;
	case 'to':
	    val = PK_S3_TEST.resultaty[ir].TO;
	    break;
	default:
	    if (vy4islennoe){
		val = PK_S3_TEST.resultaty[ir][type];
	    }
	    else{
		val = PK_S3_TEST.raboty[ir].resultaty[type];
	    }
	};
	if (PK_S3_TEST.vyvod.negativ&&(type!='name'))	val = -val;
	array.push ({val:val, ind:ir});
    }
    PK_S3_TEST.qsort(array, 0, array.length, 'val');
    PK_S3_TEST.vyvod.type = type;
    if (PK_S3_TEST.setting.knopka == 'poehali'){
	PK_S3_TEST.print_raboty(array);
    }
    else{
	alert ('бе-бе-бе, воть!');
    }
};

PK_S3_TEST.print_raboty_to = function (arr){
    main = $('pk_s3_rezultaten_arbeiten0');
    if (!main) return;
    main.innerHTML = '';
    for (var i = 0; i < arr.length; ++i){
	var div0 = new Element('div', {'style':'width:650px; height:138px; border-bottom: 1px solid #321; clear:both; padding-top:5px;'});
	var divI = new Element ('div', {'style':'float:left; width:260px;'});
	if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min)&&(arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    divI.style.width = '250px';
	}
	var divIo = new Element ('div', {'style':'float:left; width:27px; height:81px;'});
	var tmp_div = new Element ('div', {'style':'float:left; padding: 2px;'});
	var aa0 = new Element ('a', {'href':'javascript:PK_S3_TEST.equip_items_save('+arr[i].ind+')'});
	var img0 = new Element ('img', {'style':'width:23px; height:23px; background:url(../img.php?type=menu&amp;dummy) -104px -126px; display:block; margin: 2px;', 'src':'/images/transparent.png', 'title':'Сохранить комплект...'});
	aa0.appendChild(img0);
	tmp_div.appendChild(aa0);
	var aa1 = new Element ('a', {'href':'javascript:PK_S3_TEST.equip_items_delete('+arr[i].ind+')'});
	var img1 = new Element ('img', {'style':'width:23px; height:23px; background:url(../img.php?type=menu&amp;dummy) -129px -101px; display:block; margin: 2px;', 'src':'/images/transparent.png', 'title':'Удалить комплект'});
	aa1.appendChild(img1)
	tmp_div.appendChild(aa1);
	var aa2 = new Element ('a', {'href':'javascript:PK_S3_TEST.except_raboty('+arr[i].ind+', true)'});
	var img2 = new Element ('img', {'style':'width:23px; height:23px; background:url(/images/window/window2_buttons.png) 0px -20px; display:block; margin: 2px;', 'src':'/images/transparent.png', 'title':'Скрыть работу'});
	aa2.appendChild(img2)
	tmp_div.appendChild(aa2);
	divIo.appendChild(tmp_div);
	divI.appendChild(divIo);
	var divIa = new Element ('div', {'style':'float:left;'});
	divIa1 = new Element ('div', {'style':'heigth:20px; font-weight:bold;'});
	var tname = PK_S3_TEST.raboty[arr[i].ind].rus_name;
	if (tname.length > 28) tname = tname.slice(0,25) + '...';
	divIa1.textContent = tname;
	divIa.appendChild(divIa1);
	var divIa2 = new Element('div');
	var divIa2i = new Element ('div', {'style':'float:left'});
	var src = '';
	if (arr[i].ind <= PK_S3_TEST.raboty.max){
	    src = '/images/jobs/'+PK_S3_TEST.raboty[arr[i].ind].name+'.png';
	    var img0 = new Element ('img', {'src':'/images/jobs/'+PK_S3_TEST.raboty[arr[i].ind].name+'.png', 'title':PK_S3_TEST.raboty[arr[i].ind].rus_name, 'alt':PK_S3_TEST.raboty[arr[i].ind].rus_name});
	}
	else if ((arr[i].ind == PK_S3_TEST.raboty.health)||(arr[i].ind == PK_S3_TEST.raboty.energy)){
	    src = '/images/jobs/mini/sleep.png';
	}
	else if (arr[i].ind == PK_S3_TEST.raboty.moving){
	    src = '/images/jobs/mini/walk.png';
	}
	else if (arr[i].ind == PK_S3_TEST.raboty.build){
	    src = '/images/jobs/build.png';
	}
	else if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min) && (arr[i].ind < PK_S3_TEST.raboty.fort_middle)){
	    src = '/images/fort/battle/button_attack.png';
	}
	else if ((arr[i].ind >= PK_S3_TEST.raboty.fort_middle) && (arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    src = '/images/fort/battle/button_defend.png';
	}
	else if ((arr[i].ind >= PK_S3_TEST.raboty.duel_min) && (arr[i].ind < PK_S3_TEST.raboty.duel_max)){
	    src = '/images/jobs/duell.png';
	}
	else{
	    src = '/images/skill/skill_pure.png';
	}
	var title = PK_S3_TEST.raboty[arr[i].ind].rus_name + '<hr />Кликнуть, чтобы одеть выбранные вещи';
	var img0 = new Element ('img', {'src':src, 'title':title, 'alt':title, 'style':'width:63px; height:63px;'});
	var aa = new Element('a', {'href':'javascript:PK_S3_TEST.equip_adds('+arr[i].ind+');void(0);'});
	aa.appendChild(img0);
	divIa2i.appendChild(aa);
	divIa2.appendChild(divIa2i);
	var divIa2ii = new Element ('div', {'style':'float:left;'});
	divIa2ii.innerHTML=' ';
	var dob = 0;
	for (var iii in PK_S3_TEST.raboty[arr[i].ind].resultaty.produkty){
	    ++dob;
	    if (isNaN(iii)) continue;
	    var tmp_div = new Element('div', {'style':'float:left; padding: 10px 2px 0px 2px; text-align:center;'});
	    var img = new Element ('img', {'src':PK_S3_TEST.items[iii].image_mini, 'title':PK_S3_TEST.items[iii].name, 'alt':PK_S3_TEST.items[iii].name, 'class':'bug_mini', 'style':'clear:both; display:block'});
	    tmp_div.appendChild(img);
	    //divIa2ii.appendChild(img);
	    span = new Element ('span');
	    var val = Math.round(PK_S3_TEST.raboty[arr[i].ind].resultaty.produkty[iii] * PK_S3_TEST.bonus.money)
	    span.textContent = '' + ((val>100)?100:val) + '%';
	    if (PK_S3_TEST.bonus.money > 1.0){
		span.style.color = '#287f10';
		span.style.fontWeight = 'bold';
	    }
	    tmp_div.appendChild(span);
	    divIa2ii.appendChild(tmp_div);
	}
	if (dob == 0){
	    var tmp_div = new Element('div', {'style':'float:left; padding: 10px 2px 0px 2px; text-align:center;'});
	    var img = new Element ('img', {'src':'/images/transparent.png', 'title':'', 'alt':'', 'class':'bug_mini', 'style':'clear:both; display:block'});
	    tmp_div.appendChild(img);
	    //divIa2ii.appendChild(img);
	    divIa2ii.appendChild(tmp_div);
	}
	divIa2ii.appendChild(tmp_div);
	divIa2.appendChild(divIa2ii);
	divIa.appendChild(divIa2);
	divI.appendChild(divIa);
	if (arr[i].ind <= PK_S3_TEST.raboty.max){
	    var divIb = new Element('div', {'style':'clear:both;'});
	    var divIb1 = new Element('div', {'style':'width:110px; float:left;', 'title':'Заработок'});
	    var img0 = new Element('img', {'src':'/images/job/dollar.png', 'style':'float:left;'});
	    divIb1.appendChild(img0);
	    var bar = new Element('div', {'class':'bar', 'style':'width:26px; border:1px solid black; float:left;'})
	    var bar_fill = new Element('div', {'class':'bar_fill', 'style':'width:'+Math.round(PK_S3_TEST.raboty[arr[i].ind].resultaty.dengi*.25)+'px;'})
	    bar.appendChild(bar_fill);
	    var bar_perc = new Element('div', {'class':'bar_perc', 'style':'width:25px;'});
	    bar_perc.textContent = PK_S3_TEST.raboty[arr[i].ind].resultaty.dengi+'%';
	    bar.appendChild(bar_perc);
	    divIb1.appendChild(bar);
	    var span = new Element('div', {'style':'float:left; font-weight:bold; margin: 2px 0px 0px 5px;'});
	    span.textContent = PK_S3_TEST.resultaty[arr[i].ind].dengi + '$';
	    divIb1.appendChild(span);
	    divIb.appendChild(divIb1);

	    var divIb3 = new Element('div', {'style':'float:left;', 'title':'Удача'});
	    var img0 = new Element('img', {'src':'/images/job/luck.png', 'style':'float:left;'});
	    divIb3.appendChild(img0);
	    var bar = new Element('div', {'class':'bar', 'style':'width:26px; border:1px solid black; float:left;'})
	    var bar_fill = new Element('div', {'class':'bar_fill', 'style':'width:'+Math.round(PK_S3_TEST.raboty[arr[i].ind].resultaty.vezenie*.25)+'px;'})
	    bar.appendChild(bar_fill);
	    var bar_perc = new Element('div', {'class':'bar_perc', 'style':'width:25px;'});
	    bar_perc.textContent = PK_S3_TEST.raboty[arr[i].ind].resultaty.vezenie+'%';
	    bar.appendChild(bar_perc);
	    divIb3.appendChild(bar);
	    var span = new Element('div', {'style':'float:left; font-weight:bold; margin: 2px 0px 0px 5px;'});
	    span.textContent = Math.round(PK_S3_TEST.resultaty[arr[i].ind].vezenie/3)+' - ' + PK_S3_TEST.resultaty[arr[i].ind].vezenie + ' ($)';
	    divIb3.appendChild(span);
	    divIb.appendChild(divIb3);

	    var divIb2 = new Element('div', {'style':'width:110px; float:left;', 'title':'Опыт'});
	    var img0 = new Element('img', {'src':'/images/job/experience.png', 'style':'float:left;'});
	    divIb2.appendChild(img0);
	    var bar = new Element('div', {'class':'bar', 'style':'width:26px; border:1px solid black; float:left;'})
	    var bar_fill = new Element('div', {'class':'bar_fill', 'style':'width:'+Math.round(PK_S3_TEST.raboty[arr[i].ind].resultaty.opyt*.25)+'px;'})
	    bar.appendChild(bar_fill);
	    var bar_perc = new Element('div', {'class':'bar_perc', 'style':'width:25px;'});
	    bar_perc.textContent = PK_S3_TEST.raboty[arr[i].ind].resultaty.opyt+'%';
	    bar.appendChild(bar_perc);
	    divIb2.appendChild(bar);
	    var span = new Element('div', {'style':'float:left; font-weight:bold; margin: 2px 0px 0px 5px;'});
	    span.textContent = PK_S3_TEST.resultaty[arr[i].ind].opyt + ' XP';
	    divIb2.appendChild(span);
	    divIb.appendChild(divIb2);

	    var divIb4 = new Element('div', {'style':'float:left;', 'title':'Опасность'});
	    var img0 = new Element('img', {'src':'/images/job/danger.png', 'style':'float:left;'});
	    divIb4.appendChild(img0);
	    var bar = new Element('div', {'class':'bar', 'style':'width:26px; border:1px solid black; float:left;'})
	    var bar_fill = new Element('div', {'class':'bar_fill', 'style':'width:'+Math.round(PK_S3_TEST.raboty[arr[i].ind].resultaty.boom*.25)+'px;'})
	    bar.appendChild(bar_fill);
	    var bar_perc = new Element('div', {'class':'bar_perc', 'style':'width:25px;'});
	    bar_perc.textContent = PK_S3_TEST.raboty[arr[i].ind].resultaty.boom+'%';
	    bar.appendChild(bar_perc);
	    divIb4.appendChild(bar);
	    var span = new Element('div', {'style':'float:left; font-weight:bold; margin: 2px 0px 0px 5px;'});
	    span.textContent =  PK_S3_TEST.resultaty[arr[i].ind].boom + ' !';
	    divIb4.appendChild(span);
	    divIb.appendChild(divIb4);

	    divI.appendChild(divIb);
	}
	div0.appendChild(divI);
	var divII = new Element('div', {'style':'width:390px; float:left;'});
	if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min)&&(arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    divII.style.width = '400px';
	}
	var divIIa = new Element ('div', {'style':'clear:both;'});
	var divIIa1 = new Element ('div', {'style':'float:left; width:105px;'});
	if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min)&&(arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    divIIa1.style.width = '115px';
	}
	var tmp_div = new Element ('span', {'style':'float:left; width:47px;'});
	if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min)&&(arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    tmp_div.style.width = '57px';
	}
	var title = 'Бонус своих навыков';
	if (arr[i].ind == PK_S3_TEST.raboty.moving){
	    title = 'Бонус верховой езды';
	}
	else if ((arr[i].ind == PK_S3_TEST.raboty.energy)||(arr[i].ind == PK_S3_TEST.raboty.health)){
	    title = 'Свой навык здоровья';
	}
	else if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min) && (arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    title = 'Атака';
	}
	tmp_div.innerHTML = '<img src="images/task_points/plus.png" width="20" height="20" title="'+title+'" /> '+PK_S3_TEST.resultaty[arr[i].ind].selfTO;
	if ((arr[i].ind < PK_S3_TEST.raboty.max)&&(PK_S3_TEST.resultaty[arr[i].ind].selfTO > PK_S3_TEST.raboty[arr[i].ind].malus)){
	    tmp_div.style.color = "#060";
	    tmp_div.style.fontWeight = "bold";
	}
	divIIa1.appendChild(tmp_div);
	var tmp_div = new Element ('span', {'style':'float:left; clear:right; width:58px;'});
	var title = 'Бонус экипировки';
	if (arr[i].ind == PK_S3_TEST.raboty.moving){
	    title = 'Бонус к скорости';
	}
	else if ((arr[i].ind == PK_S3_TEST.raboty.energy)||(arr[i].ind == PK_S3_TEST.raboty.health)){
	    title = 'Бонус к навыку здоровья';
	}
	else if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min) && (arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    title = 'Защита';
	}
	tmp_div.innerHTML = '<img src="images/task_points/plus.png" width="20" height="20" title="'+title+'" /> '+PK_S3_TEST.resultaty[arr[i].ind].bonus;
	divIIa1.appendChild(tmp_div);
	var tmp_div = new Element ('span', {'style':'float:left; width:47px;'});
	if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min)&&(arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    tmp_div.style.width = '57px';
	}
	tmp_div.innerHTML = '<img src="images/task_points/minus.png" width="20" height="20" title="Сложность работы" /> '+PK_S3_TEST.raboty[arr[i].ind].malus;
	divIIa1.appendChild(tmp_div);
	var tmp_div = new Element ('span', {'style':'float:left; clear:right; width:58px;'});
	var title = 'Трудовых очков';
	if (arr[i].ind == PK_S3_TEST.raboty.moving){
	    title = 'Итоговая скорость';
	}
	else if (arr[i].ind == PK_S3_TEST.raboty.energy){
	    title = 'Процент регенерации';
	}
	else if (arr[i].ind == PK_S3_TEST.raboty.health){
	    title = 'Итоговое здоровье'
	}
	else if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min) && (arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    title = 'Значение выбранного бонуса';
	}
	var t0 = PK_S3_TEST.resultaty[arr[i].ind].TO;
	tmp_div.innerHTML = '<img src="images/task_points/equal.png" width="20" height="20" title="'+title+'" /> <b>'+t0+'</b>';
	if (t0 < 0){
	    tmp_div.style.color = "maroon";
	}
	if ((arr[i].ind < PK_S3_TEST.raboty.max)&&(PK_S3_TEST.resultaty[arr[i].ind].TO > 0)){
	    tmp_div.style.color = "#00c";
	}
	divIIa1.appendChild(tmp_div);
	divIIa.appendChild(divIIa1);
	var divIIa2 = new Element ('div', {'style':'float:left; width: 285px;'})
	for (var s in PK_S3_TEST.raboty[arr[i].ind].navyki){
	    for (var j = 0; j < PK_S3_TEST.raboty[arr[i].ind].navyki[s]; ++j){
		// skill_box skill_flexibility img0
		if (PK_S3_TEST.skill2atr[s]){
		    var clas = 'skill_box skill_' + PK_S3_TEST.skill2atr[s] + ' img' + (PK_S3_TEST.skillsi[s] % 5);
		    var id = 'skill_'+s;
		    var span1 = new Element('span', {'class':clas, 'title':'<b>'+Character.skill_titles[s]+':</b> '+PK_S3_TEST.resultaty[arr[i].ind].skills[s]});
		    span1.innerHTML = '<span class="skill_value">'+PK_S3_TEST.resultaty[arr[i].ind].skills[s]+'</span>';
		    
		    divIIa2.appendChild(span1);
		}
		else{ // характеристика из конструктора
		    // class="skill_box skill_circle_flexibility"
		    var clas = 'skill_box skill_circle_'+s;
		    var span1 = new Element('span', {'class':clas, 'title':Character.attribute_titles[s]+': '+PK_S3_TEST.resultaty[arr[i].ind].skills[s]});
		    span1.innerHTML = '<span class="skill_value">'+PK_S3_TEST.resultaty[arr[i].ind].skills[s]+'</span>';
		    divIIa2.appendChild(span1);
		}
	    }
	}
	divIIa.appendChild(divIIa2);
	divII.appendChild(divIIa);
	var divIIb = new Element('div', {'style':'clear:both; padding-top: 15px;'});
	var no_item_fort = true;
	for (var j = 0; j < PK_S3_TEST.types.length; ++j){
	    var div1 = new Element('div', {'style':'float:left; width:39px;'});
	    var iID = PK_S3_TEST.resultaty[arr[i].ind].items[PK_S3_TEST.types[j]];
	    if (iID&&(iID>0)){
		if ((PK_S3_TEST.types[j]!='animal')&&(PK_S3_TEST.types[j]!='left_arm')){
		    no_item_fort = false;
		}
		var iobj = PK_S3_TEST.items[iID];
		var title = '<b>' + iobj.name + '</b><hr />';
		var is_f = true;
		for (var a in iobj.bonus.attributes){
		    if (!is_f){
			title += '<br />';
		    }
		    else{
			is_f = false;
		    }
		    title += '<b>' + Character.attribute_titles[a] + ':' + iobj.bonus.attributes[a] + '</b>';
		}
		for (var s in iobj.bonus.skills){
		    if (!is_f){
			title += '<br />';
		    }
		    else{
			is_f = false;
		    }
		    title += Character.skill_titles[s] + ':' + iobj.bonus.skills[s];
		}
		if (iobj.speed){
		    if (!is_f){
			title += '<br />';
		    }
		    else{
			is_f = false;
		    }
		    title += 'скорость: '+Math.round(100/iobj.speed)+'%';
		}
		if ((iobj.type == 'left_arm')||(iobj.type == 'right_arm')){
		    if (!is_f){
			title += '<br />';
		    }
		    title += 'урон: ' + iobj.damage.damage_min + ' - ' + iobj.damage.damage_max + ' (' + parseInt((iobj.damage.damage_min + iobj.damage.damage_max)/2, 10) + ' cp.)';
		};
		title += '<hr />';
		if (iobj.set.key){
		    title += iobj.set.name +'<hr />';
		};
		title += 'уровень: ' + (iobj.level ? iobj.level : '0') + '<br />';
		title += 'цена: ' + iobj.price + '$';
		title += '<hr />Кликнуть, чтобы одеть предмет'
		var aa = new Element ('a', {'href':'javascript:PK_S3_TEST.equip_add('+iID+');void(0);'});
		var classi = (PK_S3_TEST.svoi_veschi[iID]) ? 'bug_mini' : 'bug_mini_red';
		var img = new Element ('img', {'src':iobj.image_mini, 'class':classi, 'title':title});
		aa.appendChild(img);
		div1.appendChild(aa);
		if ((arr[i].ind < PK_S3_TEST.raboty.fort_min)||(arr[i].ind >= PK_S3_TEST.raboty.fort_max)){
		    var podp = new Element ('div', {'style':'text-align:center;'});
		    podp.textContent = PK_S3_TEST.resultaty[arr[i].ind].itemsto[PK_S3_TEST.types[j]];
		    div1.appendChild(podp);
		}
	    }
	    divIIb.appendChild(div1);
	}
	if (no_item_fort){
	    var div1 = new Element('div', {'style':'font-weight:bold;'});
	    div1.textContent = 'Слишком большое значение здоровья. Нет ни одного набора удовлетворяющего требованию!';
	    divIIb.appendChild(div1);
	}
	divII.appendChild(divIIb);
	div0.appendChild(divII);
	main.appendChild(div0);
    }
}

PK_S3_TEST.vyvod_nenuzhnykh_items = function (){
    var wind = $('pk_s3_rezultaten_arbeiten');
    wind.innerHTML = '';
    var text = new Element ('div',{'style':'margin:2px; width:675px; height:385px; overflow-y:scroll; overflow-x:none;', 'id':'pk_s3_rezultaten_arbeiten1'});
    for (var i in PK_S3_TEST.svoi_veschi){
	if (isNaN(i)) continue;
	if (!PK_S3_TEST.ispolzuemye[i]){
	    obj = PK_S3_TEST.items[i];
	    if ((obj.type == 'yield')||(obj.type == 'recipe')) continue;
	    var div1 = new Element('div', {'style':'float:left; width:39px;'});
	    var title = '<b>' + obj.name + '</b><hr />';
	    var is_f = true;
	    for (var a in obj.bonus.attributes){
		if (!is_f){
		    title += '<br />';
		}
		else{
		    is_f = false;
		}
		title += '<b>' + Character.attribute_titles[a] + ':' + obj.bonus.attributes[a] + '</b>';
	    }
	    for (var s in obj.bonus.skills){
		if (!is_f){
		    title += '<br />';
		}
		else{
		    is_f = false;
		}
		title += Character.skill_titles[s] + ':' + obj.bonus.skills[s];
	    }
	    if (obj.speed){
		if (!is_f){
		    title += '<br />';
		}
		else{
		    is_f = false;
		}
		title += 'скорость: '+Math.round(100/obj.speed)+'%';
	    }
	    if ((obj.type == 'left_arm')||(obj.type == 'right_arm')){
		if (!is_f){
		    title += '<br />';
		}
		title += 'урон: ' + obj.damage.damage_min + ' - ' + obj.damage.damage_max + ' (' + parseInt((obj.damage.damage_min + obj.damage.damage_max)/2, 10) + ' cp.)';
	    };
	    title += '<hr />';
	    if (obj.set.key){
		title += obj.set.name +'<hr />';
	    };
	    title += 'уровень: ' + (obj.level ? obj.level : '0') + '<br />';
	    title += 'цена: ' + obj.price + '$';
	    var simple = false;
	    if (obj.tradeable && obj.traderlevel && (obj.traderlevel <= 15)) simple = true;
	    if (obj.set && obj.set.key) simple = false;
	    if (obj.characterClass) simple = false;
	    var classi = (simple) ? 'bug_mini' : 'bug_mini_red';
	    var img = new Element ('img', {'src':obj.image_mini, 'class':classi, 'title':title});
	    div1.appendChild(img);
	    text.appendChild(div1);
	}
    }
    wind.appendChild(text);
}

PK_S3_TEST.print_raboty = function (arr){
    var main = $('pk_s3_rezultaten_arbeiten0');
    if (!main) return;
    main.innerHTML = '';
    for (var i = 0; i < arr.length; ++i){
	var div0 = new Element('div', {'style':'width:650px; height:138px; border-bottom: 1px solid #321; clear:both; padding-top:5px;'});
	var divI = new Element ('div', {'style':'float:left; width:260px;'});
	if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min)&&(arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    divI.style.width = '250px';
	}
	var divIo = new Element ('div', {'style':'float:left; width:27px; height:81px;'});
	var tmp_div = new Element ('div', {'style':'float:left; padding: 2px;'});
	var aa0 = new Element ('a', {'href':'javascript:PK_S3_TEST.equip_items_save('+arr[i].ind+')'});
	var img0 = new Element ('img', {'style':'width:23px; height:23px; background:url("../images/window/messages/icons.png") repeat scroll -217px -2px transparent; display:block; margin: 2px;', 'src':'/images/transparent.png', 'title':'Сохранить комплект...'});
	aa0.appendChild(img0);
	tmp_div.appendChild(aa0);
	var aa1 = new Element ('a', {'href':'javascript:PK_S3_TEST.equip_items_delete('+arr[i].ind+')'});
	var img1 = new Element ('img', {'style':'width:23px; height:23px; background:url("../images/window/messages/icons.png") repeat scroll -265px -2px transparent; display:block; margin: 2px;', 'src':'/images/transparent.png', 'title':'Удалить комплект'});
	aa1.appendChild(img1)
	tmp_div.appendChild(aa1);
	var aa2 = new Element ('a', {'href':'javascript:PK_S3_TEST.except_raboty('+arr[i].ind+', true)'});
	var img2 = new Element ('img', {'style':'width:23px; height:23px; background:url("../images/window/messages/icons.png") repeat scroll -241px -2px transparent; display:block; margin: 2px;', 'src':'/images/transparent.png', 'title':'Скрыть работу'});
	aa2.appendChild(img2)
	tmp_div.appendChild(aa2);
	divIo.appendChild(tmp_div);
	divI.appendChild(divIo);
	var divIa = new Element ('div', {'style':'float:left;'});
	divIa1 = new Element ('div', {'style':'heigth:20px; font-weight:bold;'});
	var tname = PK_S3_TEST.raboty[arr[i].ind].rus_name;
	if (tname.length > 28) tname = tname.slice(0,25) + '...';
	divIa1.textContent = tname;
	divIa.appendChild(divIa1);
	var divIa2 = new Element('div');
	var divIa2i = new Element ('div', {'style':'float:left'});
	var src = '';
	if (arr[i].ind <= PK_S3_TEST.raboty.max){
	    src = '/images/jobs/'+PK_S3_TEST.raboty[arr[i].ind].name+'.png';
	}
	else if ((arr[i].ind == PK_S3_TEST.raboty.health)||(arr[i].ind == PK_S3_TEST.raboty.energy)){
	    src = '/images/jobs/sleep.png';
	}
	else if (arr[i].ind == PK_S3_TEST.raboty.moving){
	    src = '/images/jobs/walk.png';
	}
	else if (arr[i].ind == PK_S3_TEST.raboty.build){
	    src = '/images/jobs/build.png';
	}
	else if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min) && (arr[i].ind < PK_S3_TEST.raboty.fort_middle)){
	    src = '/images/fort/battle/button_attack.png';
	}
	else if ((arr[i].ind >= PK_S3_TEST.raboty.fort_middle) && (arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    src = '/images/fort/battle/button_defend.png';
	}
	else if ((arr[i].ind >= PK_S3_TEST.raboty.duel_min) && (arr[i].ind < PK_S3_TEST.raboty.duel_max)){
	    src = '/images/jobs/duell.png';
	}
	else{
	    src = '/images/skill/skill_pure.jpg';
	}
	var title = PK_S3_TEST.raboty[arr[i].ind].rus_name + '<hr />Кликнуть, чтобы одеть выбранные вещи';
	var img0 = new Element ('img', {'src':src, 'title':title, 'alt':title, 'style':'width:63px; height:63px;'});
	var aa = new Element('a', {'href':'javascript:PK_S3_TEST.equip_adds('+arr[i].ind+');void(0);'});
	aa.appendChild(img0);
	divIa2i.appendChild(aa);
	divIa2.appendChild(divIa2i);
	var divIa2ii = new Element ('div', {'style':'float:left;'});
	divIa2ii.innerHTML=' ';
	var dob = 0;
	for (var iii in PK_S3_TEST.raboty[arr[i].ind].resultaty.produkty){
	    ++dob;
	    if (isNaN(iii)) continue;
	    var tmp_div = new Element('div', {'style':'float:left; padding: 10px 2px 0px 2px; text-align:center;'});
	    var img = new Element ('img', {'src':PK_S3_TEST.items[iii].image_mini, 'title':PK_S3_TEST.items[iii].name, 'alt':PK_S3_TEST.items[iii].name, 'class':'bug_mini', 'style':'clear:both; display:block'});
	    tmp_div.appendChild(img);
	    //divIa2ii.appendChild(img);
	    span = new Element ('span');
	    var val = Math.round(PK_S3_TEST.raboty[arr[i].ind].resultaty.produkty[iii] * PK_S3_TEST.bonus.money * PK_S3_TEST.bonus.drop)
	    span.textContent = '' + ((val>100)?100:val) + '%';
	    if (PK_S3_TEST.bonus.money > 1.0){
		span.style.color = '#287f10';
		span.style.fontWeight = 'bold';
	    }
	    tmp_div.appendChild(span);
	    divIa2ii.appendChild(tmp_div);
	}
	if (dob == 0){
	    var tmp_div = new Element('div', {'style':'float:left; padding: 10px 2px 0px 2px; text-align:center;'});
	    var img = new Element ('img', {'src':'/images/transparent.png', 'title':'', 'alt':'', 'class':'bug_mini', 'style':'clear:both; display:block'});
	    tmp_div.appendChild(img);
	    //divIa2ii.appendChild(img);
	    divIa2ii.appendChild(tmp_div);
	}
	divIa2ii.appendChild(tmp_div);
	divIa2.appendChild(divIa2ii);
	divIa.appendChild(divIa2);
	divI.appendChild(divIa);
	if (arr[i].ind <= PK_S3_TEST.raboty.max){
	    var divIb = new Element('div', {'style':'clear:both;'});
	    var divIb1 = new Element('div', {'style':'width:110px; float:left;', 'title':'Заработок'});
	    var img0 = new Element('img', {'src':'/images/job/dollar.png', 'style':'float:left;'});
	    divIb1.appendChild(img0);
	    var bar = new Element('div', {'class':'bar', 'style':'width:26px; border:1px solid black; float:left;'})
	    var bar_fill = new Element('div', {'class':'bar_fill', 'style':'width:'+Math.round(PK_S3_TEST.raboty[arr[i].ind].resultaty.dengi*.25)+'px;'})
	    bar.appendChild(bar_fill);
	    var bar_perc = new Element('div', {'class':'bar_perc', 'style':'width:25px;'});
	    bar_perc.textContent = PK_S3_TEST.raboty[arr[i].ind].resultaty.dengi+'%';
	    bar.appendChild(bar_perc);
	    divIb1.appendChild(bar);
	    var span = new Element('div', {'style':'float:left; font-weight:bold; margin: 2px 0px 0px 5px;'});
	    span.textContent = PK_S3_TEST.resultaty[arr[i].ind].dengi + '$';
	    divIb1.appendChild(span);
	    divIb.appendChild(divIb1);

	    var divIb3 = new Element('div', {'style':'float:left;', 'title':'Удача'});
	    var img0 = new Element('img', {'src':'/images/job/luck.png', 'style':'float:left;'});
	    divIb3.appendChild(img0);
	    var bar = new Element('div', {'class':'bar', 'style':'width:26px; border:1px solid black; float:left;'})
	    var bar_fill = new Element('div', {'class':'bar_fill', 'style':'width:'+Math.round(PK_S3_TEST.raboty[arr[i].ind].resultaty.vezenie*.25)+'px;'})
	    bar.appendChild(bar_fill);
	    var bar_perc = new Element('div', {'class':'bar_perc', 'style':'width:25px;'});
	    bar_perc.textContent = PK_S3_TEST.raboty[arr[i].ind].resultaty.vezenie+'%';
	    bar.appendChild(bar_perc);
	    divIb3.appendChild(bar);
	    var span = new Element('div', {'style':'float:left; font-weight:bold; margin: 2px 0px 0px 5px;'});
	    span.textContent = Math.round(PK_S3_TEST.resultaty[arr[i].ind].vezenie/3)+' - ' + PK_S3_TEST.resultaty[arr[i].ind].vezenie + ' ($)';
	    divIb3.appendChild(span);
	    divIb.appendChild(divIb3);

	    var divIb2 = new Element('div', {'style':'width:110px; float:left;', 'title':'Опыт'});
	    var img0 = new Element('img', {'src':'/images/job/experience.png', 'style':'float:left;'});
	    divIb2.appendChild(img0);
	    var bar = new Element('div', {'class':'bar', 'style':'width:26px; border:1px solid black; float:left;'})
	    var bar_fill = new Element('div', {'class':'bar_fill', 'style':'width:'+Math.round(PK_S3_TEST.raboty[arr[i].ind].resultaty.opyt*.25)+'px;'})
	    bar.appendChild(bar_fill);
	    var bar_perc = new Element('div', {'class':'bar_perc', 'style':'width:25px;'});
	    bar_perc.textContent = PK_S3_TEST.raboty[arr[i].ind].resultaty.opyt+'%';
	    bar.appendChild(bar_perc);
	    divIb2.appendChild(bar);
	    var span = new Element('div', {'style':'float:left; font-weight:bold; margin: 2px 0px 0px 5px;'});
	    span.textContent = PK_S3_TEST.resultaty[arr[i].ind].opyt + ' XP';
	    divIb2.appendChild(span);
	    divIb.appendChild(divIb2);

	    var divIb4 = new Element('div', {'style':'float:left;', 'title':'Опасность'});
	    var img0 = new Element('img', {'src':'/images/job/danger.png', 'style':'float:left;'});
	    divIb4.appendChild(img0);
	    var bar = new Element('div', {'class':'bar', 'style':'width:26px; border:1px solid black; float:left;'})
	    var bar_fill = new Element('div', {'class':'bar_fill', 'style':'width:'+Math.round(PK_S3_TEST.raboty[arr[i].ind].resultaty.boom*.25)+'px;'})
	    bar.appendChild(bar_fill);
	    var bar_perc = new Element('div', {'class':'bar_perc', 'style':'width:25px;'});
	    bar_perc.textContent = PK_S3_TEST.raboty[arr[i].ind].resultaty.boom+'%';
	    bar.appendChild(bar_perc);
	    divIb4.appendChild(bar);
	    var span = new Element('div', {'style':'float:left; font-weight:bold; margin: 2px 0px 0px 5px;'});
	    span.textContent =  PK_S3_TEST.resultaty[arr[i].ind].boom + ' !';
	    divIb4.appendChild(span);
	    divIb.appendChild(divIb4);

	    divI.appendChild(divIb);
	}
	div0.appendChild(divI);
	var divII = new Element('div', {'style':'width:390px; float:left;'});
	if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min)&&(arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    divII.style.width = '400px';
	}
	var divIIa = new Element ('div', {'style':'clear:both;'});
	var divIIa1 = new Element ('div', {'style':'float:left; width:105px;'});
	if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min)&&(arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    divIIa1.style.width = '115px';
	}
	var tmp_div = new Element ('span', {'style':'float:left; width:47px;'});
	if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min)&&(arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    tmp_div.style.width = '57px';
	}
	var title = 'Бонус своих навыков';
	if (arr[i].ind == PK_S3_TEST.raboty.moving){
	    title = 'Бонус верховой езды';
	}
	else if ((arr[i].ind == PK_S3_TEST.raboty.energy)||(arr[i].ind == PK_S3_TEST.raboty.health)){
	    title = 'Свой навык здоровья';
	}
	if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min) && (arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    tmp_div.innerHTML = '<img src="images/fort/battle/attacker_primary.png" title="Атака" /> '+PK_S3_TEST.resultaty[arr[i].ind].selfTO;
	}
	else{
	    tmp_div.innerHTML = '<img src="images/task_points/plus.png" width="20" height="20" title="'+title+'" /> '+PK_S3_TEST.resultaty[arr[i].ind].selfTO;
	}
	if ((arr[i].ind < PK_S3_TEST.raboty.max)&&(PK_S3_TEST.resultaty[arr[i].ind].selfTO > PK_S3_TEST.raboty[arr[i].ind].malus)){
	    tmp_div.style.color = "#060";
	    tmp_div.style.fontWeight = "bold";
	}
	divIIa1.appendChild(tmp_div);
	var tmp_div = new Element ('span', {'style':'float:left; clear:right; width:58px;'});
	var title = 'Бонус экипировки';
	if (arr[i].ind == PK_S3_TEST.raboty.moving){
	    title = 'Бонус к скорости';
	}
	else if ((arr[i].ind == PK_S3_TEST.raboty.energy)||(arr[i].ind == PK_S3_TEST.raboty.health)){
	    title = 'Бонус к навыку здоровья';
	}
	if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min) && (arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    tmp_div.innerHTML = '<img src="images/fort/battle/defender_primary.png" title="Защита" /> '+PK_S3_TEST.resultaty[arr[i].ind].bonus;
	}
	else{
	    tmp_div.innerHTML = '<img src="images/task_points/plus.png" width="20" height="20" title="'+title+'" /> '+PK_S3_TEST.resultaty[arr[i].ind].bonus;
	}
	divIIa1.appendChild(tmp_div);
	var tmp_div = new Element ('span', {'style':'float:left; width:47px;'});
	if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min)&&(arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    tmp_div.style.width = '57px';
	}
	tmp_div.innerHTML = '<img src="images/task_points/minus.png" width="20" height="20" title="Сложность работы" /> '+PK_S3_TEST.raboty[arr[i].ind].malus;
	divIIa1.appendChild(tmp_div);
	var tmp_div = new Element ('span', {'style':'float:left; clear:right; width:58px;'});
	var title = 'Трудовых очков';
	var t0 = PK_S3_TEST.resultaty[arr[i].ind].TO;
	if (arr[i].ind == PK_S3_TEST.raboty.moving){
	    title = 'Итоговая скорость';
	    t0 += '%';
	}
	else if (arr[i].ind == PK_S3_TEST.raboty.energy){
	    title = 'Процент регенерации';
	    t0 += '%';
	}
	else if (arr[i].ind == PK_S3_TEST.raboty.health){
	    title = 'Итоговое здоровье'
	}
	else if ((arr[i].ind >= PK_S3_TEST.raboty.fort_min) && (arr[i].ind < PK_S3_TEST.raboty.fort_max)){
	    title = 'Значение выбранного бонуса';
	}
	tmp_div.innerHTML = '<img src="images/task_points/equal.png" width="20" height="20" title="'+title+'" /> <b>'+t0+'</b>';
	if (t0 < 0){
	    tmp_div.style.color = "maroon";
	}
	if ((arr[i].ind < PK_S3_TEST.raboty.max)&&(PK_S3_TEST.resultaty[arr[i].ind].TO > 0)){
	    tmp_div.style.color = "#00c";
	}
	divIIa1.appendChild(tmp_div);
	divIIa.appendChild(divIIa1);
	var divIIa2 = new Element ('div', {'style':'float:left; width: 285px;'})
	for (var s in PK_S3_TEST.raboty[arr[i].ind].navyki){
	    for (var j = 0; j < PK_S3_TEST.raboty[arr[i].ind].navyki[s]; ++j){
		// skill_box skill_flexibility img0
		if (PK_S3_TEST.skill2atr[s]){
		    var clas = 'skill_box skill_' + PK_S3_TEST.skill2atr[s] + ' img' + (PK_S3_TEST.skillsi[s] % 5);
		    var id = 'skill_'+s;
		    var span1 = new Element('span', {'class':clas, 'title':'<b>'+Character.skill_titles[s]+':</b> '+PK_S3_TEST.resultaty[arr[i].ind].skills[s]});
		    span1.innerHTML = '<span class="skill_value">'+PK_S3_TEST.resultaty[arr[i].ind].skills[s]+'</span>';
		    
		    divIIa2.appendChild(span1);
		}
		else{ // характеристика из конструктора
		    // class="skill_box skill_circle_flexibility"
		    var clas = 'skill_box skill_circle_'+s;
		    var span1 = new Element('span', {'class':clas, 'title':Character.attribute_titles[s]+': '+PK_S3_TEST.resultaty[arr[i].ind].skills[s]});
		    span1.innerHTML = '<span class="skill_value">'+PK_S3_TEST.resultaty[arr[i].ind].skills[s]+'</span>';
		    divIIa2.appendChild(span1);
		}
	    }
	}
	divIIa.appendChild(divIIa2);
	divII.appendChild(divIIa);
	var divIIb = new Element('div', {'style':'clear:both; padding-top: 15px;'});
	var no_item_fort = true;
	for (var j = 0; j < PK_S3_TEST.types.length; ++j){
	    var div1 = new Element('div', {'style':'float:left; width:39px;'});
	    var iID = PK_S3_TEST.resultaty[arr[i].ind].items[PK_S3_TEST.types[j]];
	    if (iID&&(iID>0)){
		if ((PK_S3_TEST.types[j]!='animal')&&(PK_S3_TEST.types[j]!='left_arm')){
		    no_item_fort = false;
		}
		var iobj = PK_S3_TEST.items[iID];
		var title = '<b>' + iobj.name + '</b><hr />';
		var is_f = true;
		for (var a in iobj.bonus.attributes){
		    if (!is_f){
			title += '<br />';
		    }
		    else{
			is_f = false;
		    }
		    title += '<b>' + Character.attribute_titles[a] + ':' + iobj.bonus.attributes[a] + '</b>';
		}
		for (var s in iobj.bonus.skills){
		    if (!is_f){
			title += '<br />';
		    }
		    else{
			is_f = false;
		    }
		    title += Character.skill_titles[s] + ':' + iobj.bonus.skills[s];
		}
		if (iobj.speed){
		    if (!is_f){
			title += '<br />';
		    }
		    else{
			is_f = false;
		    }
		    title += 'скорость: '+Math.round(100/iobj.speed)+'%';
		}
		if ((iobj.type == 'left_arm')||(iobj.type == 'right_arm')){
		    if (!is_f){
			title += '<br />';
		    }
		    title += 'урон: ' + iobj.damage.damage_min + ' - ' + iobj.damage.damage_max + ' (' + parseInt((iobj.damage.damage_min + iobj.damage.damage_max)/2, 10) + ' cp.)';
		};
		title += '<hr />';
		if (iobj.set.key){
		    title += iobj.set.name +'<hr />';
		};
		title += 'уровень: ' + (iobj.level ? iobj.level : '0') + '<br />';
		title += 'цена: ' + iobj.price + '$';
		title += '<hr />Кликнуть, чтобы одеть предмет'
		var aa = new Element ('a', {'href':'javascript:PK_S3_TEST.equip_add('+iID+');void(0);'});
		var classi = (PK_S3_TEST.svoi_veschi[iID]) ? 'bug_mini' : 'bug_mini_red';
		var img = new Element ('img', {'src':iobj.image_mini, 'class':classi, 'title':title});
		aa.appendChild(img);
		div1.appendChild(aa);
		if ((arr[i].ind < PK_S3_TEST.raboty.fort_min)||(arr[i].ind >= PK_S3_TEST.raboty.fort_max)){
		    var podp = new Element ('div', {'style':'text-align:center;'});
		    podp.textContent = PK_S3_TEST.resultaty[arr[i].ind].itemsto[PK_S3_TEST.types[j]];
		    div1.appendChild(podp);
		}
	    }
	    divIIb.appendChild(div1);
	}
	if (no_item_fort){
	    var div1 = new Element('div', {'style':'font-weight:bold;'});
	    div1.textContent = 'Слишком большое значение здоровья. Нет ни одного набора удовлетворяющего требованию!';
	    divIIb.appendChild(div1);
	}
	divII.appendChild(divIIb);
	div0.appendChild(divII);
	main.appendChild(div0);
    }
}

PK_S3_TEST.minimize_window_rezult = function(){
    AjaxWindow.toggleSize('pereodevalka_rezult');
    setTimeout(PK_S3_TEST.minimize_window_rezult2, 100);
};

PK_S3_TEST.minimize_window_rezult2 = function(){
    var bar = $('window_bar_pereodevalka_rezult');
    if (!bar){
        setTimeout(PK_S3_TEST.minimize_window_rezult2, 100);
	return;
    }
    bar.firstChild.firstChild.nextSibling.innerHTML='Результаты (beta)';
};


PK_S3_TEST.show_window_rezultat = function (){
    var name = 'pereodevalka_rezult';
    var group = 'work';
    var window_div = $('window_' + name);
    
    if (!window_div){
	window_div = new Element('div',{'id':'window_' + name,'class':'window css_work'});
	AjaxWindow.windows[name] = window_div;
	window_div.injectInside('windows');
	window_div.centerLeft();
    }
    else{
	AjaxWindow.maximize (name);
	window_div.innerHTML = '';
    }
    AjaxWindow.bringToTop(window_div);

    var xhtml = '';
    xhtml += '<div class="window_borders">';
    xhtml += '  <h2 id="window_' + name + '_title" class="window_title"> </h2>';
    xhtml += '	<a class="window_refresh" href="javascript:AjaxWindow.close(\'' + name + '\'); PK_S3_TEST.show_window_rezultat();void(0)" title="<b>Обновить окно</b>"></a>'
    xhtml += '  <a href="javascript:AjaxWindow.closeAll();" class="window_closeall" title="<b>Закрыть все окна</b>"></a>';
    xhtml += '  <a href="javascript:PK_S3_TEST.minimize_window_rezult();" class="window_minimize" title="<b>Свернуть окно</b>"></a>';
    xhtml += '  <a href="javascript:AjaxWindow.close(\'' + name + '\');" class="window_close" title="<b>Закрыть окно</b>"></a>';
    xhtml += '  <div id="window_' + name + '_content" class="window_content">';
    xhtml += '    	<table class="shadow_table" style="margin-left:6px; width:100%; height:390px">';
    xhtml += '    		<tr>';
    xhtml += '    			<td class="edge_shadow_top_left"></td>';
    xhtml += '    			<td class="border_shadow_top"></td>';
    xhtml += '    			<td class="edge_shadow_top_right"></td>';
    xhtml += '    		</tr>';
    xhtml += '    		<tr>';
    xhtml += '    			<td class="border_shadow_left"></td>';
    xhtml += '    			<td class="shadow_content">';
    xhtml += '    				<div style="overflow:none; width: 675px; height:390px; position: relative;" id="pk_s3_rezultaten_arbeiten">';
    xhtml += '    				</div>';
    xhtml += '    			</td>';
    xhtml += '    			<td class="border_shadow_right"></td>';
    xhtml += '    		</tr>';
    xhtml += '    		<tr>';
    xhtml += '    			<td class="edge_shadow_bottom_left"></td>';
    xhtml += '    			<td class="border_shadow_bottom"></td>';
    xhtml += '    			<td class="edge_shadow_bottom_right"></td>';
    xhtml += '	 		</tr>';
    xhtml += '	 	</table>';
    xhtml += '	</div>';
    xhtml += '</div>';
    window_div.setHTML(xhtml);
	
    var window_title_div = $('window_' + name + '_title');
    window_div.makeDraggable({handle:window_title_div});
    window_title_div.addEvent('dblclick',function(){
				window_div.centerLeft();
				window_div.setStyle('top',133);
				});
    window_div.addEvent('mousedown',AjaxWindow.bringToTop.bind(AjaxWindow,[window_div]));
    window_title_div.addEvent('mousedown',AjaxWindow.bringToTop.bind(AjaxWindow,[window_div]));

    if (PK_S3_TEST.activity == 'nenuzhnoe'){
	PK_S3_TEST.vyvod_nenuzhnykh_items();
	return;
    }
    var wind = document.getElementById('pk_s3_rezultaten_arbeiten');
    var sortir = new Element('div', {'style':'padding: 2px; width:670px; height: 28px; border-bottom: 2px solid #321;'});
    var span = new Element('div', {'style':'padding: 3px; border-right: 2px solid #321; float:left; height:20px;'});
    span.textContent = 'Способ сортировки: ';
    sortir.appendChild(span);
    var span = new Element('div', {'style':'padding: 3px; border-right: 2px solid #321; float:left; height:20px;', 'id':'pk_s3_sortirovka_name'});
    span.innerHTML = '<a href="javascript:PK_S3_TEST.sortirovka_rabot(\'name\', PK_S3_TEST.vyvod.type)"><img src=\"../images/work/icons/work.png\" title=\"Название\" /></a>'
    sortir.appendChild(span);
    var span = new Element('div', {'style':'padding: 3px; border-right: 2px solid #321; float:left; height:20px;', 'id':'pk_s3_sortirovka_opyt'});
    span.innerHTML = '<a href="javascript:PK_S3_TEST.sortirovka_rabot(\'opyt\', PK_S3_TEST.vyvod.type)"><img src=\"../images/work/icons/experience.png\" title=\"Опыт\" /></a>';
    sortir.appendChild(span);
    var span = new Element('div', {'style':'padding: 3px; border-right: 2px solid #321; float:left; height:20px;', 'id':'pk_s3_sortirovka_dengi'});
    span.innerHTML = '<a href="javascript:PK_S3_TEST.sortirovka_rabot(\'dengi\', PK_S3_TEST.vyvod.type)"><img src=\"../images/work/icons/dollar.png\" title=\"Заработок\" /></a>';
    sortir.appendChild(span);
    var span = new Element('div', {'style':'padding: 3px; border-right: 2px solid #321; float:left; height:20px;', 'id':'pk_s3_sortirovka_vezenie'});
    span.innerHTML = '<a href="javascript:PK_S3_TEST.sortirovka_rabot(\'vezenie\', PK_S3_TEST.vyvod.type)"><img src=\"../images/work/icons/luck.png\" title=\"Удача\" /></a>';
    sortir.appendChild(span);
    var span = new Element('div', {'style':'padding: 3px; border-right: 2px solid #321; float:left; height:20px;', 'id':'pk_s3_sortirovka_boom'});
    span.innerHTML = '<a href="javascript:PK_S3_TEST.sortirovka_rabot(\'boom\', PK_S3_TEST.vyvod.type)"><img src=\"images/job/danger.png\" width="20" height="20" title=\"Опасность\" /></a>';
    sortir.appendChild(span);
    var span = new Element('div', {'style':'padding: 3px; border-right: 2px solid #321; float:left; height:20px;', 'id':'pk_s3_sortirovka_to'});
    span.innerHTML = '<a href="javascript:PK_S3_TEST.sortirovka_rabot(\'to\', PK_S3_TEST.vyvod.type)"><img src=\"../images/work/icons/workpoints.png\" title=\"Трудовые очки\" /></a>';
    sortir.appendChild(span);
    var span = new Element('div', {'style':'padding: 3px; border-right: 2px solid #321; float:left; height:20px;', 'id':'pk_s3_sortirovka_malus'});
    span.innerHTML = '<a href="javascript:PK_S3_TEST.sortirovka_rabot(\'malus\', PK_S3_TEST.vyvod.type)"><img src=\"../images/work/icons/malus.png\" title=\"Требования\" /></a>';
    sortir.appendChild(span);
    var span = new Element('div', {'style':'padding: 3px; border-left: 2px solid #321; float:right; height:20px;'});
    var inp = new Element ('input', {'id':'pk_s3_sortirovka_native', 'title':'Учитывать эффект от текущих ТО', 'type':'checkbox', 'checked':'true', 'style':'margin: 5px 5px 5px 0px;'});
    inp.addEventListener('change',function () {PK_S3_TEST.sortirovka_rabot(PK_S3_TEST.vyvod.type);}, false);
    span.appendChild(inp);
    sortir.appendChild(span);
    var span = new Element('div', {'style':'padding: 3px; border-left: 2px solid #321; float:right; height:20px;'});
    var valueto = (PK_S3_TEST.activity=='alljob')? 0 : -999;
    var inp = new Element ('input', {'id':'pk_s3_sortirovka_valueto', 'type':'text', 'size':'3', 'value':valueto, 'title':'Отсекать с ТО, меньше чем:', 'style':'background-color:#e8dab3; margin: 0px 5px;'});
    inp.addEventListener('change',function () {this.value = parseInt(this.value); if (isNaN(this.value)) this.value=0; PK_S3_TEST.sortirovka_rabot(PK_S3_TEST.vyvod.type);}, false);
    span.appendChild(inp);
    sortir.appendChild(span);
    
    var span = new Element('div', {'style':'padding: 3px; border-left: 2px solid #321; float:right; height:21px; width:80px;'});
    var sel = new Element ('select', {'id':'restore_except_raboty','style':'background-color:#e8dab3; margin: 0px 1px; width: 50px; height:21px;'})
    var opt = new Element ('option', {'value':0});
    opt.textContent = '----';
    sel.appendChild(opt);
    for (var i = 1; i < 999; ++i){
	if (PK_S3_TEST.raboty[i] && PK_S3_TEST.raboty[i].except){
	    var opt = new Element ('option', {'value':i});
	    opt.textContent = PK_S3_TEST.raboty[i].rus_name;
	    sel.appendChild(opt);
	}
    }
    span.appendChild(sel);
    var img = new Element ('img', {'style':'width:23px; height:23px; background:url("../images/window/messages/icons.png") -25px -4px; display:inline; margin: 0px 2px;', 'src':'/images/transparent.png', 'title':'Восстановить работу'});
    img.addEventListener('click',function () {var sel = $('restore_except_raboty'); var ind = parseInt(sel.value, 10); if (ind > 0) PK_S3_TEST.except_raboty(ind, false);}, false);
    span.appendChild(img)

    sortir.appendChild(span);
    wind.appendChild(sortir);

    var text = new Element ('div',{'style':'margin:2px; width:675px; height:350px; overflow-y:scroll; overflow-x:none;', 'id':'pk_s3_rezultaten_arbeiten0'});
    text.value = (PK_S3_TEST.rezultat);
    wind.appendChild(text);

    PK_S3_TEST.sortirovka_rabot('name');
  
};


PK_S3_TEST.four_init = function (name){
    PK_S3_TEST.tekushaya_rabota = 0;
    PK_S3_TEST.resultaty = [];

    
    PK_S3_TEST.bonus.speed = (Character.characterClass != 'duelist') ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.2 : 1.1;
    PK_S3_TEST.bonus.money = (PremiumBoni.hasBonus('money')) ? 1.5 : 1.0;
    PK_S3_TEST.bonus.life = (Character.characterClass != 'soldier') ? 10 : (PremiumBoni.hasBonus('character')) ? 20 : 15;
    PK_S3_TEST.bonus.exp = (Character.characterClass) != 'worker' ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.1 : 1.05;
    PK_S3_TEST.bonus.build = (Character.characterClass) != 'worker' ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.1 : 1.05;
    PK_S3_TEST.bonus.weapon = (Character.characterClass != 'soldier') ? 0 : (PremiumBoni.hasBonus('character')) ? 6 : 3;

    PK_S3_TEST.setting = {};
    PK_S3_TEST.setting.knopka = 'poehali';
    PK_S3_TEST.setting.bablo = 0;
    PK_S3_TEST.setting.is_millioner = false;
    PK_S3_TEST.setting.is_auction = false;
    PK_S3_TEST.setting.is_drop = false;
    PK_S3_TEST.setting.is_luck = false;
    PK_S3_TEST.setting.is_unique = false;
    PK_S3_TEST.setting.level = Character.level
    PK_S3_TEST.setting.slots = {};
    var slot_id = 'pk_s3_select_slot_';
    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	PK_S3_TEST.setting.slots[i] = 0;
	PK_S3_TEST.setting.slots[PK_S3_TEST.types[i]] = PK_S3_TEST.setting.slots[i];
    }

    var hp = 0;
    PK_S3_TEST.setting.min_health = (hp - 90 - Character.level * 10 - Character.skills.health * PK_S3_TEST.bonus.life) / PK_S3_TEST.bonus.life;
    PK_S3_TEST.setting.porabotaem = [];
    PK_S3_TEST.setting.s4itaem_rabot = 0;
    PK_S3_TEST.setting.sej4as_rabota = 0;

    for (var ind = PK_S3_TEST.raboty.max - 1; ind > 0; --ind){
        if (PK_S3_TEST.raboty[ind]){
	    if ((PK_S3_TEST.raboty[ind].rus_name == name)||(PK_S3_TEST.raboty[ind].orig_name == name)){
		PK_S3_TEST.setting.porabotaem[ind] = true;
		++PK_S3_TEST.setting.s4itaem_rabot;
		break;
	    }
	}
    }
    var minimap_job = $('minimap_job_id');
    if (minimap_job){
	minimap_job.value = ind;
    }
    PK_S3_TEST.activity = 'onejob';
    PK_S3_TEST.rezultat = '';
    PK_S3_TEST.is_show_inventory = null;
    setTimeout(PK_S3_TEST.waiting_inventory, PK_S3_TEST.rekurs.delay);
}

PK_S3_TEST.second_init = function (){
    //clearInterval(PK_S3_TEST.progress.id);
    PK_S3_TEST.tekushaya_rabota = 0;
    PK_S3_TEST.resultaty = [];
    PK_S3_TEST.ispolzuemye = [];
    
    PK_S3_TEST.bonus.speed = (Character.characterClass != 'duelist') ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.2 : 1.1;
    PK_S3_TEST.bonus.money = (PremiumBoni.hasBonus('money')) ? 1.5 : 1.0;
    PK_S3_TEST.bonus.life = (Character.characterClass != 'soldier') ? 10 : (PremiumBoni.hasBonus('character')) ? 20 : 15;
    PK_S3_TEST.bonus.exp = (Character.characterClass) != 'worker' ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.1 : 1.05;
    PK_S3_TEST.bonus.build = (Character.characterClass) != 'worker' ? 1.0 : (PremiumBoni.hasBonus('character')) ? 1.1 : 1.05;
    PK_S3_TEST.bonus.weapon = (Character.characterClass != 'soldier') ? 0 : (PremiumBoni.hasBonus('character')) ? 6 : 3;

    PK_S3_TEST.setting = {};
    PK_S3_TEST.setting.knopka = (this.id == 'pk_s3_poehali') ? 'poehali' : 'to';
    PK_S3_TEST.setting.bablo = parseInt(document.getElementById('pk_s3_select_baks_n').value,10);
    PK_S3_TEST.setting.is_millioner = document.getElementById('pk_s3_select_baks_inf').checked;
    PK_S3_TEST.setting.is_auction = document.getElementById('pk_s3_select_auction').checked;
    //PK_S3_TEST.setting.is_drop = document.getElementById('pk_s3_select_drop').checked;
    PK_S3_TEST.setting.is_unique = document.getElementById('pk_s3_select_unique').checked;
    PK_S3_TEST.setting.is_luck = document.getElementById('pk_s3_select_season').checked;
    PK_S3_TEST.setting.level = parseInt(document.getElementById('pk_s3_select_level').value,10);
    if (PK_S3_TEST.setting.level<=0) PK_S3_TEST.setting.level = Character.level
    PK_S3_TEST.setting.slots = {};
    var slot_id = 'pk_s3_select_slot_';
    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	elc = document.getElementById(slot_id + i);
	PK_S3_TEST.setting.slots[i] = parseInt(elc.value, 10);;
	PK_S3_TEST.setting.slots[PK_S3_TEST.types[i]] = PK_S3_TEST.setting.slots[i];
    }

    var hp = parseInt(document.getElementById('pk_s3_select_hp').value,10);
    PK_S3_TEST.setting.min_health = (hp - 90 - Character.level * 10 - Character.skills.health * PK_S3_TEST.bonus.life) / PK_S3_TEST.bonus.life;
    PK_S3_TEST.setting.porabotaem = [];
    PK_S3_TEST.setting.s4itaem_rabot = 0;
    PK_S3_TEST.setting.sej4as_rabota = 0;
    
    var els = document.getElementById('pk_s3_select_rab');
    var el = document.getElementById('pk_s3_select_rab_ro');
    if (el.checked){
	var ind = parseInt(els.value, 10);
	PK_S3_TEST.setting.porabotaem[ind] = true;
	++PK_S3_TEST.setting.s4itaem_rabot;
	PK_S3_TEST.activity = 'onejob';
	var minimap_job = $('minimap_job_id');
	if (minimap_job){
	    minimap_job.value = ind;
	}
    }
    el = document.getElementById('pk_s3_select_rab_rn');
    if (el.checked){
	for (var i = 0; i < els.options.length; ++i){
	    if (els.options[i] && els.options[i].selected){
		var ind = parseInt(els.options[i].value, 10)
		PK_S3_TEST.setting.porabotaem[ind] = true;
		++PK_S3_TEST.setting.s4itaem_rabot;
	    }
	}
	PK_S3_TEST.activity = 'morejob';
    }
    el = document.getElementById('pk_s3_select_rab_rv');
    if (el.checked){
	for (var ind = 0; ind < PK_S3_TEST.raboty.max; ++ind){
	    if (PK_S3_TEST.raboty[ind]&&(!PK_S3_TEST.raboty[ind].except)){
		PK_S3_TEST.setting.porabotaem[ind] = true;
		++PK_S3_TEST.setting.s4itaem_rabot;
	    }
	}
	if (!PK_S3_TEST.raboty[PK_S3_TEST.raboty.build].except){
	    PK_S3_TEST.setting.porabotaem[PK_S3_TEST.raboty.build] = true;
	    ++PK_S3_TEST.setting.s4itaem_rabot;
	}
	if (!PK_S3_TEST.raboty[PK_S3_TEST.raboty.energy].except){
	    PK_S3_TEST.setting.porabotaem[PK_S3_TEST.raboty.energy] = true;
	    ++PK_S3_TEST.setting.s4itaem_rabot;
	}
	if (!PK_S3_TEST.raboty[PK_S3_TEST.raboty.health].except){
	    PK_S3_TEST.setting.porabotaem[PK_S3_TEST.raboty.health] = true;
	    ++PK_S3_TEST.setting.s4itaem_rabot;
	}
	if (!PK_S3_TEST.raboty[PK_S3_TEST.raboty.moving].except){
	    PK_S3_TEST.setting.porabotaem[PK_S3_TEST.raboty.moving] = true;
	    ++PK_S3_TEST.setting.s4itaem_rabot;
	}
	PK_S3_TEST.activity = 'alljob';
    }
    var el = document.getElementById('pk_s3_select_rab_do');
    if (el.checked){
	var ind = parseInt(els.value, 10);
	PK_S3_TEST.setting.porabotaem[ind] = true;
	++PK_S3_TEST.setting.s4itaem_rabot;
	PK_S3_TEST.activity = 'oneduel';
    }
    el = document.getElementById('pk_s3_select_rab_dn');
    if (el.checked){
	for (var i = 0; i < els.options.length; ++i){
	    if (els.options[i] && els.options[i].selected){
		var ind = parseInt(els.options[i].value, 10)
		PK_S3_TEST.setting.porabotaem[ind] = true;
		++PK_S3_TEST.setting.s4itaem_rabot;
	    }
	}
	PK_S3_TEST.activity = 'moreduel';
    }
    el = document.getElementById('pk_s3_select_rab_dv');
    if (el.checked){
	for (var ind = PK_S3_TEST.raboty.duel_min; ind < PK_S3_TEST.raboty.duel_max; ++ind){
	    if (PK_S3_TEST.raboty[ind]&&(!PK_S3_TEST.raboty[ind].except)){
		PK_S3_TEST.setting.porabotaem[ind] = true;
		++PK_S3_TEST.setting.s4itaem_rabot;
	    }
	}
	PK_S3_TEST.activity = 'allduel';
    }
    var el = document.getElementById('pk_s3_select_rab_fo');
    if (el.checked){
	var ind = parseInt(els.value, 10);
	PK_S3_TEST.setting.porabotaem[ind] = true;
	++PK_S3_TEST.setting.s4itaem_rabot;
	PK_S3_TEST.activity = 'onefort';
    }
    el = document.getElementById('pk_s3_select_rab_fn');
    if (el.checked){
	for (var i = 0; i < els.options.length; ++i){
	    if (els.options[i] && els.options[i].selected){
		var ind = parseInt(els.options[i].value, 10)
		PK_S3_TEST.setting.porabotaem[ind] = true;
		++PK_S3_TEST.setting.s4itaem_rabot;
	    }
	}
	PK_S3_TEST.activity = 'morefort';
    }
    el = document.getElementById('pk_s3_select_rab_fv');
    if (el.checked){
	for (var ind = PK_S3_TEST.raboty.fort_min; ind < PK_S3_TEST.raboty.fort_max; ++ind){
	    if (PK_S3_TEST.raboty[ind]&&(!PK_S3_TEST.raboty[ind].except)){
		PK_S3_TEST.setting.porabotaem[ind] = true;
		++PK_S3_TEST.setting.s4itaem_rabot;
	    }
	}
	PK_S3_TEST.activity = 'allfort';
    }
    var el = document.getElementById('pk_s3_select_rab_oo');
    if (el.checked){
	var el1 = document.getElementById('pk_s3_select_nav');
	var ind = parseInt(el1.value, 10);
	if (ind < 100){ // навык
	    var nav = PK_S3_TEST.skills[ind]
	    for (var is = 1; is < PK_S3_TEST.raboty.max; ++is){
		if (!PK_S3_TEST.raboty[is]) continue;
		for (var ind1 in PK_S3_TEST.raboty[is].navyki){
		    if (ind1 == nav){
			PK_S3_TEST.setting.porabotaem[is] = true;
			++PK_S3_TEST.setting.s4itaem_rabot;
		    }
		}
	    }
	    for (var ind1 in PK_S3_TEST.raboty[PK_S3_TEST.raboty.build]){
		if (ind1 == nav){
		    PK_S3_TEST.setting.porabotaem[PK_S3_TEST.raboty.build] = true;
		    ++PK_S3_TEST.setting.s4itaem_rabot;
		}
	    }
	    if (nav == 'ride'){
		PK_S3_TEST.setting.porabotaem[PK_S3_TEST.raboty.moving] = true;
		++PK_S3_TEST.setting.s4itaem_rabot;
	    }
	}
	else{
	    var atr = PK_S3_TEST.attributes[ind - 100];
	    var navs = Character.skill_names[atr].toString().split(',');
	    navb = {};
	    for (var i = 0; i < navs.length; ++i){
		navb[navs[i]] = true;
	    }
	    for (var ia = 1; ia < PK_S3_TEST.raboty.max; ++ia){
		if (!PK_S3_TEST.raboty[ia]) continue;
		var count = 0;
		for (var ind1 in PK_S3_TEST.raboty[ia].navyki){
		    if (navb[ind1]){
			count += PK_S3_TEST.raboty[ia].navyki[ind1];
		    }
		}
		if (count >= 3){
		    PK_S3_TEST.setting.porabotaem[ia] = true;
		    ++PK_S3_TEST.setting.s4itaem_rabot;
		}
	    }
	    if (atr=='strength'){
		PK_S3_TEST.setting.porabotaem[PK_S3_TEST.raboty.build] = true;
		++PK_S3_TEST.setting.s4itaem_rabot;
	    }
	}
	PK_S3_TEST.activity = 'skill';
    }
    var el = document.getElementById('pk_s3_select_rab_on');
    if (el.checked){
	var el1 = document.getElementById('pk_s3_select_product');
	var ind = parseInt(el1.value, 10);
	for (var id = 0; id < PK_S3_TEST.raboty.max; ++id){
	    if (!PK_S3_TEST.raboty[id]) continue;
	    
	    for (var ind1 in PK_S3_TEST.raboty[id].resultaty.produkty){
		if (ind == ind1){
		    PK_S3_TEST.setting.porabotaem[id] = true;
		    ++PK_S3_TEST.setting.s4itaem_rabot;
		    var minimap_job = $('minimap_job_id');
		    if (minimap_job){
			minimap_job.value = id;
		    }
		}
	    }
	}
	PK_S3_TEST.activity = 'produkt';
    }
    var el = document.getElementById('pk_s3_select_rab_ov');
    if (el.checked){
	for (var ind = 0; ind < 999; ++ind){
	    if (PK_S3_TEST.raboty[ind]&&(!PK_S3_TEST.raboty[ind].except)){
		PK_S3_TEST.setting.porabotaem[ind] = true;
		++PK_S3_TEST.setting.s4itaem_rabot;
	    }
	}
	PK_S3_TEST.activity = 'nenuzhnoe';
    }
    var el = document.getElementById('pk_s3_select_konstr_en');
    if (el.checked){
	PK_S3_TEST.raboty[999] = {rus_name:'Конструктор', name:'constructor', malus:0, navyki:{}, resultaty:{dengi:0, opyt:0, vezenie:0, boom:0, produkty:{}}};
	var el1 = document.getElementById('pk_s3_select_konstr_to');
	PK_S3_TEST.raboty[999].malus = parseInt (el1.value, 10);
	for (var j = 0; j < 4; ++j){
	    var el2 = document.getElementById('pk_s3_select_konstr_a'+j);
	    var val = parseFloat(el2.value, 10);
	    if (val > 0){
		PK_S3_TEST.raboty[999].navyki[PK_S3_TEST.attributes[j]] = val;
	    }
	}
	for (var i = 0; i < 20; ++i){
	    var el2 = document.getElementById('pk_s3_select_konstr_s'+i);
	    var val = parseFloat(el2.value, 10);
	    if (val > 0){
		PK_S3_TEST.raboty[999].navyki[PK_S3_TEST.skills[i]] = val;
	    }
	}
	PK_S3_TEST.setting.porabotaem[999]=true;
	++PK_S3_TEST.setting.s4itaem_rabot;
	PK_S3_TEST.activity = 'construct';
    }
    if (PK_S3_TEST.setting.porabotaem.length == 0) PK_S3_TEST.setting.porabotaem[0] = true;
    PK_S3_TEST.rezultat = '';
    PK_S3_TEST.is_show_inventory = null;
    setTimeout(PK_S3_TEST.waiting_inventory, PK_S3_TEST.rekurs.delay);
    
}

PK_S3_TEST.waiting_inventory = function (){
    if (PK_S3_TEST.text_info == '') PK_S3_TEST.restore_text_message();
    if ((wman.getById(Wear.uid)) && (Bag.loaded)){
	PK_S3_TEST.parsing_inventory();
	return;
    }
    if (!PK_S3_TEST.is_show_inventory){
	PK_S3_TEST.is_show_inventory = 0;
	//AjaxWindow.show('inventory');
	Wear.open();
	PK_S3_TEST.show_text_message('Ожидаем открытие багажа...',2000);
	setTimeout(function () {el = $('window_pereodevalka_setting'); if (el) AjaxWindow.bringToTop(el);}, 333);
    }
    if (PK_S3_TEST.is_show_inventory++ < 20){
	setTimeout(PK_S3_TEST.waiting_inventory, 1000);
    }
    else{
	PK_S3_TEST.show_popup_message ('error', 'Предварительно откройте окно багажа');
    }
};

PK_S3_TEST.show_popup_message = function (state, str){
    new HumanMessage(str, {type: state});
}

PK_S3_TEST.show_text_message = function (str, delay){
    if (PK_S3_TEST.text_info == ''){
	PK_S3_TEST.restore_text_message();
    }
    var current_task = $('current_task_box_text');
    if (!current_task) return;
    current_task.textContent = str;
    setTimeout (PK_S3_TEST.restore_text_message, delay);
}

PK_S3_TEST.restore_text_message = function (){
    var current_task = $('current_task_box_text');
    if (!current_task) return;
    if (PK_S3_TEST.text_info==''){
	PK_S3_TEST.text_info = current_task.innerHTML;
    }
    else{
	current_task.innerHTML = PK_S3_TEST.text_info;
	PK_S3_TEST.text_info = '';
    }
}

PK_S3_TEST.compare_item = function (obj){
    var cID = obj.item_id;
    var opisv = false;
    if (!PK_S3_TEST.items[cID]){return {err:false, mis:true, opis:false}; }
    if (!PK_S3_TEST.items[cID].item_id) {return {err:false, mis:true, opis:false}; }
    if (cID != PK_S3_TEST.items[cID].item_id) {return {err:true, mis:false, opis:false}; }
    if (!PK_S3_TEST.items[cID].type) {return {err:false, mis:true, opis:false}; }
    if (obj.type != PK_S3_TEST.items[cID].type) {return {err:true, mis:false, opis:false}; }
    if ((obj.level != PK_S3_TEST.items[cID].level)&&(obj.level)&&(PK_S3_TEST.items[cID].level)) {return {err:true, mis:false, opis:false}; }
    if ((obj.price != PK_S3_TEST.items[cID].price)&&(obj.price)&&(PK_S3_TEST.items[cID].price)) {return {err:true, mis:false, opis:false}; }
    if (obj.characterClass != PK_S3_TEST.items[cID].characterClass) {return {err:true, mis:false, opis:false}; }
    if (obj.characterSex != PK_S3_TEST.items[cID].characterSex) {return {err:true, mis:false, opis:false}; }
    if (!obj.speed){
	if (PK_S3_TEST.items[cID].speed)	return {err:true, mis:false, opis:false};
    }
    else{
	if (!PK_S3_TEST.items[cID].speed)	return {err:false, mis:true, opis:false};
	if (obj.speed!=PK_S3_TEST.items[cID].speed)	return {err:true, mis:false, opis:false};
    }
    for (var i = PK_S3_TEST.skills.length - 1; i >= 0; --i){
	var skill_name = PK_S3_TEST.skills[i];
	if (obj.bonus.skills[skill_name]&&PK_S3_TEST.items[cID].bonus.skills[skill_name]){
	    if (obj.bonus.skills[skill_name]!=PK_S3_TEST.items[cID].bonus.skills[skill_name])	return {err:true, mis:false, opis:false};
	}
	else if (obj.bonus.skills[skill_name])	    return {err:false, mis:true, opis:false};
	else if (PK_S3_TEST.items[cID].bonus.skills[skill_name])    return {err:true, mis:false, opis:false};	
    }
    for (var i = PK_S3_TEST.attributes.length - 1; i >= 0; --i){
	var attribute_name = PK_S3_TEST.attributes[i];
	if (obj.bonus.attributes[attribute_name]&&PK_S3_TEST.items[cID].bonus.attributes[attribute_name]){
	    if (obj.bonus.attributes[attribute_name]!=PK_S3_TEST.items[cID].bonus.attributes[attribute_name])	return {err:true, mis:false, opis:false};
	}
	else if (obj.bonus.attributes[attribute_name])	    return {err:false, mis:true, opis:false};
	else if (PK_S3_TEST.items[cID].bonus.attributes[attribute_name])    return {err:true, mis:false, opis:false};
    }

    if (obj.bonus.fortbattle){
	if (!PK_S3_TEST.items[cID].bonus.fortbattle)	return {err:false, mis:true, opis:false};
	for (var i = PK_S3_TEST.fort_affects.length - 1; i >= 0; --i){
	    if (obj.bonus.fortbattle[PK_S3_TEST.fort_affects[i]]){
		if (!PK_S3_TEST.items[cID].bonus.fortbattle[PK_S3_TEST.fort_affects[i]])	return {err:false, mis:true, opis:false};
		if (obj.bonus.fortbattle[PK_S3_TEST.fort_affects[i]] != PK_S3_TEST.items[cID].bonus.fortbattle[PK_S3_TEST.fort_affects[i]])	return {err:true, mis:false, opis:false};
	    }
	    else{
		if (PK_S3_TEST.items[cID].bonus.fortbattle[PK_S3_TEST.fort_affects[i]])	return {err:true, mis:false, opis:false};
	    }
	}
    }
    else{
	if (PK_S3_TEST.items[cID].bonus.fortbattle)	return {err:true, mis:false, opis:false};
    }
    for (var i = PK_S3_TEST.fort_affects.length - 1; i >= 0; --i){
	if (obj.bonus.fortbattlesector[PK_S3_TEST.fort_affects[i]]){
	    if (!PK_S3_TEST.items[cID].bonus.fortbattlesector[PK_S3_TEST.fort_affects[i]])	return {err:false, mis:true, opis:false};
	    if (obj.bonus.fortbattlesector[PK_S3_TEST.fort_affects[i]] != PK_S3_TEST.items[cID].bonus.fortbattlesector[PK_S3_TEST.fort_affects[i]])	return {err:true, mis:false, opis:false};
	}
	else{
	    if (PK_S3_TEST.items[cID].bonus.fortbattlesector[PK_S3_TEST.fort_affects[i]])	return {err:true, mis:false, opis:false};
	}
    }
    if (!obj.set){
	if (PK_S3_TEST.items[cID].set.key)	return {err:true, mis:false, opis:false};
    }
    else{
	if (!PK_S3_TEST.items[cID].set.key)	return {err:false, mis:true, opis:false};
	if (obj.set.key!=PK_S3_TEST.items[cID].set.key)	return {err:true, mis:false, opis:false};
	if (PK_S3_TEST.vyvod.region=='ru'){
	    if (obj.set.name!=PK_S3_TEST.items[cID].set.name)	opisv=true;
	}
    }
    if (!obj.damage){
	if (PK_S3_TEST.items[cID].damage)	return {err:true, mis:false, opis:false};
    }
    else{
	if (!PK_S3_TEST.items[cID].damage)	return {err:false, mis:true, opis:false};
	if (obj.damage.damage_min!=PK_S3_TEST.items[cID].damage.damage_min)	return {err:true, mis:false, opis:false};
	if (obj.damage.damage_max!=PK_S3_TEST.items[cID].damage.damage_max)	return {err:true, mis:false, opis:false};
    }
    if (!obj.traderlevel){
	if (PK_S3_TEST.items[cID].traderlevel)	return {err:true, mis:false, opis:false};
    }
    else{
	if (!PK_S3_TEST.items[cID].traderlevel)	return {err:false, mis:true, opis:false};
	if (obj.traderlevel!=PK_S3_TEST.items[cID].traderlevel)	return {err:true, mis:false, opis:false};
    }
    if (!obj.auctionable){
	if (PK_S3_TEST.items[cID].auctionable)	return {err:true, mis:false, opis:false};
    }
    else{
	if (!PK_S3_TEST.items[cID].auctionable)	return {err:false, mis:true, opis:false};
    }
    if (!obj.dropable){
	if (PK_S3_TEST.items[cID].dropable)	return {err:true, mis:false, opis:false};
    }
    else{
	if (!PK_S3_TEST.items[cID].dropable)	return {err:false, mis:true, opis:false};
    }
    
    if (!obj.tradeable){
	if (PK_S3_TEST.items[cID].tradeable)	return {err:true, mis:false, opis:false};
    }
    else{
	if (!PK_S3_TEST.items[cID].tradeable)	return {err:false, mis:true, opis:false};
    }
    
    if (!obj.sellable){
	if (PK_S3_TEST.items[cID].sellable)	return {err:true, mis:false, opis:false};
    }
    else{
	if (!PK_S3_TEST.items[cID].sellable)	return {err:false, mis:true, opis:false};
    }
//sub_type
    if (!obj.sub_type){
	if (PK_S3_TEST.items[cID].sub_type)	return {err:true, mis:false, opis:false};
    }
    else{
	if (obj.sub_type!=PK_S3_TEST.items[cID].sub_type)	return {err:true, mis:false, opis:false};
    }
    if (obj.short != PK_S3_TEST.items[cID].nshort)	opisv = true;
    if (PK_S3_TEST.vyvod.region=='ru'){
	if (obj.name != PK_S3_TEST.items[cID].name)	opisv = true;
    }
    if (obj.image != PK_S3_TEST.items[cID].image)	opisv = true;
    if (obj.image_mini != PK_S3_TEST.items[cID].image_mini)	opisv = true;
    return {err:false, mis:false, opis:opisv};
};

PK_S3_TEST.assign_item = function (obj){
    var cID = obj.item_id;
    PK_S3_TEST.items[cID] = {item_id:obj.item_id, nshort:obj.short, name:obj.name, type:obj.type, level:obj.level, price:obj.price, image:obj.image, image_mini:obj.image_mini, characterClass:obj.characterClass, characterSex:obj.characterSex, speed:obj.speed, bonus:obj.bonus, set:obj.set, traderlevel:obj.traderlevel, auctionable:obj.auctionable, dropable:obj.dropable, tradeable:obj.tradeable, sellable:obj.sellable};
    if (!PK_S3_TEST.items[cID].bonus)	PK_S3_TEST.items[cID].bonus	= {};
    if (!PK_S3_TEST.items[cID].bonus.skills)	PK_S3_TEST.items[cID].bonus.skills = {};
    if (!PK_S3_TEST.items[cID].bonus.attributes)	PK_S3_TEST.items[cID].bonus.attributes = {};
    if (!PK_S3_TEST.items[cID].bonus.fortbattle)	PK_S3_TEST.items[cID].bonus.fortbattle = {};
    if (!PK_S3_TEST.items[cID].bonus.fortbattlesector)	PK_S3_TEST.items[cID].bonus.fortbattlesector = {};
    if (!PK_S3_TEST.items[cID].set)	PK_S3_TEST.items[cID].set = {key:null, name:null};
    if (obj.damage)	PK_S3_TEST.items[cID].damage = obj.damage;
    if (obj.sub_type)	PK_S3_TEST.items[cID].sub_type = obj.sub_type;
};

PK_S3_TEST.print_item = function (cID){
    var str='';
    obj = PK_S3_TEST.items[cID];
    str += '    PK_S3_TEST.items['+cID+'] = {item_id:'+cID+', nshort:\''+obj.nshort;
    var cl = (obj.level) ? obj.level : '0'
    str += '\', name:\'' + obj.name + '\', type:\''+obj.type+'\', level:'+cl;
    var cp = obj.price ? obj.price : 0;
    str += ', price:'+cp+', image:\''+obj.image+'\', image_mini:\''+obj.image_mini+'\'';
    if (obj.characterClass) str += ', characterClass:\''+ obj.characterClass + '\'';
    if (obj.characterSex) str += ', characterSex:\'' + obj.characterSex + '\'';
    if (obj.speed) str += ', speed:' + obj.speed;
    str += ', bonus:{skills:{';

    var ss = false;
    for (var i = PK_S3_TEST.skills.length - 1; i >= 0; --i){
	if (obj.bonus.skills[PK_S3_TEST.skills[i]]){
	    if (ss){
		str += ', ';
	    }
	    else ss = true;
	    str += PK_S3_TEST.skills[i]+':'+obj.bonus.skills[PK_S3_TEST.skills[i]];
	}
    }
    str += '}, attributes:{';
    var aa = false;
    for (var i = PK_S3_TEST.attributes.length - 1; i >= 0; --i){
	if (obj.bonus.attributes[PK_S3_TEST.attributes[i]]){
	    if (aa){
		str += ', ';
	    }
	    else aa = true;
	    str += PK_S3_TEST.attributes[i]+':'+obj.bonus.attributes[PK_S3_TEST.attributes[i]];
	}
    }
    str += '}, fortbattle:{';
    var fb = false;
    for (var i = PK_S3_TEST.fort_affects.length - 1; i >= 0; --i){
	if (obj.bonus.fortbattle[PK_S3_TEST.fort_affects[i]]){
	    if (fb){
		str += ', ';
	    }
	    else fb = true;
	    str += PK_S3_TEST.fort_affects[i]+':'+obj.bonus.fortbattle[PK_S3_TEST.fort_affects[i]];
	}
    }
    str += '}, fortbattlesector:{';
    var fb = false;
    for (var i = PK_S3_TEST.fort_affects.length - 1; i >= 0; --i){
	if (obj.bonus.fortbattlesector[PK_S3_TEST.fort_affects[i]]){
	    if (fb){
		str += ', ';
	    }
	    else fb = true;
	    str += PK_S3_TEST.fort_affects[i]+':'+obj.bonus.fortbattlesector[PK_S3_TEST.fort_affects[i]];
	}
    }
    str += '}}, set:{'
    if (obj.set.key) {
	str += 'key:\'' + obj.set.key + '\', name:\'' + obj.set.name + '\'';
    }
    str += '}';
    if (obj.traderlevel) str += ', traderlevel:' + obj.traderlevel;
    if (obj.auctionable) str += ', auctionable:' + obj.auctionable;
    if (obj.dropable) str += ', dropable:' + obj.dropable;
    if (obj.tradeable) str += ', tradeable:' + obj.tradeable;
    if (obj.sellable) str += ', sellable:' + obj.sellable;
    if (obj.damage){
	str += ', damage:{damage_min:' + obj.damage.damage_min + ', damage_max:' + obj.damage.damage_max + '}';
    }
    if (obj.sub_type){
	str += ', sub_type:\'' + obj.sub_type +'\'';
    }
    str += '};\n';
    return str;
}

PK_S3_TEST.parsing_inventory = function (){
    var bagazh = Bag.items;
    var odezhda = Wear.wear;
    PK_S3_TEST.svoi_veschi = [];
    PK_S3_TEST.vozmozhnye_veschi = [];
    PK_S3_TEST.nado_veschi = [];
    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	var typ = PK_S3_TEST.types[i];
	for (var vv in bagazh[typ]){
	    if (!bagazh[typ][vv].obj) continue;
	    var compar = PK_S3_TEST.compare_item(bagazh[typ][vv].obj);
	    if (compar.err||compar.mis||compar.opis){
	        PK_S3_TEST.assign_item(bagazh[typ][vv].obj);
	        PK_S3_TEST.informer += compar.err ? 'Информация о предмете неверна:\n' : compar.mis ? 'Отсутвует/неполное описание предмета:\n' : 'Неверное наименование предмета:\n'
	        PK_S3_TEST.informer += PK_S3_TEST.print_item(bagazh[typ][vv].obj.item_id) + '\n';
	    }
	    PK_S3_TEST.svoi_veschi[bagazh[typ][vv].obj.item_id] = true;
	}
    }
    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	if (odezhda[PK_S3_TEST.types[i]]){
	    var compar = PK_S3_TEST.compare_item(odezhda[PK_S3_TEST.types[i]].obj);
	    if (compar.err||compar.mis||compar.opis){
		PK_S3_TEST.assign_item(odezhda[PK_S3_TEST.types[i]].obj);
		PK_S3_TEST.informer += compar.err ? 'Информация о предмете неверна:\n' : compar.mis ? 'Отсутвует/неполное описание предмета:\n' : 'Неверное наименование предмета:\n'
		PK_S3_TEST.informer += PK_S3_TEST.print_item(odezhda[PK_S3_TEST.types[i]].obj.item_id) + '\n';
	    }
	    PK_S3_TEST.svoi_veschi[odezhda[PK_S3_TEST.types[i]].obj.item_id] = true;
	    if (PK_S3_TEST.setting.slots[i] == 98){// забинден предмет из экипировки.
		PK_S3_TEST.setting.slots[i] = odezhda[PK_S3_TEST.types[i]].obj.item_id;
		PK_S3_TEST.setting.slots[PK_S3_TEST.types[i]] = odezhda[PK_S3_TEST.types[i]].obj.item_id;
	    }
	}
	else{
	    if (PK_S3_TEST.setting.slots[i] == 98){// забинден пустой слот из экипировки
		PK_S3_TEST.setting.slots[i] = 99;
		PK_S3_TEST.setting.slots[PK_S3_TEST.types[i]] = 99;
	    }
	}
    }
    if (PK_S3_TEST.informer != ''){
	PK_S3_TEST.show_window_informer();
    }
    PK_S3_TEST.otbor_vozmozhnyh()
};

PK_S3_TEST.otbor_vozmozhnyh = function (){
    for (var id in PK_S3_TEST.items){
	if (isNaN(id)) continue;
	var obj = PK_S3_TEST.items[id];
	// 0 - перебор, 99 - пустота, 98 - экипировка
	// отсекаем рецепты, и прочий крафт - там undefined
	if (PK_S3_TEST.setting.slots[obj.type] != 0) continue; 
	if (obj.characterClass&&(obj.characterClass != Character.characterClass)) continue;
	if (obj.characterSex&&(obj.characterSex != Character.characterSex)) continue;
	var lvl = PK_S3_TEST.setting.level;
	if ((obj.type=='left_arm')||(obj.type=='right_arm')) lvl += PK_S3_TEST.bonus.weapon;
	if (obj.level&&(obj.level>lvl)) continue;
	var add = false;
	if (!PK_S3_TEST.svoi_veschi[id]){// предмета в рюкзаке/экипировке нет. проверка на покупку/нахождение
	    var is_shop = obj.tradeable && obj.traderlevel && (obj.traderlevel <= 15);
	    if (is_shop){	// торгуется в магазинах
		if (PK_S3_TEST.setting.is_millioner){
		    add = true;
		}
		else if (PK_S3_TEST.setting.bablo >= obj.price){
		    add = true;
		}
	    }
	    if (PK_S3_TEST.setting.is_auction){
		if (obj.auctionable && !is_shop){
		    if (PK_S3_TEST.setting.is_millioner){
			add = true
		    }
		    else if (PK_S3_TEST.setting.bablo >= obj.price){
			add = true;
		    }
		}
	    }
	    if (PK_S3_TEST.setting.is_drop){	// удача, удача и ещё раз удача :)
		if (obj.dropable&& !is_shop){
		    add = true;
		}
	    }
	    if (PK_S3_TEST.setting.is_unique && !is_shop && !obj.auctionable && !obj.dropable){
		add = true;
	    }
	}
	else{	// своя вещь
	    add = true; 
	}
	if (add) PK_S3_TEST.vozmozhnye_veschi[id] = true;
    }
    // проверяем "бинды" экипировки/вещей
    for (var i = 0; i < 10; ++i){
	if (PK_S3_TEST.setting.slots[i] != 0){
	    if (PK_S3_TEST.setting.slots[i] == 99) continue;
	    PK_S3_TEST.vozmozhnye_veschi[PK_S3_TEST.setting.slots[i]] = true;
	    PK_S3_TEST.nado_veschi[PK_S3_TEST.setting.slots[i]] = true;
	}
    }
    if (PK_S3_TEST.setting.knopka=='poehali'){
	setTimeout(PK_S3_TEST.otbor_nuzhnykh, PK_S3_TEST.rekurs.delay);
    }
    else{
	setTimeout(PK_S3_TEST.prostoj_otbor_to, PK_S3_TEST.rekurs.delay);
    }
}

PK_S3_TEST.summa_to = function (bonus, navyki){
    var to = 0;
    for (var num_index in navyki){
	if (bonus.skills[num_index]){
	    to += bonus.skills[num_index] * navyki[num_index];
	}
	if (PK_S3_TEST.skill2atr[num_index] && bonus.attributes[PK_S3_TEST.skill2atr[num_index]]){
	    to+=bonus.attributes[PK_S3_TEST.skill2atr[num_index]] * navyki[num_index];
	}
	if (bonus.attributes[num_index]){
	    to += bonus.attributes[num_index] * navyki[num_index];
	}
    }
    return to;
};

PK_S3_TEST.summa_to2 = function (bonus, navyki){
    var to = 0;
    for (var num_index in navyki){
	if (bonus.skills[num_index]){
	    to += bonus.skills[num_index] * navyki[num_index];
	}
	else if (bonus.attributes[num_index]){
	    to += bonus.attributes[num_index] * navyki[num_index];
	}
    }
    
    return to;
}

PK_S3_TEST.cena_pods4eta = function(obj){
    var cID = obj.item_id;
    if (PK_S3_TEST.svoi_veschi[cID]) return 0;
    if (PK_S3_TEST.nado_veschi[cID]) return 0;
    var is_shop = obj.tradeable && obj.traderlevel && (obj.traderlevel <= 15);
    if (is_shop && PK_S3_TEST.setting.is_millioner)	return 0;
    if (obj.auctionable && !is_shop && PK_S3_TEST.setting.is_auction){
	if (PK_S3_TEST.setting.is_millioner){
	    return 0;
	}
    }
    if (obj.dropable &&  !is_shop && PK_S3_TEST.setting.is_drop)	return 0;
    if (PK_S3_TEST.setting.is_unique && !is_shop && !obj.auctionable && !obj.dropable) return 0;
    return obj.price;
}

PK_S3_TEST.prostoj_otbor_to = function(){
    for (var irabota in PK_S3_TEST.setting.porabotaem){
	if (isNaN(irabota))	continue;
	if (!PK_S3_TEST.setting.porabotaem[irabota])	continue;
	PK_S3_TEST.setting.porabotaem[irabota] = false;
	++PK_S3_TEST.setting.sej4as_rabota;
	if (irabota==0) {PK_S3_TEST.show_popup_message('error', 'Сначала выберите работу, дуэль, форт, конструктор или спец. перебор'); setTimeout(PK_S3_TEST.otbor_nuzhnykh, 100);continue};
	PK_S3_TEST.tekushaya_rabota = irabota;
	var crabota = PK_S3_TEST.raboty[irabota];
	var is_duel = ((irabota >= PK_S3_TEST.raboty.duel_min)&&(irabota < PK_S3_TEST.raboty.duel_max)) ? true : false;
	var hand_shot = Character.skills.punch - Character.skills.shot;
	if (is_duel){
	    if (crabota.navyki.punch){
		hand_shot = 100;
	    }
	    else if (crabota.navyki.shot){
		hand_shot = -100;
	    }
	}
	if (PK_S3_TEST.vyborka_to){
	    PK_S3_TEST.vyborka_to = null;
	}
	PK_S3_TEST.vyborka_to = [];
	for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	    PK_S3_TEST.vyborka_to[PK_S3_TEST.types[i]] = [];
	    PK_S3_TEST.vyborka_to[PK_S3_TEST.types[i]].push ({bonus:0, id:0});
	}
	for (var i in PK_S3_TEST.vozmozhnye_veschi){
	    if (isNaN(i)) continue;
	    var cID = i;
	    var vesch = PK_S3_TEST.items[cID];
	    var ochki = PK_S3_TEST.summa_to(vesch.bonus, crabota.navyki);
	    if (is_duel&&(vesch.type=='right_arm')){
		ochki += (vesch.damage.damage_min + vesch.damage.damage_max)/2;
		if (vesch.sub_type=='hand'){
		    ochki += hand_shot;
		}
		if (vesch.sub_type=='shot'){
		    ochki -= hand_shot;
		}
	    }
	    if ((ochki > 0)){
		for (var ind = PK_S3_TEST.vyborka_to[vesch.type].length; ind > 0; --ind){
		    if (PK_S3_TEST.vyborka_to[vesch.type][ind-1].bonus < ochki){
			if (PK_S3_TEST.vyborka_to[vesch.type].length == ind){
			    PK_S3_TEST.vyborka_to[vesch.type].push ({bonus: ochki, id: cID});
			}
			else{
			    PK_S3_TEST.vyborka_to[vesch.type].splice (ind, 0, {bonus: ochki, id: cID})
			}
			break;
		    }
		}
		if ((ind == 0)&&(PK_S3_TEST.vyborka_to[vesch.type].length < PK_S3_TEST.vsego_s_TO)){
		    PK_S3_TEST.vyborka_to[vesch.type].unshift ({bonus:ochki, id: cID})
		}
		else if (PK_S3_TEST.vyborka_to[vesch.type].length > PK_S3_TEST.vsego_s_TO){
		    PK_S3_TEST.vyborka_to[vesch.type].shift();
		}
	    }
	}
	for (var j = 0; is_duel && (j < PK_S3_TEST.vyborka_to.right_arm.length); ++j){
	    PK_S3_TEST.vyborka_to.right_arm[j].bonus -= (vesch.damage.damage_min + vesch.damage.damage_max)/2;
	    if (vesch.sub_type=='hand'){
		PK_S3_TEST.vyborka_to.right_arm[j].bonus -= hand_shot;
	    }
	    if (vesch.sub_type=='shot'){
		PK_S3_TEST.vyborka_to.right_arm[j].bonus += hand_shot;
	    }
	}
	PK_S3_TEST.podgotavlivaem_rezultat_to();
    }
    PK_S3_TEST.vyvod_prostyh_rabot();
}

PK_S3_TEST.otbor_nuzhnykh = function(){
    for (var irabota in PK_S3_TEST.setting.porabotaem){
	if (isNaN(irabota))	continue;
	if (!PK_S3_TEST.setting.porabotaem[irabota])	continue;
	PK_S3_TEST.setting.porabotaem[irabota] = false;
	++PK_S3_TEST.setting.sej4as_rabota;
	if (irabota==0) {PK_S3_TEST.show_popup_message('error', 'Сначала выберите работу, дуэль, форт, конструктор или спец. перебор'); setTimeout(PK_S3_TEST.otbor_nuzhnykh, 100);continue};
	if (irabota == PK_S3_TEST.raboty.moving){
	    PK_S3_TEST.otbor_nuzhnykh_moving();
	    return;
	}
	if (irabota == PK_S3_TEST.raboty.energy){
	    PK_S3_TEST.otbor_nuzhnykh_sleep();
	    return;
	}
	if ((irabota >= PK_S3_TEST.raboty.fort_min)&&(irabota < PK_S3_TEST.raboty.fort_max)){
	    PK_S3_TEST.otbor_nuzhnykh_fort(irabota);
	    return;
	}

	PK_S3_TEST.tekushaya_rabota = irabota;
	var crabota = PK_S3_TEST.raboty[irabota];
	var is_duel = ((irabota >= PK_S3_TEST.raboty.duel_min)&&(irabota < PK_S3_TEST.raboty.duel_max)) ? true : false;
	var hand_shot = Character.skills.punch - Character.skills.shot;
	if (is_duel){
	    if (crabota.navyki.punch){
		hand_shot = 100;
	    }
	    else if (crabota.navyki.shot){
		hand_shot = -100;
	    }
	}
	if (PK_S3_TEST.vyborka) PK_S3_TEST.vyborka = null;
	PK_S3_TEST.vyborka = [];
	for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	    PK_S3_TEST.vyborka[PK_S3_TEST.types[i]] = [];
	    for (var j = 0; j < PK_S3_TEST.nabory.length; ++j){
		PK_S3_TEST.vyborka[PK_S3_TEST.types[i]][PK_S3_TEST.nabory[j]] = null;
	    }
	    PK_S3_TEST.vyborka[PK_S3_TEST.types[i]]['simple'] = [];
	    PK_S3_TEST.vyborka[PK_S3_TEST.types[i]].simple[0] = {bonus: 0, price: 0, id: 0}
	}
	for (var i in PK_S3_TEST.vozmozhnye_veschi){
	    if (isNaN(i)) continue;
	    var cID = i;
	    var vesch = PK_S3_TEST.items[cID];
	    var ochki = PK_S3_TEST.summa_to(vesch.bonus, crabota.navyki);
	    if (is_duel&&(vesch.type=='right_arm')){
		ochki += (vesch.damage.damage_min + vesch.damage.damage_max)/2;
		if (vesch.sub_type=='hand'){
		    ochki += hand_shot;
		}
		if (vesch.sub_type=='shot'){
		    ochki -= hand_shot;
		}
	    }
	    var cena = PK_S3_TEST.cena_pods4eta(vesch);
	    if (vesch.set.key){
		if (!PK_S3_TEST.vyborka[vesch.type][vesch.set.key] || (PK_S3_TEST.vyborka[vesch.type][vesch.set.key].bonus <= ochki)){
		    PK_S3_TEST.vyborka[vesch.type][vesch.set.key] = {bonus: ochki, price: cena, id: cID};
		}
	    }
	    if (vesch.type=='animal'){
		if (PK_S3_TEST.vyborka.animal.simple.length > 0){
		    aID = PK_S3_TEST.vyborka.animal.simple[0].id;
		    if ((PK_S3_TEST.items[aID].speed > vesch.speed)&&(PK_S3_TEST.vyborka.animal.simple[0].bonus <= ochki)){
			PK_S3_TEST.vyborka.animal.simple[0] = {bonus: ochki, price:cena, id:cID}
		    }
		}
	    }
	    if ((ochki > 0)){
		var add = true;
		for (var ii = PK_S3_TEST.vyborka[vesch.type].simple.length - 1; ii >= 0 ; --ii){
		    if ((PK_S3_TEST.vyborka[vesch.type].simple[ii].bonus >= ochki) && (PK_S3_TEST.vyborka[vesch.type].simple[ii].price <= cena)){
			add = false; break;
		    }
		    if ((PK_S3_TEST.vyborka[vesch.type].simple[ii].bonus <= ochki) && (PK_S3_TEST.vyborka[vesch.type].simple[ii].price >= cena)){
			PK_S3_TEST.vyborka[vesch.type].simple.splice(ii,1);
			continue;
		    }
		}
		if (add) PK_S3_TEST.vyborka[vesch.type].simple.push( {bonus:ochki, price:cena, id: cID});
	    }
	}
	PK_S3_TEST.nabory_dlya_raboty = {};
	for (var i = 0; i < PK_S3_TEST.nabory.length; ++i){
	    PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[i]] = [];
	    for (var j = 1; j <= PK_S3_TEST.komplekty.max; ++j){
		var kompl = PK_S3_TEST.komplekty[PK_S3_TEST.nabory[i]][j];
		var tok = PK_S3_TEST.summa_to (kompl.bonus, crabota.navyki)
		if (kompl.raboty[irabota])
		    tok += kompl.raboty[irabota];
		PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[i]][j] = tok;
	    }
	}
	if (PK_S3_TEST.setting.is_luck){
	    for (var l = 0; l < PK_S3_TEST.types.length; ++l){
		//PK_S3_TEST.vyborka[PK_S3_TEST.types[i]][PK_S3_TEST.nabory[j]] = null
		if (PK_S3_TEST.vyborka[PK_S3_TEST.types[l]]['season_set']){
		    for (var j = 0; j < PK_S3_TEST.nabory.length; ++j){
			if (PK_S3_TEST.nabory[j] != 'season_set'){
			    PK_S3_TEST.vyborka[PK_S3_TEST.types[l]][PK_S3_TEST.nabory[j]] = null;
			}
			PK_S3_TEST.vyborka[PK_S3_TEST.types[l]]['simple'] = [];
			PK_S3_TEST.vyborka[PK_S3_TEST.types[l]].simple[0] = {bonus: 0, price: 0, id: 0}
		    }
		}
	    }
	}
	setTimeout(PK_S3_TEST.otsev_nenuzhnykh, PK_S3_TEST.rekurs.delay);
	return;
    }
    PK_S3_TEST.vyvod_prostyh_rabot();
};

PK_S3_TEST.otbor_nuzhnykh_fort = function (frab){
    PK_S3_TEST.tekushaya_rabota = frab;
    var frabota = PK_S3_TEST.raboty[frab];
    if (PK_S3_TEST.forty.is_zero){ // первая итерация для этого фортового обсчёта
	PK_S3_TEST.forty.max_value = 0;
	PK_S3_TEST.forty.old_value = 0;
	PK_S3_TEST.resultaty[frab] = {};
	var aim = Character.skills.aim;
	var leadership = Character.skills.leadership;
	var dodge = Character.skills.dodge;
	var skill = frabota.navyki.endurance ? Character.skills.endurance : Character.skills.hide;
	var sum =  aim + leadership + skill + dodge + 1;
	PK_S3_TEST.forty.ves.aim = (sum - aim)/sum;
	PK_S3_TEST.forty.ves.leadership = (sum - leadership)/sum;
	PK_S3_TEST.forty.ves.skill = (sum - skill)/sum;
	PK_S3_TEST.forty.ves.dodge = (sum - dodge)/sum;
	if (frabota.navyki.aim < 0.1){
	    PK_S3_TEST.forty.ves.aim = 0.001;
	}
	else if (frabota.navyki.dodge < 0.1){
	    PK_S3_TEST.forty.ves.dodge = 0.001;
	}
	PK_S3_TEST.forty.is_zero = false;
    }
    var zz = {aim:PK_S3_TEST.forty.ves.aim, dodge:PK_S3_TEST.forty.ves.dodge, leadership:PK_S3_TEST.forty.ves.leadership};
    if (frabota.navyki.endurance){
	zz.endurance = PK_S3_TEST.forty.ves.skill;
    }
    else{
	zz.hide = PK_S3_TEST.forty.ves.skill;
    };
    
    PK_S3_TEST.vyborka = null;
    PK_S3_TEST.vyborka = [];
    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	PK_S3_TEST.vyborka[PK_S3_TEST.types[i]] = [];
	for (var j = 0; j < PK_S3_TEST.nabory.length; ++j){
	    PK_S3_TEST.vyborka[PK_S3_TEST.types[i]][PK_S3_TEST.nabory[j]] = null;
	}
	PK_S3_TEST.vyborka[PK_S3_TEST.types[i]]['simple'] = [];
	PK_S3_TEST.vyborka[PK_S3_TEST.types[i]].simple[0] = {bonus:0, health:0, price:0, id:0}
    }
    for (var f in PK_S3_TEST.vozmozhnye_veschi){
	if (isNaN(f)) continue;
	var fID = f;
	var bronya = PK_S3_TEST.items[fID];
	var bonus = PK_S3_TEST.summa_to(bronya.bonus, zz)
	var health = PK_S3_TEST.summa_to (bronya.bonus, {health:1});
	if (bronya.type == 'left_arm'){
	    bonus += (bronya.damage.damage_min + bronya.damage.damage_max) / 2;
	}
	
	var cena = PK_S3_TEST.cena_pods4eta(bronya);

	if (bronya.set.key){
	    if (!PK_S3_TEST.vyborka[bronya.type][bronya.set.key] || (PK_S3_TEST.vyborka[bronya.type][bronya.set.key].bonus <= bonus)){
		PK_S3_TEST.vyborka[bronya.type][bronya.set.key] = {bonus:bonus, health:health, price:cena, id:fID};
	    }
	}
	if (bonus+health > 0){
	    var add = true;
	    for (var ff = PK_S3_TEST.vyborka[bronya.type].simple.length - 1; ff >= 0 ; --ff){
		var tmp = PK_S3_TEST.vyborka[bronya.type].simple[ff];
		if ((tmp.bonus >= bonus) && (tmp.health >= health) && (tmp.price <= cena)){
		    add = false; break;
		}
		if ((tmp.bonus <= bonus) && (tmp.health <= health) && (tmp.price >= cena)){
		    PK_S3_TEST.vyborka[bronya.type].simple.splice(ff,1);
		    continue;
		}
	    }
	    if (add) PK_S3_TEST.vyborka[bronya.type].simple.push( {bonus:bonus, health:health, price:cena, id:fID});
	}
	else if ((bonus < 0)||(health < 0)){
	    alert ('error fort sum, health');
	}
    }
    PK_S3_TEST.nabory_dlya_raboty = {};
    for (var i = 0; i < PK_S3_TEST.nabory.length; ++i){
	PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[i]] = [];
	for (var j = 1; j <= PK_S3_TEST.komplekty.max; ++j){
	    var kompl = PK_S3_TEST.komplekty[PK_S3_TEST.nabory[i]][j];
	    var bonus = PK_S3_TEST.summa_to (kompl.bonus, zz);
	    var health = PK_S3_TEST.summa_to (kompl.bonus, {health:1});
	    PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[i]][j] = {bonus:bonus, health:health};
	}
    }
    setTimeout(PK_S3_TEST.otsev_nenuzhnykh_fort, PK_S3_TEST.rekurs.delay);
    return;
}

PK_S3_TEST.otbor_nuzhnykh_moving = function (){
    var Imove = PK_S3_TEST.raboty.moving;
    PK_S3_TEST.tekushaya_rabota = Imove;
    var mrabota = PK_S3_TEST.raboty[Imove];
    if (PK_S3_TEST.vyborka) PK_S3_TEST.vyborka = null;
    PK_S3_TEST.vyborka = [];
    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	PK_S3_TEST.vyborka[PK_S3_TEST.types[i]] = [];
	for (var j = 0; j < PK_S3_TEST.nabory.length; ++j){
	    PK_S3_TEST.vyborka[PK_S3_TEST.types[i]][PK_S3_TEST.nabory[j]] = null;
	}
	PK_S3_TEST.vyborka[PK_S3_TEST.types[i]]['simple'] = [];
	PK_S3_TEST.vyborka[PK_S3_TEST.types[i]].simple[0] = {ride: 0, speed: 1.0, price: 0, id: 0}
    }

    for (var r in PK_S3_TEST.vozmozhnye_veschi){
	if (isNaN(r)) continue;
	var mID = r;
	var popona = PK_S3_TEST.items[mID];
	var ride = PK_S3_TEST.summa_to(popona.bonus, mrabota.navyki);
	var speed = popona.speed ? popona.speed : 1.0;
	var cena = PK_S3_TEST.cena_pods4eta(popona);

	if (popona.set.key){
	    if (!PK_S3_TEST.vyborka[popona.type][popona.set.key] || (PK_S3_TEST.vyborka[popona.type][popona.set.key].ride <= ride)){
		PK_S3_TEST.vyborka[popona.type][popona.set.key] = {ride: ride, speed: speed, price: cena, id: mID};
	    }
	}
	if ((ride > 0)||(speed < 1.0)){
	    var add = true;
	    for (var ir = PK_S3_TEST.vyborka[popona.type].simple.length - 1; ir >= 0 ; --ir){
		if ((PK_S3_TEST.vyborka[popona.type].simple[ir].ride >= ride) && (PK_S3_TEST.vyborka[popona.type].simple[ir].price <= cena) && (PK_S3_TEST.vyborka[popona.type].simple[ir].speed <= speed)){
		    add = false; break;
		}
		if ((PK_S3_TEST.vyborka[popona.type].simple[ir].ride <= ride) && (PK_S3_TEST.vyborka[popona.type].simple[ir].price >= cena) && (PK_S3_TEST.vyborka[popona.type].simple[ir].speed >= speed)){
		    PK_S3_TEST.vyborka[popona.type].simple.splice(ir,1);
		    continue;
		}
	    }
	    if (add) PK_S3_TEST.vyborka[popona.type].simple.push( {ride: ride, speed: speed, price: cena, id: mID});
	}
    }
    PK_S3_TEST.nabory_dlya_raboty = {};
    for (var i = 0; i < PK_S3_TEST.nabory.length; ++i){
	PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[i]] = [];
	for (var j = 1; j <= PK_S3_TEST.komplekty.max; ++j){
	    var kompl = PK_S3_TEST.komplekty[PK_S3_TEST.nabory[i]][j];
	    var rik = PK_S3_TEST.summa_to (kompl.bonus, mrabota.navyki)
	    var spk = kompl.speed ? (1 / kompl.speed) - 1 : 0.0;
	    PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[i]][j] = {ride: rik, speed: spk};
	}
    }
    setTimeout(PK_S3_TEST.otsev_nenuzhnykh_moving, PK_S3_TEST.rekurs.delay);
}

PK_S3_TEST.otbor_nuzhnykh_sleep = function(){
    PK_S3_TEST.tekushaya_rabota = PK_S3_TEST.raboty.energy;
    var srabota = PK_S3_TEST.raboty[PK_S3_TEST.raboty.energy];
    if (PK_S3_TEST.vyborka) PK_S3_TEST.vyborka = null;
    PK_S3_TEST.vyborka = [];
    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	PK_S3_TEST.vyborka[PK_S3_TEST.types[i]] = [];
	for (var j = 0; j < PK_S3_TEST.nabory.length; ++j){
	    PK_S3_TEST.vyborka[PK_S3_TEST.types[i]][PK_S3_TEST.nabory[j]] = null;
	}
	PK_S3_TEST.vyborka[PK_S3_TEST.types[i]].simple = [];
	PK_S3_TEST.vyborka[PK_S3_TEST.types[i]].simple[0] = {heal: 0, regen: 1.0, price: 0, id: 0};
    }

    for (var s in PK_S3_TEST.vozmozhnye_veschi){
	if (isNaN(s)) continue;
	var sID = s;
	var krovatka = PK_S3_TEST.items[sID];
	var heal = PK_S3_TEST.summa_to(krovatka.bonus, srabota.navyki);
	var regen = krovatka.regeneration ? krovatka.regeneration : 1.0;
	var cena = PK_S3_TEST.cena_pods4eta(krovatka);
	if (krovatka.set.key){
	    if (!PK_S3_TEST.vyborka[krovatka.type][krovatka.set.key] || (PK_S3_TEST.vyborka[krovatka.type][krovatka.set.key].heal <= heal)){
		PK_S3_TEST.vyborka[krovatka.type][krovatka.set.key] = {heal: heal, regen: regen, price: cena, id: sID};
	    }
	}
	if ((heal > 0)||(regen > 1.0)){
	    var add = true;
	    for (var is = PK_S3_TEST.vyborka[krovatka.type].simple.length - 1; is >= 0 ; --is){
		if ((PK_S3_TEST.vyborka[krovatka.type].simple[is].heal >= heal) && (PK_S3_TEST.vyborka[krovatka.type].simple[is].price <= cena) && (PK_S3_TEST.vyborka[krovatka.type].simple[is].regen >= regen)){
		    add = false; break;
		}
		if ((PK_S3_TEST.vyborka[krovatka.type].simple[is].heal <= heal) && (PK_S3_TEST.vyborka[krovatka.type].simple[is].price >= cena) && (PK_S3_TEST.vyborka[krovatka.type].simple[is].regen <= regen)){
		    PK_S3_TEST.vyborka[krovatka.type].simple.splice(is,1);
		    continue;
		}
	    }
	    if (add) PK_S3_TEST.vyborka[krovatka.type].simple.push( {heal: heal, regen: regen, price: cena, id: sID});
	}
    }
    PK_S3_TEST.nabory_dlya_raboty = {};
    for (var i = 0; i < PK_S3_TEST.nabory.length; ++i){
	PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[i]] = [];
	for (var j = 1; j <= PK_S3_TEST.komplekty.max; ++j){
	    var kompl = PK_S3_TEST.komplekty[PK_S3_TEST.nabory[i]][j];
	    var hek = PK_S3_TEST.summa_to (kompl.bonus, srabota.navyki)
	    var rek = kompl.regeneration ? kompl.regeneration : 1.0;
	    PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[i]][j] = {heal: hek, regen: rek};
	}
    }
    setTimeout(PK_S3_TEST.otsev_nenuzhnykh_sleep, PK_S3_TEST.rekurs.delay);
};

PK_S3_TEST.otsev_nenuzhnykh = function(){
    PK_S3_TEST.so4etaniya = [];
    var max_mask = Math.pow(2, PK_S3_TEST.types.length) - 1;;
    for (var i = 0; i <= max_mask; ++i)
	PK_S3_TEST.so4etaniya[i] = [];
    var mask = 0;
    var ivyb = [];
    var t0 = 0;
    for (var t = 0; t < PK_S3_TEST.types.length; ++t)
	ivyb[t] = 0;
    var itype = 0;
    var potra4eno = 0;
    while (itype >= 0){
	if (itype == PK_S3_TEST.types.length){
	    --itype;
	    ivyb[itype]++;
	    continue;
	}
	if (ivyb[itype] == PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]].simple.length){
	    ivyb[itype] = 0;
	    --itype;
	    if (itype >= 0) ++ivyb[itype];
	    continue;
	}
	var vesch = PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]].simple[ivyb[itype]];
	potra4eno = vesch.price;
	t0 = vesch.bonus;
	mask = Math.pow(2, itype);
	    var add = true;
	    for (var ii = PK_S3_TEST.so4etaniya[mask].length - 1; ii >= 0; --ii){
		if ((PK_S3_TEST.so4etaniya[mask][ii].bonus >= t0) && (PK_S3_TEST.so4etaniya[mask][ii].price <= potra4eno)){
		    add = false; break;
		}
		if ((PK_S3_TEST.so4etaniya[mask][ii].bonus <= t0) && (PK_S3_TEST.so4etaniya[mask][ii].price >= potra4eno)){
		    PK_S3_TEST.so4etaniya[mask].splice(ii,1);
		    continue;
		}
	    }
	    if (add){
		PK_S3_TEST.so4etaniya[mask].push( {bonus:t0, price:potra4eno});
		var l = PK_S3_TEST.so4etaniya[mask].length - 1;
		PK_S3_TEST.so4etaniya[mask][l].ids = [];
		PK_S3_TEST.so4etaniya[mask][l].ids[0] = vesch.id;
		PK_S3_TEST.so4etaniya[mask][l].sets = 0;
	    }
	++itype;
    }

    var qkompl = 0;
    for (var k = 0; k < PK_S3_TEST.nabory.length; ++k){
	var nabor_name = PK_S3_TEST.nabory[k];
	var mask = 0;
	var ivyb = [];
	var t0 = 0;
	var IDs = [];
	for (var t = 0; t < PK_S3_TEST.types.length; ++t)
	    ivyb[t] = 0;
	var itype = 0;
	var potra4eno = 0;
	while (itype >= 0){
	    if (itype == PK_S3_TEST.types.length){
		--itype;
		ivyb[itype]++;
		continue;
	    }
	    if (ivyb[itype] > 1){
		ivyb[itype] = 0;
		--itype;
		if (itype >= 0) ++ivyb[itype]; // нет уверенности в javascript'ном if(--itype>=0) :)
		continue;
	    }
	    if (ivyb[itype]==0){
		if (PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]]){
		    var vesch = PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]];
		    potra4eno += vesch.price;
		    if (qkompl > 0) t0 -= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl];
		    ++qkompl;
		    t0 += vesch.bonus;
		    t0 += PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl];
		    mask += Math.pow(2, itype);
		    IDs.push(vesch.id);
		    if ((potra4eno <= PK_S3_TEST.setting.bablo) && ((t0 > 0) || (nabor_name == 'season_set'))){
			var add = true;
			for (var iii = PK_S3_TEST.so4etaniya[mask].length - 1; iii >= 0 ; --iii){
			    if ((PK_S3_TEST.so4etaniya[mask][iii].bonus >= t0) && (PK_S3_TEST.so4etaniya[mask][iii].price <= potra4eno)){
				add = false; break;
			    }
			    if ((PK_S3_TEST.so4etaniya[mask][iii].bonus <= t0) && (PK_S3_TEST.so4etaniya[mask][iii].price >= potra4eno)){
				PK_S3_TEST.so4etaniya[mask].splice(iii,1);
				continue;
			    }
			}
			if (add){
			    PK_S3_TEST.so4etaniya[mask].push( {bonus:t0, price:potra4eno});
			    var l = PK_S3_TEST.so4etaniya[mask].length - 1;
			    PK_S3_TEST.so4etaniya[mask][l].ids = [];
			    for (var j = 0; j < IDs.length; ++j)
				PK_S3_TEST.so4etaniya[mask][l].ids.push(IDs[j]);
			    PK_S3_TEST.so4etaniya[mask][l].sets = Math.pow(2, k);
			}
		    } // конец проверки на добавление
		} // вещь из набора в данный слот существовала
		++itype;
	    }
	    else if (ivyb[itype]==1){
		if (PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]]){
		    var vesch = PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]];
		    potra4eno -= vesch.price;
		    t0 -= vesch.bonus;
		    t0 -= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl];
		    --qkompl;
		    if (qkompl > 0) t0 += PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl];
		    mask -= Math.pow(2, itype);
		    IDs.pop ();
		} // подчищаем ранее плюсанутые свойства.
		++itype;
	    }
	    else{
		alert ('error');
		break;
	    }
	}
    } // просмотрели все наборы.
    PK_S3_TEST.rekurs.mask = -1;
    PK_S3_TEST.rekurs.index_mask = -1;
    PK_S3_TEST.rekurs.count = PK_S3_TEST.rekurs.max_count;
    var date = new Date();
    PK_S3_TEST.rekurs.time = date.getTime();
    setTimeout (PK_S3_TEST.polnyj_perebor, PK_S3_TEST.rekurs.delay);
}

PK_S3_TEST.otsev_nenuzhnykh_fort = function(){
    PK_S3_TEST.so4etaniya = [];
    var max_mask = Math.pow(2, PK_S3_TEST.types.length) - 1;;
    for (var i = 0; i <= max_mask; ++i)
	PK_S3_TEST.so4etaniya[i] = [];
    var mask = 0;
    var ivyb = [];
    var t0 = 0;
    for (var t = 0; t < PK_S3_TEST.types.length; ++t)
	ivyb[t] = 0;
    var itype = 0;
    var potra4eno = 0;
    while (itype >= 0){
	if (itype == PK_S3_TEST.types.length){
	    --itype;
	    ivyb[itype]++;
	    continue;
	}
	if (ivyb[itype] == PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]].simple.length){
	    ivyb[itype] = 0;
	    --itype;
	    if (itype >= 0) ++ivyb[itype];
	    continue;
	}
	var bronya = PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]].simple[ivyb[itype]];
	var potra4eno = bronya.price;
	var b0 = bronya.bonus;
	var h0 = bronya.health;
	
	mask = Math.pow(2, itype);
	    var add = true;
	    for (var ii = PK_S3_TEST.so4etaniya[mask].length - 1; ii >= 0; --ii){
		var tmp = PK_S3_TEST.so4etaniya[mask][ii];
		if ((tmp.bonus >= b0) && (tmp.health >= h0) && (tmp.price <= potra4eno)){
		    add = false; break;
		}
		if ((tmp.bonus <= b0) && (tmp.health <= h0) && (tmp.price >= potra4eno)){
		    PK_S3_TEST.so4etaniya[mask].splice(ii,1);
		    continue;
		}
	    }
	    if (add){
		PK_S3_TEST.so4etaniya[mask].push( {bonus:b0, health:h0, price:potra4eno});
		var l = PK_S3_TEST.so4etaniya[mask].length - 1;
		PK_S3_TEST.so4etaniya[mask][l].ids = [];
		PK_S3_TEST.so4etaniya[mask][l].ids[0] = bronya.id;
		PK_S3_TEST.so4etaniya[mask][l].sets = 0;
	    }
	++itype;
    }
    var qkompl = 0;
    for (var k = 0; k < PK_S3_TEST.nabory.length; ++k){
	var mask = 0;
	var ivyb = [];
	var potra4eno = 0;
	var b0 = 0;
	var IDs = [];
	for (var t = 0; t < PK_S3_TEST.types.length; ++t)
	    ivyb[t] = 0;
	var itype = 0;
	var potra4eno = 0;
	while (itype >= 0){
	    if (itype == PK_S3_TEST.types.length){
		--itype;
		ivyb[itype]++;
		continue;
	    }
	    if (ivyb[itype] > 1){
		ivyb[itype] = 0;
		--itype;
		if (itype >= 0) ++ivyb[itype]; // нет уверенности в javascript'ном if(--itype>=0) :)
		continue;
	    }
	    if (ivyb[itype]==0){
		if (PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]]){
		    var bronya = PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]];
		    potra4eno += bronya.price;
		    if (qkompl > 0){
			b0 -= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].bonus;
			h0 -= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].health;
		    }
		    b0 += bronya.bonus;
		    h0 += bronya.health;
		    
		    ++qkompl;
		    b0 += PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].bonus;
		    h0 += PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].health;
		    mask += Math.pow(2, itype);
		    IDs.push(bronya.id);
		    if ((potra4eno <= PK_S3_TEST.setting.bablo) && ((b0 > 0)||(h0 > 0))){
			var add = true;
			for (var iii = PK_S3_TEST.so4etaniya[mask].length - 1; iii >= 0 ; --iii){
			    var tmp = PK_S3_TEST.so4etaniya[mask][iii];
			    if ((tmp.bonus >= b0) && (tmp.health >= h0) && (tmp.price <= potra4eno)){
				add = false; break;
			    }
			    if ((tmp.bonus <= b0) && (tmp.health <= h0) && (tmp.price >= potra4eno)){
				PK_S3_TEST.so4etaniya[mask].splice(iii,1);
				continue;
			    }
			}
			if (add){
			    PK_S3_TEST.so4etaniya[mask].push( {bonus:b0, health:h0, price:potra4eno});
			    var l = PK_S3_TEST.so4etaniya[mask].length - 1;
			    PK_S3_TEST.so4etaniya[mask][l].ids = [];
			    for (var j = 0; j < IDs.length; ++j)
				PK_S3_TEST.so4etaniya[mask][l].ids.push(IDs[j]);
			    PK_S3_TEST.so4etaniya[mask][l].sets = Math.pow(2, k);
			}
		    } // конец проверки на добавление
		} // вещь из набора в данный слот существовала
		++itype;
	    }
	    else if (ivyb[itype]==1){
		if (PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]]){
		    var bronya = PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]];
		    potra4eno -= bronya.price;
		    b0 -= bronya.bonus;
		    h0 -= bronya.health;
		    
		    b0 -= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].bonus;
		    h0 -= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].health;
		    --qkompl;
		    if (qkompl > 0) {
			b0 += PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].bonus;
			h0 += PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].health;
		    }
		    mask -= Math.pow(2, itype);
		    IDs.pop ();
		} // подчищаем ранее плюсанутые свойства.
		++itype;
	    }
	    else{
		alert ('error');
		break;
	    }
	}
    } // просмотрели все наборы.
    PK_S3_TEST.rekurs.mask = -1;
    PK_S3_TEST.rekurs.index_mask = -1;
    PK_S3_TEST.rekurs.count = PK_S3_TEST.rekurs.max_count;
    var date = new Date();
    PK_S3_TEST.rekurs.time = date.getTime();
    setTimeout (PK_S3_TEST.polnyj_perebor_fort, PK_S3_TEST.rekurs.delay);
}


PK_S3_TEST.otsev_nenuzhnykh_moving = function() {
    PK_S3_TEST.so4etaniya = [];
    var max_mask = Math.pow(2, PK_S3_TEST.types.length) - 1;;
    for (var im = 0; im <= max_mask; ++im)
	PK_S3_TEST.so4etaniya[im] = [];
    var mask = 0;
    var ivyb = [];
    var r0 = 0;
    var s0 = 1.0;
    for (var t = 0; t < PK_S3_TEST.types.length; ++t)
	ivyb[t] = 0;
    var itype = 0;
    var potra4eno = 0;
    while (itype >= 0){
	if (itype == PK_S3_TEST.types.length){
	    --itype;
	    ivyb[itype]++;
	    continue;
	}
	if (ivyb[itype] == PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]].simple.length){
	    ivyb[itype] = 0;
	    --itype;
	    if (itype >= 0) ++ivyb[itype];
	    continue;
	}
	var popona = PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]].simple[ivyb[itype]];
	potra4eno = popona.price;
	r0 = popona.ride;
	s0 = popona.speed;
	mask = Math.pow(2, itype);
	var add = true;
	for (var ir = PK_S3_TEST.so4etaniya[mask].length - 1; ir >= 0; --ir){
	    if ((PK_S3_TEST.so4etaniya[mask][ir].ride >= r0) && (PK_S3_TEST.so4etaniya[mask][ir].price <= potra4eno) && (PK_S3_TEST.so4etaniya[mask][ir].speed <= s0)){
		add = false; break;
	    }
	    if ((PK_S3_TEST.so4etaniya[mask][ir].ride <= r0) && (PK_S3_TEST.so4etaniya[mask][ir].price >= potra4eno) && (PK_S3_TEST.so4etaniya[mask][ir].speed >= s0)){
		PK_S3_TEST.so4etaniya[mask].splice(ir,1);
		continue;
	    }
	}
	if (add){
	    PK_S3_TEST.so4etaniya[mask].push( {ride: r0, speed: s0, kompl: 0, price:potra4eno});
	    var l = PK_S3_TEST.so4etaniya[mask].length - 1;
	    PK_S3_TEST.so4etaniya[mask][l].ids = [];
	    PK_S3_TEST.so4etaniya[mask][l].ids[0] = popona.id;
	    PK_S3_TEST.so4etaniya[mask][l].sets = 0;
	}
	++itype;
    }

    var qkompl = 0;
    for (var k = 0; k < PK_S3_TEST.nabory.length; ++k){
	var mask = 0;
	var ivyb = [];
	var r0 = 0;
	var s0 = 1.0;
	var k0 = 0;
	var IDs = [];
	for (var t = 0; t < PK_S3_TEST.types.length; ++t)
	    ivyb[t] = 0;
	var itype = 0;
	var potra4eno = 0;
	while (itype >= 0){
	    if (itype == PK_S3_TEST.types.length){
		--itype;
		ivyb[itype]++;
		continue;
	    }
	    if (ivyb[itype] > 1){
		ivyb[itype] = 0;
		--itype;
		if (itype >= 0) ++ivyb[itype]; // нет уверенности в javascript'ном if(--itype>=0) :)
		continue;
	    }
	    if (ivyb[itype]==0){
		if (PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]]){
		    var popona = PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]];
		    potra4eno += popona.price;
		    if (qkompl > 0) r0 -= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].ride;
		    if (qkompl > 0) k0 -= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].speed;
		    ++qkompl;
		    r0 += popona.ride;
		    s0 *= popona.speed;
		    r0 += PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].ride;
		    k0 += PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].speed;
		    mask += Math.pow(2, itype);
		    IDs.push(popona.id);
		    if ((potra4eno <= PK_S3_TEST.setting.bablo) && ((r0 > 0)||(k0 > 0)||(s0 < 1.0))){
			    var add = true;
			    for (var iir = PK_S3_TEST.so4etaniya[mask].length - 1; iir >= 0 ; --iir){
				var rtmp = PK_S3_TEST.so4etaniya[mask][iir];
				if ((rtmp.ride >= r0) && (rtmp.kompl >= k0) && (rtmp.price <= potra4eno) && (rtmp.speed <= s0)){
				    add = false; break;
				}
				if ((rtmp.ride <= r0) && (rtmp.kompl <= k0) && (rtmp.price >= potra4eno) && (rtmp.speed >= s0)){
				    PK_S3_TEST.so4etaniya[mask].splice(iir,1);
				    continue;
				}
			    }
			    if (add){
				PK_S3_TEST.so4etaniya[mask].push( {ride: r0, speed: s0, kompl: k0, price:potra4eno});
				var l = PK_S3_TEST.so4etaniya[mask].length - 1;
				PK_S3_TEST.so4etaniya[mask][l].ids = [];
				for (var j = 0; j < IDs.length; ++j)
				    PK_S3_TEST.so4etaniya[mask][l].ids.push(IDs[j]);
				PK_S3_TEST.so4etaniya[mask][l].sets = Math.pow(2, k);
			    }
		    } // конец проверки на добавление
		} // вещь из набора в данный слот существовала
		++itype;
	    }
	    else if (ivyb[itype]==1){
		if (PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]]){
		    var popona = PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]];
		    potra4eno -= popona.price;
		    r0 -= popona.ride;
		    s0 /= popona.speed;
		    r0 -= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].ride;
		    k0 -= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].speed;
		    --qkompl;
		    if (qkompl > 0) r0 += PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].ride;
		    if (qkompl > 0) k0 += PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].speed;
		    mask -= Math.pow(2, itype);
		    IDs.pop ();
		} // подчищаем ранее плюсанутые свойства.
		++itype;
	    }
	    else{
		alert ('error');
		break;
	    }
	}
    } // просмотрели все наборы.
    PK_S3_TEST.rekurs.mask = -1;
    PK_S3_TEST.rekurs.index_mask = -1;
    PK_S3_TEST.rekurs.count = PK_S3_TEST.rekurs.max_count;
    var date = new Date();
    PK_S3_TEST.rekurs.time = date.getTime();
    setTimeout (PK_S3_TEST.polnyj_perebor_moving, PK_S3_TEST.rekurs.delay);
}

PK_S3_TEST.otsev_nenuzhnykh_sleep = function() {
    PK_S3_TEST.so4etaniya = [];
    var max_mask = Math.pow(2, PK_S3_TEST.types.length) - 1;;
    for (var is = 0; is <= max_mask; ++is)
	PK_S3_TEST.so4etaniya[is] = [];
    var mask = 0;
    var ivyb = [];
    var h0 = 0;
    var r0 = 1.0;
    for (var t = 0; t < PK_S3_TEST.types.length; ++t)
	ivyb[t] = 0;
    var itype = 0;
    var potra4eno = 0;
    while (itype >= 0){
	if (itype == PK_S3_TEST.types.length){
	    --itype;
	    ivyb[itype]++;
	    continue;
	}
	if (ivyb[itype] == PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]].simple.length){
	    ivyb[itype] = 0;
	    --itype;
	    if (itype >= 0) ++ivyb[itype];
	    continue;
	}
	var krovatka = PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]].simple[ivyb[itype]];
	potra4eno = krovatka.price;
	h0 = krovatka.heal;
	r0 = krovatka.regen;
	mask = Math.pow(2, itype);
	var add = true;
	for (var is = PK_S3_TEST.so4etaniya[mask].length - 1; is >= 0; --is){
	    if (PK_S3_TEST.so4etaniya[mask][is].regen > r0){
		add = false; break;
	    }
	    if (PK_S3_TEST.so4etaniya[mask][is].regen < r0){
		PK_S3_TEST.so4etaniya[mask].splice(is,1);
		continue;
	    }
	    if ((PK_S3_TEST.so4etaniya[mask][is].heal >= h0) && (PK_S3_TEST.so4etaniya[mask][is].price <= potra4eno)){
		add = false; break;
	    }
	    if ((PK_S3_TEST.so4etaniya[mask][is].heal <= h0) && (PK_S3_TEST.so4etaniya[mask][is].price >= potra4eno)){
		PK_S3_TEST.so4etaniya[mask].splice(is,1);
		continue;
	    }
	}
	if (add){
	    PK_S3_TEST.so4etaniya[mask].push( {heal: h0, regen: r0, price:potra4eno});
	    var l = PK_S3_TEST.so4etaniya[mask].length - 1;
	    PK_S3_TEST.so4etaniya[mask][l].ids = [];
	    PK_S3_TEST.so4etaniya[mask][l].ids[0] = krovatka.id;
	    PK_S3_TEST.so4etaniya[mask][l].sets = 0;
	}
	++itype;
    }

    var qkompl = 0;
    for (var k = 0; k < PK_S3_TEST.nabory.length; ++k){
	var mask = 0;
	var ivyb = [];
	var h0 = 0;
	var r0 = 1.0;
	var IDs = [];
	for (var t = 0; t < PK_S3_TEST.types.length; ++t)
	    ivyb[t] = 0;
	var itype = 0;
	var potra4eno = 0;
	while (itype >= 0){
	    if (itype == PK_S3_TEST.types.length){
		--itype;
		ivyb[itype]++;
		continue;
	    }
	    if (ivyb[itype] > 1){
		ivyb[itype] = 0;
		--itype;
		if (itype >= 0) ++ivyb[itype]; // нет уверенности в javascript'ном if(--itype>=0) :)
		continue;
	    }
	    if (ivyb[itype]==0){
		if (PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]]){
		    var krovatka = PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]];
		    potra4eno += krovatka.price;
		    if (qkompl > 0) h0 -= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].heal;
		    if (qkompl > 0) r0 /= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].regen;
		    ++qkompl;
		    h0 += krovatka.heal;
		    r0 *= krovatka.regen;
		    h0 += PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].heal;
		    r0 *= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].regen;
		    mask += Math.pow(2, itype);
		    IDs.push(krovatka.id);
		    if ((qkompl > 1) && (potra4eno <= PK_S3_TEST.setting.bablo)){
			var add = true;
			for (var iis = PK_S3_TEST.so4etaniya[mask].length - 1; iis >= 0 ; --iis){
			    if (PK_S3_TEST.so4etaniya[mask][iis].regen > r0){
				add = false; break;
			    }
			    if (PK_S3_TEST.so4etaniya[mask][iis].regen < r0){
				PK_S3_TEST.so4etaniya[mask].splice(iis,1);
				continue;
			    }
			    if ((PK_S3_TEST.so4etaniya[mask][iis].heal >= h0) && (PK_S3_TEST.so4etaniya[mask][iis].price <= potra4eno)){
				add = false; break;
			    }
			    if ((PK_S3_TEST.so4etaniya[mask][iis].heal <= h0) && (PK_S3_TEST.so4etaniya[mask][iis].price >= potra4eno)){
				PK_S3_TEST.so4etaniya[mask].splice(iis,1);
				continue;
			    }
			}
			if (add){
			    PK_S3_TEST.so4etaniya[mask].push( {heal: h0, regen: r0, price:potra4eno});
			    var l = PK_S3_TEST.so4etaniya[mask].length - 1;
			    PK_S3_TEST.so4etaniya[mask][l].ids = [];
			    for (var j = 0; j < IDs.length; ++j)
				PK_S3_TEST.so4etaniya[mask][l].ids.push(IDs[j]);
			    PK_S3_TEST.so4etaniya[mask][l].sets = Math.pow(2, k);
		        }
		    } // конец проверки на добавление
		} // вещь из набора в данный слот существовала
		++itype;
	    }
	    else if (ivyb[itype]==1){
		if (PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]]){
		    var krovatka = PK_S3_TEST.vyborka[PK_S3_TEST.types[itype]][PK_S3_TEST.nabory[k]];
		    potra4eno -= krovatka.price;
		    h0 -= krovatka.heal;
		    r0 /= krovatka.regen;
		    h0 -= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].heal;
		    r0 /= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].regen;
		    --qkompl;
		    if (qkompl > 0) h0 += PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].heal;
		    if (qkompl > 0) r0 *= PK_S3_TEST.nabory_dlya_raboty[PK_S3_TEST.nabory[k]][qkompl].regen;
		    mask -= Math.pow(2, itype);
		    IDs.pop ();
		} // подчищаем ранее плюсанутые свойства.
		++itype;
	    }
	    else{
		alert ('error');
		break;
	    }
	}
    } // просмотрели все наборы.
    PK_S3_TEST.rekurs.mask = -1;
    PK_S3_TEST.rekurs.index_mask = -1;
    PK_S3_TEST.rekurs.count = PK_S3_TEST.rekurs.max_count;
    var date = new Date();
    PK_S3_TEST.rekurs.time = date.getTime();
    setTimeout (PK_S3_TEST.polnyj_perebor_sleep, PK_S3_TEST.rekurs.delay);
}


PK_S3_TEST.polnyj_perebor = function(){
    var max_mask = Math.pow(2, PK_S3_TEST.types.length) - 1;
    var progress = $('pk_s3_progress_bar');
    var current_task = $('current_task_box_text');
    var fval = (PK_S3_TEST.rekurs.mask>0)?PK_S3_TEST.progress.array_mask[PK_S3_TEST.rekurs.mask]:0;
    fval = 100 * (fval + PK_S3_TEST.setting.sej4as_rabota - 1) / PK_S3_TEST.setting.s4itaem_rabot;
    if (progress){
	progress.setAttribute ('value', parseInt(fval, 10));
    }
    if (current_task){
	var sx = new Array(parseInt(fval/3.3, 10)).join('#');
	var ss = new Array(parseInt(31 - fval/3.3, 10)).join('=');
	var sv = '|'+sx+ss+'|';
	current_task.textContent = sv;
    }

    var infinity = true;
    while (infinity){
	var date = new Date();
	if (PK_S3_TEST.rekurs.time + PK_S3_TEST.rekurs.working < date.getTime()){
	    PK_S3_TEST.rekurs.time = date.getTime() + PK_S3_TEST.rekurs.delay;
	    setTimeout (PK_S3_TEST.polnyj_perebor, PK_S3_TEST.rekurs.delay);
	    return;
	}
	if (PK_S3_TEST.rekurs.mask > max_mask / 2){
	    var izmeneniya = false;
	    for (var m7 = 0; m7 < max_mask; ++m7){
	        for (var i7 = PK_S3_TEST.so4etaniya[m7].length - 1; i7>= 0; --i7){
		    if (!PK_S3_TEST.so4etaniya[m7][i7].ispolz){
			PK_S3_TEST.so4etaniya[m7][i7].old = true;
		    }
		    else{
		        PK_S3_TEST.so4etaniya[m7][i7].ispolz = false;
		        izmeneniya = true;
		    }
		}
	    }
	    if (!izmeneniya) infinity = false;
//	    PK_S3_TEST.rekurs.count -= 50;
	    PK_S3_TEST.rekurs.mask = -1;
	    PK_S3_TEST.rekurs.index_mask = -1;
	    continue;
	}
	if (PK_S3_TEST.rekurs.index_mask < 0){
	    // пора переходить на следущую маску;
	    ++PK_S3_TEST.rekurs.mask;
	    PK_S3_TEST.rekurs.index_mask = PK_S3_TEST.so4etaniya[PK_S3_TEST.rekurs.mask].length - 1;
	    continue;
	}
	var m1 = PK_S3_TEST.rekurs.mask;
	var i1 = PK_S3_TEST.rekurs.index_mask;
	var old1 = PK_S3_TEST.so4etaniya[m1][i1].old;
        var bon1 = PK_S3_TEST.so4etaniya[m1][i1].bonus;
	var cen1 = PK_S3_TEST.so4etaniya[m1][i1].price;
	var sets1 = PK_S3_TEST.so4etaniya[m1][i1].sets;
        for (var m2 = m1 + 1; m2 < max_mask; ++m2){
	    if (m1&m2) continue;
	    var m3 = m1 + m2;
	    for (var i2 = PK_S3_TEST.so4etaniya[m2].length - 1; i2 >= 0; --i2){
		if (old1&&PK_S3_TEST.so4etaniya[m2][i2].old) continue;
		sets2 = PK_S3_TEST.so4etaniya[m2][i2].sets;
		if (sets1&sets2) continue;
		var bonus = bon1 + PK_S3_TEST.so4etaniya[m2][i2].bonus;
		var cena = cen1 + PK_S3_TEST.so4etaniya[m2][i2].price;
		if (cena <= PK_S3_TEST.setting.bablo){
		    var add = true;
		    for (var ii = PK_S3_TEST.so4etaniya[m3].length - 1; ii >= 0; --ii){
		        if ((PK_S3_TEST.so4etaniya[m3][ii].bonus >= bonus) && (PK_S3_TEST.so4etaniya[m3][ii].price <= cena)){
			    add = false; break;
		        }
			if ((PK_S3_TEST.so4etaniya[m3][ii].bonus <= bonus) && (PK_S3_TEST.so4etaniya[m3][ii].price >= cena)){
			    PK_S3_TEST.so4etaniya[m3].splice(ii,1);
			    continue;
			}
		    }
		    if (add){
			PK_S3_TEST.so4etaniya[m3].push( {bonus:bonus, price:cena});
			var l = PK_S3_TEST.so4etaniya[m3].length - 1;
			PK_S3_TEST.so4etaniya[m3][l].ids = [];
			for (var j1 = 0; j1 < PK_S3_TEST.so4etaniya[m1][i1].ids.length; ++j1){
			    PK_S3_TEST.so4etaniya[m3][l].ids.push(PK_S3_TEST.so4etaniya[m1][i1].ids[j1]);
			}
			for (var j2 = 0; j2 < PK_S3_TEST.so4etaniya[m2][i2].ids.length; ++j2){
			    PK_S3_TEST.so4etaniya[m3][l].ids.push(PK_S3_TEST.so4etaniya[m2][i2].ids[j2]);
			}
			PK_S3_TEST.so4etaniya[m3][l].sets = sets1 + sets2;
			PK_S3_TEST.so4etaniya[m3][l].ispolz = true;
			PK_S3_TEST.so4etaniya[m1][i1].ispolz = true;
			PK_S3_TEST.so4etaniya[m2][i2].ispolz = true;
			PK_S3_TEST.so4etaniya[m3][l].old = false;
			PK_S3_TEST.so4etaniya[m1][i1].old = false;
			PK_S3_TEST.so4etaniya[m2][i2].old = false;
		    }
		}
	    }
	}
	--PK_S3_TEST.rekurs.index_mask;
    }
    PK_S3_TEST.podgotavlivaem_rezultat();
}

PK_S3_TEST.polnyj_perebor_fort = function(){
    var max_mask = Math.pow(2, PK_S3_TEST.types.length) - 1;
    var progress = $('pk_s3_progress_bar');
    var current_task = $('current_task_box_text');
    var fval = (PK_S3_TEST.rekurs.mask>0)?PK_S3_TEST.progress.array_mask[PK_S3_TEST.rekurs.mask]:0;
    fval = 100 * (fval + PK_S3_TEST.setting.sej4as_rabota - 1) / PK_S3_TEST.setting.s4itaem_rabot;
    if (progress){
	progress.setAttribute ('value', parseInt(fval, 10));
    }
    if (current_task){
	var sx = new Array(parseInt(fval/3.3, 10)).join('#');
	var ss = new Array(parseInt(31 - fval/3.3, 10)).join('=');
	var sv = '|'+sx+ss+'|';
	current_task.textContent = sv;
    }

    var infinity = true;
    while (infinity){
	var date = new Date();
	if (PK_S3_TEST.rekurs.time + PK_S3_TEST.rekurs.working < date.getTime()){
	    var date1 = new Date();
	    PK_S3_TEST.rekurs.time = date1.getTime() + PK_S3_TEST.rekurs.delay;
	    setTimeout (PK_S3_TEST.polnyj_perebor_fort, PK_S3_TEST.rekurs.delay);
	    return;
	}
	if (PK_S3_TEST.rekurs.mask > max_mask / 2){
	    var izmeneniya = false;
	    for (var mf = 0; mf < max_mask; ++mf){
	        for (var ix = PK_S3_TEST.so4etaniya[mf].length - 1; ix>= 0; --ix){
		    if (!PK_S3_TEST.so4etaniya[mf][ix].ispolz){
			PK_S3_TEST.so4etaniya[mf][ix].old = true;
		    }
		    else{
		        PK_S3_TEST.so4etaniya[mf][ix].ispolz = false;
		        izmeneniya = true;
		    }
		}
	    }
	    if (!izmeneniya) infinity = false;
//	    PK_S3_TEST.rekurs.count -= 50;
	    PK_S3_TEST.rekurs.mask = -1;
	    PK_S3_TEST.rekurs.index_mask = -1;
	    continue;
	}
	if (PK_S3_TEST.rekurs.index_mask < 0){
	    // пора переходить на следущую маску;
	    ++PK_S3_TEST.rekurs.mask;
	    PK_S3_TEST.rekurs.index_mask = PK_S3_TEST.so4etaniya[PK_S3_TEST.rekurs.mask].length - 1;
	    continue;
	}
	var m1 = PK_S3_TEST.rekurs.mask;
	var i1 = PK_S3_TEST.rekurs.index_mask;
	var old1 = PK_S3_TEST.so4etaniya[m1][i1].old
        var bonus1 = PK_S3_TEST.so4etaniya[m1][i1].bonus;
        var health1 = PK_S3_TEST.so4etaniya[m1][i1].health;
	var cen1 = PK_S3_TEST.so4etaniya[m1][i1].price;
	var sets1 = PK_S3_TEST.so4etaniya[m1][i1].sets;
        for (var m2 = m1 + 1; m2 < max_mask; ++m2){
	    if (m1&m2) continue;
	    var m3 = m1 + m2;
	    for (var i2 = PK_S3_TEST.so4etaniya[m2].length - 1; i2 >= 0; --i2){
		if (old1&&PK_S3_TEST.so4etaniya[m2][i2].old) continue;
		sets2 = PK_S3_TEST.so4etaniya[m2][i2].sets;
		if (sets1&sets2) continue;
		var bonus = bonus1 + PK_S3_TEST.so4etaniya[m2][i2].bonus;
		var health = health1 + PK_S3_TEST.so4etaniya[m2][i2].health;
		var cena = cen1 + PK_S3_TEST.so4etaniya[m2][i2].price;
		if (cena <= PK_S3_TEST.setting.bablo){
		    var add = true;
		    for (var ii = PK_S3_TEST.so4etaniya[m3].length - 1; ii >= 0; --ii){
			    var tmp = PK_S3_TEST.so4etaniya[m3][ii];
			    if ((tmp.bonus >= bonus) && (tmp.health >= health) && (tmp.price <= cena)){
				add = false; break;
			    }
			    if ((tmp.bonus <= bonus) && (tmp.health <= health) && (tmp.price >= cena)){
				PK_S3_TEST.so4etaniya[m3].splice(ii,1);
				continue;
			    }
		    }
		    if (add){
			PK_S3_TEST.so4etaniya[m3].push({bonus:bonus, health:health, price:cena});
			var l = PK_S3_TEST.so4etaniya[m3].length - 1;
			PK_S3_TEST.so4etaniya[m3][l].ids = [];
			for (var j1 = 0; j1 < PK_S3_TEST.so4etaniya[m1][i1].ids.length; ++j1){
			    PK_S3_TEST.so4etaniya[m3][l].ids.push(PK_S3_TEST.so4etaniya[m1][i1].ids[j1]);
			}
			for (var j2 = 0; j2 < PK_S3_TEST.so4etaniya[m2][i2].ids.length; ++j2){
			    PK_S3_TEST.so4etaniya[m3][l].ids.push(PK_S3_TEST.so4etaniya[m2][i2].ids[j2]);
			}
			PK_S3_TEST.so4etaniya[m3][l].sets = sets1 + sets2;
			PK_S3_TEST.so4etaniya[m3][l].ispolz = true;
			PK_S3_TEST.so4etaniya[m1][i1].ispolz = true;
			PK_S3_TEST.so4etaniya[m2][i2].ispolz = true;
			PK_S3_TEST.so4etaniya[m3][l].old = false;
			PK_S3_TEST.so4etaniya[m1][i1].old = false;
			PK_S3_TEST.so4etaniya[m2][i2].old = false;
		    }
		}
	    }
	}
	--PK_S3_TEST.rekurs.index_mask;
    }
    PK_S3_TEST.podgotavlivaem_rezultat_fort();
}

PK_S3_TEST.polnyj_perebor_moving = function(){
    var max_mask = Math.pow(2, PK_S3_TEST.types.length) - 1;
    var progress = $('pk_s3_progress_bar');
    var current_task = $('current_task_box_text');
    var fval = (PK_S3_TEST.rekurs.mask>0)?PK_S3_TEST.progress.array_mask[PK_S3_TEST.rekurs.mask]:0;
    fval = 100 * (fval + PK_S3_TEST.setting.sej4as_rabota - 1) / PK_S3_TEST.setting.s4itaem_rabot;
    if (progress){
	progress.setAttribute ('value', parseInt(fval, 10));
    }
    if (current_task){
	var sx = new Array(parseInt(fval/3.3, 10)).join('#');
	var ss = new Array(parseInt(31 - fval/3.3, 10)).join('=');
	var sv = '|'+sx+ss+'|';
	current_task.textContent = sv;
    }

    var infinity = true;
    while (infinity){
	var date = new Date();
	if (PK_S3_TEST.rekurs.time + PK_S3_TEST.rekurs.working < date.getTime()){
	    PK_S3_TEST.rekurs.time = date.getTime() + PK_S3_TEST.rekurs.delay;
	    setTimeout (PK_S3_TEST.polnyj_perebor_moving, PK_S3_TEST.rekurs.delay);
	    return;
	}

	if (PK_S3_TEST.rekurs.mask > max_mask / 2){
	    var izmeneniya = false;
	    for (var m6 = 0; m6 < max_mask; ++m6){
	        for (var i6 = PK_S3_TEST.so4etaniya[m6].length - 1; i6>= 0; --i6){
		    if (!PK_S3_TEST.so4etaniya[m6][i6].ispolz){
			PK_S3_TEST.so4etaniya[m6][i6].old = true;
		    }
		    else{
		        PK_S3_TEST.so4etaniya[m6][i6].ispolz = false;
		        izmeneniya = true;
		    }
		}
	    }
	    if (!izmeneniya) infinity = false;
//	    PK_S3_TEST.rekurs.count -= 50;
	    PK_S3_TEST.rekurs.mask = -1;
	    PK_S3_TEST.rekurs.index_mask = -1;
	    continue;
	}
	if (PK_S3_TEST.rekurs.index_mask < 0){
	    // пора переходить на следущую маску;
	    ++PK_S3_TEST.rekurs.mask;
	    PK_S3_TEST.rekurs.index_mask = PK_S3_TEST.so4etaniya[PK_S3_TEST.rekurs.mask].length - 1;
	    continue;
	}
	if (PK_S3_TEST.so4etaniya[PK_S3_TEST.rekurs.mask][PK_S3_TEST.rekurs.index_mask].old){
	    --PK_S3_TEST.rekurs.index_mask;
	    continue;
	}
	var mr1 = PK_S3_TEST.rekurs.mask;
	var ir1 = PK_S3_TEST.rekurs.index_mask;
	var old1 = PK_S3_TEST.so4etaniya[mr1][ir1].old
        var rid1 = PK_S3_TEST.so4etaniya[mr1][ir1].ride;
	var spe1 = PK_S3_TEST.so4etaniya[mr1][ir1].speed;
	var kom1 = PK_S3_TEST.so4etaniya[mr1][ir1].kompl;
	var cen1 = PK_S3_TEST.so4etaniya[mr1][ir1].price;
	var sets1 = PK_S3_TEST.so4etaniya[mr1][ir1].sets;
        for (var mr2 = mr1 + 1; mr2 < max_mask; ++mr2){
	    if (mr1&mr2) continue;
	    var mr3 = mr1 + mr2;
	    for (var ir2 = PK_S3_TEST.so4etaniya[mr2].length - 1; ir2 >= 0; --ir2){
		if (old1||PK_S3_TEST.so4etaniya[mr2][ir2].old) continue;
		sets2 = PK_S3_TEST.so4etaniya[mr2][ir2].sets;
		if (sets1&sets2) continue;
		var ride = rid1 + PK_S3_TEST.so4etaniya[mr2][ir2].ride;
		var speed = spe1 * PK_S3_TEST.so4etaniya[mr2][ir2].speed;
		var kompl = kom1 + PK_S3_TEST.so4etaniya[mr2][ir2].kompl;
		var cena = cen1 + PK_S3_TEST.so4etaniya[mr2][ir2].price;
		if (cena <= PK_S3_TEST.setting.bablo){
		    var add = true;
		    for (var ii = PK_S3_TEST.so4etaniya[mr3].length - 1; ii >= 0; --ii){
		        if ((PK_S3_TEST.so4etaniya[mr3][ii].ride >= ride) && (PK_S3_TEST.so4etaniya[mr3][ii].kompl >= kompl) && (PK_S3_TEST.so4etaniya[mr3][ii].price <= cena) && (PK_S3_TEST.so4etaniya[mr3][ii].speed <= speed)){
			    add = false; break;
		        }
			if ((PK_S3_TEST.so4etaniya[mr3][ii].ride <= ride) && (PK_S3_TEST.so4etaniya[mr3][ii].kompl <= kompl) && (PK_S3_TEST.so4etaniya[mr3][ii].price >= cena) && (PK_S3_TEST.so4etaniya[mr3][ii].speed >= speed)){
			    PK_S3_TEST.so4etaniya[mr3].splice(ii,1);
			    continue;
			}
		    }
		    if (add){
			PK_S3_TEST.so4etaniya[mr3].push( {ride: ride, speed: speed, kompl: kompl, price:cena});
			var l = PK_S3_TEST.so4etaniya[mr3].length - 1;
			PK_S3_TEST.so4etaniya[mr3][l].ids = [];
			for (var j1 = 0; j1 < PK_S3_TEST.so4etaniya[mr1][ir1].ids.length; ++j1){
			    PK_S3_TEST.so4etaniya[mr3][l].ids.push(PK_S3_TEST.so4etaniya[mr1][ir1].ids[j1]);
			}
			for (var j2 = 0; j2 < PK_S3_TEST.so4etaniya[mr2][ir2].ids.length; ++j2){
			    PK_S3_TEST.so4etaniya[mr3][l].ids.push(PK_S3_TEST.so4etaniya[mr2][ir2].ids[j2]);
			}
			PK_S3_TEST.so4etaniya[mr3][l].sets = sets1 + sets2;
			PK_S3_TEST.so4etaniya[mr3][l].ispolz = true;
			PK_S3_TEST.so4etaniya[mr1][ir1].ispolz = true;
			PK_S3_TEST.so4etaniya[mr2][ir2].ispolz = true;
			PK_S3_TEST.so4etaniya[mr3][l].old = false;
			PK_S3_TEST.so4etaniya[mr1][ir1].old = false;
			PK_S3_TEST.so4etaniya[mr2][ir2].old = false;
		    }
		}
	    }
	}
	--PK_S3_TEST.rekurs.index_mask;
    }
    PK_S3_TEST.podgotavlivaem_rezultat_moving();
}

PK_S3_TEST.polnyj_perebor_sleep = function(){
    var max_mask = Math.pow(2, PK_S3_TEST.types.length) - 1;
    var progress = $('pk_s3_progress_bar');
    var current_task = $('current_task_box_text');
    var fval = (PK_S3_TEST.rekurs.mask>0)?PK_S3_TEST.progress.array_mask[PK_S3_TEST.rekurs.mask]:0;
    fval = 100 * (fval + PK_S3_TEST.setting.sej4as_rabota - 1) / PK_S3_TEST.setting.s4itaem_rabot;
    if (progress){
	progress.setAttribute ('value', parseInt(fval, 10));
    }
    if (current_task){
	var sx = new Array(parseInt(fval/3.3, 10)).join('#');
	var ss = new Array(parseInt(31 - fval/3.3, 10)).join('=');
	var sv = '|'+sx+ss+'|';
	current_task.textContent = sv;
    }

    var infinity = true;
    while (infinity){
	var date = new Date();
	if (PK_S3_TEST.rekurs.time + PK_S3_TEST.rekurs.working < date.getTime()){
	    PK_S3_TEST.rekurs.time = date.getTime() + PK_S3_TEST.rekurs.delay;
	    setTimeout (PK_S3_TEST.polnyj_perebor_sleep, PK_S3_TEST.rekurs.delay);
	    return;
	}
	if (PK_S3_TEST.rekurs.mask > max_mask / 2){
	    var izmeneniya = false;
	    for (var m8 = 0; m8 < max_mask; ++m8){
	        for (var i8 = PK_S3_TEST.so4etaniya[m8].length - 1; i8>= 0; --i8){
		    if (!PK_S3_TEST.so4etaniya[m8][i8].ispolz){
			PK_S3_TEST.so4etaniya[m8][i8].old = true;
		    }
		    else{
		        PK_S3_TEST.so4etaniya[m8][i8].ispolz = false;
		        izmeneniya = true;
		    }
		}
	    }
	    if (!izmeneniya) infinity = false;
	    PK_S3_TEST.rekurs.mask = -1;
	    PK_S3_TEST.rekurs.index_mask = -1;
	}
	if (PK_S3_TEST.rekurs.index_mask < 0){
	    // пора переходить на следущую маску;
	    ++PK_S3_TEST.rekurs.mask;
	    PK_S3_TEST.rekurs.index_mask = PK_S3_TEST.so4etaniya[PK_S3_TEST.rekurs.mask].length - 1;
	    continue;
	}
	var ms1 = PK_S3_TEST.rekurs.mask;
	var is1 = PK_S3_TEST.rekurs.index_mask;
	var old1 = PK_S3_TEST.so4etaniya[ms1][is1].old
        var hea1 = PK_S3_TEST.so4etaniya[ms1][is1].heal;
	var reg1 = PK_S3_TEST.so4etaniya[ms1][is1].regen;
	var cen1 = PK_S3_TEST.so4etaniya[ms1][is1].price;
	var sets1 = PK_S3_TEST.so4etaniya[ms1][is1].sets;
        for (var ms2 = ms1 + 1; ms2 < max_mask; ++ms2){
	    if (ms1&ms2) continue;
	    var ms3 = ms1 + ms2;
	    for (var is2 = PK_S3_TEST.so4etaniya[ms2].length - 1; is2 >= 0; --is2){
		if (old1&&PK_S3_TEST.so4etaniya[ms2][is2].old) continue;
		sets2 = PK_S3_TEST.so4etaniya[ms2][is2].sets;
		if (sets1&sets2) continue;
		var heal = hea1 + PK_S3_TEST.so4etaniya[ms2][is2].heal;
		var regen = reg1 * PK_S3_TEST.so4etaniya[ms2][is2].regen;
		var cena = cen1 + PK_S3_TEST.so4etaniya[ms2][is2].price;
		if (cena <= PK_S3_TEST.setting.bablo){
		    var add = true;
		    for (var ii = PK_S3_TEST.so4etaniya[ms3].length - 1; ii >= 0; --ii){
			if (PK_S3_TEST.so4etaniya[ms3][ii].regen > regen){
			    add = false; break;
			}
			if (PK_S3_TEST.so4etaniya[ms3][ii].regen < regen){
			    PK_S3_TEST.so4etaniya[ms3].splice(ii,1);
			    continue;
			}
		        if ((PK_S3_TEST.so4etaniya[ms3][ii].heal >= heal) && (PK_S3_TEST.so4etaniya[ms3][ii].price <= cena)){
			    add = false; break;
		        }
			if ((PK_S3_TEST.so4etaniya[ms3][ii].heal <= heal) && (PK_S3_TEST.so4etaniya[ms3][ii].price >= cena)){
			    PK_S3_TEST.so4etaniya[ms3].splice(ii,1);
			    continue;
			}
		    }
		    if (add){
			PK_S3_TEST.so4etaniya[ms3].push( {heal: heal, regen: regen, price:cena});
			var l = PK_S3_TEST.so4etaniya[ms3].length - 1;
			PK_S3_TEST.so4etaniya[ms3][l].ids = [];
			for (var j1 = 0; j1 < PK_S3_TEST.so4etaniya[ms1][is1].ids.length; ++j1){
			    PK_S3_TEST.so4etaniya[ms3][l].ids.push(PK_S3_TEST.so4etaniya[ms1][is1].ids[j1]);
			}
			for (var j2 = 0; j2 < PK_S3_TEST.so4etaniya[ms2][is2].ids.length; ++j2){
			    PK_S3_TEST.so4etaniya[ms3][l].ids.push(PK_S3_TEST.so4etaniya[ms2][is2].ids[j2]);
			}
			PK_S3_TEST.so4etaniya[ms3][l].sets = sets1 + sets2;
			PK_S3_TEST.so4etaniya[ms3][l].ispolz = true;
			PK_S3_TEST.so4etaniya[ms1][is1].ispolz = true;
			PK_S3_TEST.so4etaniya[ms2][is2].ispolz = true;
			PK_S3_TEST.so4etaniya[ms3][l].old = false;
			PK_S3_TEST.so4etaniya[ms1][is1].old = false;
			PK_S3_TEST.so4etaniya[ms2][is2].old = false;
		    }
		}
	    }
	}
	--PK_S3_TEST.rekurs.index_mask;
    }
    PK_S3_TEST.podgotavlivaem_rezultat_sleep();
}

PK_S3_TEST.podgotavlivaem_rezultat_to = function (){
    var progress = $('pk_s3_progress_bar');
    if (progress){
	progress.setAttribute ('value', parseInt((0.99 + PK_S3_TEST.setting.sej4as_rabota - 1) / PK_S3_TEST.setting.s4itaem_rabot * 100, 10));
    }
    var irab = PK_S3_TEST.tekushaya_rabota;


    PK_S3_TEST.resultaty[irab] = {};
    PK_S3_TEST.resultaty[irab].bonus = 0;
    PK_S3_TEST.resultaty[irab].selfTO = Math.floor(PK_S3_TEST.summa_to2(Character, PK_S3_TEST.raboty[irab].navyki));
    PK_S3_TEST.resultaty[irab].TO = PK_S3_TEST.resultaty[irab].bonus + PK_S3_TEST.resultaty[irab].selfTO - PK_S3_TEST.raboty[irab].malus;
    if (irab == PK_S3_TEST.raboty.health){
	PK_S3_TEST.resultaty[irab].TO = 90 + Character.level * 10 + PK_S3_TEST.resultaty[irab].TO * PK_S3_TEST.bonus.life;
    }
	
    var val = Math.round((((0.9 * PK_S3_TEST.raboty[irab].resultaty.dengi + 5) * Math.pow(PK_S3_TEST.resultaty[irab].TO + 1, 0.2))) * 2 * PK_S3_TEST.bonus.money);
    PK_S3_TEST.resultaty[irab].dengi = (isNaN(val)||(val < 0)||(PK_S3_TEST.resultaty[irab].TO < 0)) ? 0 : val;
    val = Math.round(PK_S3_TEST.raboty[irab].resultaty.opyt * 2 * PK_S3_TEST.bonus.exp);
    PK_S3_TEST.resultaty[irab].opyt = (isNaN(val)||(val < 0)||(PK_S3_TEST.resultaty[irab].TO < 0)) ? 0 : val;
    val = Math.round((((0.9 * PK_S3_TEST.raboty[irab].resultaty.vezenie + 5) * Math.pow(PK_S3_TEST.resultaty[irab].TO + 1, 0.2))) * 15 * PK_S3_TEST.bonus.money);
    PK_S3_TEST.resultaty[irab].vezenie = (isNaN(val)||(val < 0)||(PK_S3_TEST.resultaty[irab].TO < 0)) ? 0 : val;
    // vezmin = vezmax / 3.   vez_sred = (min+max)/2 = vezmin*2/3;
    val = Math.round((8*Math.pow(PK_S3_TEST.raboty[irab].resultaty.boom, 1.35)) / (PK_S3_TEST.resultaty[irab].TO + 4));
    PK_S3_TEST.resultaty[irab].boom = (isNaN(val)||(val < 0)||(PK_S3_TEST.resultaty[irab].TO < 0)) ? 99999 : val;

    PK_S3_TEST.resultaty[irab].items = [];
    PK_S3_TEST.resultaty[irab].itemsto = [];
    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	var t = PK_S3_TEST.types[i];
	PK_S3_TEST.resultaty[irab].items[t] = [];
	PK_S3_TEST.resultaty[irab].itemsto[t] = [];
	for (var j = 0; j < PK_S3_TEST.vyborka_to[t].length; ++j){
	    PK_S3_TEST.resultaty[irab].items[t][j] = PK_S3_TEST.vyborka_to[t][j].id;
	    PK_S3_TEST.resultaty[irab].itemsto[t][j] = PK_S3_TEST.vyborka_to[t][j].bonus;
	}
    }

    PK_S3_TEST.resultaty[irab].skills = {};
    for (var s in PK_S3_TEST.raboty[irab].navyki){
	var sk = (Character.skills[s]||(Character.skills[s]==0)) ? Character.skills[s] : Character.attributes[s];
	PK_S3_TEST.resultaty[irab].skills[s] = sk;
    }

    var progress = $('pk_s3_progress_bar');
    var current_task = $('current_task_box_text');
    var fval = 100 * PK_S3_TEST.setting.sej4as_rabota / PK_S3_TEST.setting.s4itaem_rabot;
    if (progress){
	progress.setAttribute ('value', parseInt(fval, 10));
    }
    if (current_task){
	var sx = new Array(parseInt(fval/3.3, 10)).join('#');
	var ss = new Array(parseInt(31 - fval/3.3, 10)).join('=');
	var sv = '|'+sx+ss+'|';
	current_task.textContent = sv;
    }
    //setTimeout (PK_S3_TEST.prostoj_otbor_to, PK_S3_TEST.rekurs.delay);
};

PK_S3_TEST.podgotavlivaem_rezultat = function (){
    var progress = $('pk_s3_progress_bar');
    if (progress){
	progress.setAttribute ('value', parseInt((0.99 + PK_S3_TEST.setting.sej4as_rabota - 1) / PK_S3_TEST.setting.s4itaem_rabot * 100, 10));
    }
    var max_mask = Math.pow(2, PK_S3_TEST.types.length) - 1;
    var max_index = -1;
    var max_value = -1;
    var irab = PK_S3_TEST.tekushaya_rabota;
    for (var i = PK_S3_TEST.so4etaniya[max_mask].length - 1; i >= 0; --i){
	if (PK_S3_TEST.so4etaniya[max_mask][i].bonus > max_value){
	    max_value = PK_S3_TEST.so4etaniya[max_mask][i].bonus;
	    max_index = i;
	}
    }
    if (max_index >= 0){
	
	var is_duel = ((irab >= PK_S3_TEST.raboty.duel_min)&&(irab < PK_S3_TEST.raboty.duel_max)) ? true : false;
	var hand_shot = Character.skills.punch - Character.skills.shot;
	if (is_duel){
	    if (PK_S3_TEST.raboty[irab].navyki.punch){
		hand_shot = 100;
	    }
	    else if (PK_S3_TEST.raboty[irab].navyki.shot){
		hand_shot = -100;
	    }
	}
	for (var i = PK_S3_TEST.so4etaniya[max_mask][max_index].ids.length - 1; i >= 0; --i){
	    cID = PK_S3_TEST.so4etaniya[max_mask][max_index].ids[i];
	    if (cID > 0){
		var vesch = PK_S3_TEST.items[cID];
		var ochki = 0; //PK_S3_TEST.summa_to(vesch.bonus, PK_S3_TEST.raboty[irab].navyki);
		if (is_duel&&(vesch.type=='right_arm')){
		    ochki += (vesch.damage.damage_min + vesch.damage.damage_max)/2;
		    if (vesch.sub_type=='hand'){
			ochki += hand_shot;
		    }
		    if (vesch.sub_type=='shot'){
			ochki -= hand_shot;
		    }
		    PK_S3_TEST.so4etaniya[max_mask][max_index].bonus -= ochki;
		}
	    }
	}

        PK_S3_TEST.resultaty[irab] = {};
	PK_S3_TEST.resultaty[irab].bonus = Math.floor(PK_S3_TEST.so4etaniya[max_mask][max_index].bonus);
	PK_S3_TEST.resultaty[irab].selfTO = Math.floor(PK_S3_TEST.summa_to2(Character, PK_S3_TEST.raboty[irab].navyki));
	PK_S3_TEST.resultaty[irab].TO = PK_S3_TEST.resultaty[irab].bonus + PK_S3_TEST.resultaty[irab].selfTO - PK_S3_TEST.raboty[irab].malus;
	
	if ((irab == PK_S3_TEST.raboty.build)&&(PK_S3_TEST.bonus.build)){
	    PK_S3_TEST.resultaty[irab].TO *= PK_S3_TEST.bonus.build;
	}
	if (irab == PK_S3_TEST.raboty.health){
	    PK_S3_TEST.resultaty[irab].TO = 90 + Character.level * 10 + PK_S3_TEST.resultaty[irab].TO * PK_S3_TEST.bonus.life;
	}
	var val = Math.round((((0.9 * PK_S3_TEST.raboty[irab].resultaty.dengi + 5) * Math.pow(PK_S3_TEST.resultaty[irab].TO + 1, 0.2))) * 2 * PK_S3_TEST.bonus.money);
	PK_S3_TEST.resultaty[irab].dengi = (isNaN(val)||(val < 0)||(PK_S3_TEST.resultaty[irab].TO < 0)) ? 0 : val;
	val = Math.round(PK_S3_TEST.raboty[irab].resultaty.opyt * 2 * PK_S3_TEST.bonus.exp);
	PK_S3_TEST.resultaty[irab].opyt = (isNaN(val)||(val < 0)||(PK_S3_TEST.resultaty[irab].TO < 0)) ? 0 : val;
	val = Math.round((((0.9 * PK_S3_TEST.raboty[irab].resultaty.vezenie + 5) * Math.pow(PK_S3_TEST.resultaty[irab].TO + 1, 0.2))) * 15 * PK_S3_TEST.bonus.money);
	PK_S3_TEST.resultaty[irab].vezenie = (isNaN(val)||(val < 0)||(PK_S3_TEST.resultaty[irab].TO < 0)) ? 0 : val;
	// vezmin = vezmax / 3.   vez_sred = (min+max)/2 = vezmin*2/3;
	val = Math.round((8*Math.pow(PK_S3_TEST.raboty[irab].resultaty.boom, 1.35)) / (PK_S3_TEST.resultaty[irab].TO + 4));
	PK_S3_TEST.resultaty[irab].boom = (isNaN(val)||(val < 0)||(PK_S3_TEST.resultaty[irab].TO < 0)) ? 99999 : val;
	PK_S3_TEST.resultaty[irab].sets = PK_S3_TEST.so4etaniya[max_mask][max_index].sets;
	PK_S3_TEST.resultaty[irab].items = [];
	PK_S3_TEST.resultaty[irab].itemsto = [];
	for (var i = PK_S3_TEST.so4etaniya[max_mask][max_index].ids.length - 1; i >= 0; --i){
	    cID = PK_S3_TEST.so4etaniya[max_mask][max_index].ids[i];
	    if (cID > 0){
		PK_S3_TEST.resultaty[irab].items[PK_S3_TEST.items[cID].type] = cID;
		PK_S3_TEST.resultaty[irab].itemsto[PK_S3_TEST.items[cID].type] = PK_S3_TEST.summa_to(PK_S3_TEST.items[cID].bonus, PK_S3_TEST.raboty[irab].navyki);
	    }
	}
	if (PK_S3_TEST.setting.is_luck){
	    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
		var vyb = PK_S3_TEST.vyborka[PK_S3_TEST.types[i]]['season_set']
		if (vyb){
		    PK_S3_TEST.resultaty[irab].items[PK_S3_TEST.types[i]] = vyb.id;
		    PK_S3_TEST.resultaty[irab].itemsto[PK_S3_TEST.types[i]] = vyb.bonus;
		}
	    }
	}
	if (!PK_S3_TEST.resultaty[irab].items.animal){
	    PK_S3_TEST.resultaty[irab].itemsto.animal = 0;
	    for (var i = 605; i >= 600; --i){
		if (PK_S3_TEST.vozmozhnye_veschi[i]){
		    PK_S3_TEST.resultaty[irab].items.animal = i;
		    break;
		}
	    }
	    if (!PK_S3_TEST.resultaty[irab].items.animal && PK_S3_TEST.vozmozhnye_veschi[607]) PK_S3_TEST.resultaty[irab].items.animal = 607;
	    if (!PK_S3_TEST.resultaty[irab].items.animal && PK_S3_TEST.vozmozhnye_veschi[607]) PK_S3_TEST.resultaty[irab].items.animal = 609;
	    if (!PK_S3_TEST.resultaty[irab].items.animal && PK_S3_TEST.vozmozhnye_veschi[607]) PK_S3_TEST.resultaty[irab].items.animal = 614;
	}
	if (!PK_S3_TEST.resultaty[irab].items.animal){
	    PK_S3_TEST.resultaty[irab].itemsto.animal = 0;
	}
	else{
	    PK_S3_TEST.resultaty[irab].itemsto.animal = PK_S3_TEST.summa_to(PK_S3_TEST.items[PK_S3_TEST.resultaty[irab].items.animal].bonus, PK_S3_TEST.raboty[irab].navyki);
	};
	if (PK_S3_TEST.activity == 'nenuzhnoe'){
	    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
		if (PK_S3_TEST.resultaty[irab].items[PK_S3_TEST.types[i]]){
		    PK_S3_TEST.ispolzuemye[PK_S3_TEST.resultaty[irab].items[PK_S3_TEST.types[i]]] = true;
		}
	    }
	}
	PK_S3_TEST.resultaty[irab].skills = {};
	var kompl = [];
	for (var i = 0; i < PK_S3_TEST.nabory.length; ++i){
	    kompl[i] = 0;
	    for (var j = 0; j < PK_S3_TEST.types.length; ++j){
		var cID = PK_S3_TEST.resultaty[irab].items[PK_S3_TEST.types[j]];
		if (cID&&(cID>0)&&(PK_S3_TEST.items[cID].set.key==PK_S3_TEST.nabory[i])){
		    ++kompl[i];
		}
	    }
	}
	for (var s in PK_S3_TEST.raboty[irab].navyki){
	    var sk = (Character.skills[s]||(Character.skills[s]==0)) ? Character.skills[s] : Character.attributes[s];
	    var z = {};
	    z[s] = 1;
	    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
		var cID = PK_S3_TEST.resultaty[irab].items[PK_S3_TEST.types[i]];
		if (cID&&(cID>0)){
		    sk += PK_S3_TEST.summa_to(PK_S3_TEST.items[cID].bonus, z);
		}
	    }
	    for (var k = 0; k < PK_S3_TEST.nabory.length; ++k){
		if (kompl[k]>0){
		    sk += PK_S3_TEST.summa_to(PK_S3_TEST.komplekty[PK_S3_TEST.nabory[k]][kompl[k]].bonus, z);
		}
	    }
	    PK_S3_TEST.resultaty[irab].skills[s] = sk;
	}
    }
    else{
	alert ('error d\'t find max set');
    }

    var progress = $('pk_s3_progress_bar');
    var current_task = $('current_task_box_text');
    var fval = 100 * PK_S3_TEST.setting.sej4as_rabota / PK_S3_TEST.setting.s4itaem_rabot;
    if (progress){
	progress.setAttribute ('value', parseInt(fval, 10));
    }
    if (current_task){
	var sx = new Array(parseInt(fval/3.3, 10)).join('#');
	var ss = new Array(parseInt(31 - fval/3.3, 10)).join('=');
	var sv = '|'+sx+ss+'|';
	current_task.textContent = sv;
    }
    setTimeout (PK_S3_TEST.otbor_nuzhnykh, PK_S3_TEST.rekurs.delay);
};

PK_S3_TEST.podgotavlivaem_rezultat_fort = function(){
    var progress = $('pk_s3_progress_bar');
    if (progress){
	progress.setAttribute ('value', parseInt((100 * PK_S3_TEST.setting.sej4as_rabota - 1) / PK_S3_TEST.setting.s4itaem_rabot, 10));
    }
    var max_mask = Math.pow(2, PK_S3_TEST.types.length) - 1;
    for (var i = PK_S3_TEST.so4etaniya[max_mask].length - 1; i >= 0; --i){
	if (PK_S3_TEST.so4etaniya[max_mask][i].health < PK_S3_TEST.setting.min_health){
	    PK_S3_TEST.so4etaniya[max_mask].splice(i,1);
	}
    }
    var frab = PK_S3_TEST.tekushaya_rabota
    var frabota = PK_S3_TEST.raboty[frab];
    var max_value = 0;
    var max_index = -1;
    var dmg = 0;
    for (var i = PK_S3_TEST.so4etaniya[max_mask].length - 1; i >= 0; --i){
	var aim = Character.skills.aim;
	var dodge = Character.skills.dodge;
	var leadership = Character.skills.leadership;
	var skill = 0;
	if (frabota.navyki.endurance){
	    skill += Character.skills.endurance;
	}
	else{
	    skill += Character.skills.hide;
	}
	kompl = {};
	for (var j = PK_S3_TEST.so4etaniya[max_mask][i].ids.length - 1; j >= 0; --j){
	    var fID = PK_S3_TEST.so4etaniya[max_mask][i].ids[j];
	    if (fID && (fID > 0)){
		var bron = PK_S3_TEST.items[fID];
		if (bron.type == 'left_arm'){
		    var dmg_c = bron.damage.damage_min + bron.damage.damage_max;
		    if (dmg_c < dmg) continue;
		    dmg = dmg_c;
		}
		aim += PK_S3_TEST.summa_to(bron.bonus, {aim:1});
		dodge += PK_S3_TEST.summa_to(bron.bonus, {dodge:1});
		leadership += PK_S3_TEST.summa_to(bron.bonus, {leadership:1});
		if (frabota.navyki.endurance){
		    skill+= PK_S3_TEST.summa_to(bron.bonus, {endurance:1});
		}
		else{
		    skill+= PK_S3_TEST.summa_to(bron.bonus, {hide:1});
		}
		if (bron.set.key){
		    if (kompl[bron.set.key]){
			++kompl[bron.set.key]
		    }
		    else{
			kompl[bron.set.key] = 1;
		    }
		}
	    }
	}
	for (var j = 0; j < PK_S3_TEST.nabory.length; ++j){
	    if (kompl[PK_S3_TEST.nabory[j]]){
		var kbonus = PK_S3_TEST.komplekty[PK_S3_TEST.nabory[j]][kompl[PK_S3_TEST.nabory[j]]].bonus
		aim += PK_S3_TEST.summa_to(kbonus, {aim:1});
		dodge += PK_S3_TEST.summa_to(kbonus, {dodge:1});
		leadership += PK_S3_TEST.summa_to(kbonus, {leadership:1});
		if (frabota.navyki.endurance){
		    skill += PK_S3_TEST.summa_to(kbonus, {endurance:1});
		}
		else{
		    skill += PK_S3_TEST.summa_to(kbonus, {hide:1});
		}
	    }
	}
	var f_a = PK_S3_TEST.fort_bonus(aim);
	var f_d = PK_S3_TEST.fort_bonus(dodge);
	var f_s = PK_S3_TEST.fort_bonus(skill);
	var f_l = PK_S3_TEST.fort_bonus(leadership);
	var value = f_a * frabota.navyki.aim + f_d * frabota.navyki.dodge + f_s + f_l;
	if (value > max_value){
	    max_value = value;
	    max_index = i;
	    // попытка сделать навыки более "ровными"
	    var delit = 4;
	    if (frabota.navyki.aim < 0.1){
		aim = 0;
		delit = 3;
	    }
	    if ((frabota.navyki.dodge < 0.1)){
		dodge = 0;
		delit = 3;
	    }
	    var sum = aim + dodge + skill + leadership;
	    var sa = sum / delit;
	    var d_aim = sa - Character.skills.aim;
	    if (d_aim <= 0) d_aim = 0.001;
	    if (frabota.navyki.aim < 0.1){
		d_aim = 0.001;
	    }
	    var d_dodge = sa - Character.skills.dodge;
	    if (d_dodge <= 0) d_dodge = 0.001;
	    if ((frabota.navyki.dodge < 0.1)){
		d_dodge = 0.001;
	    }
	    var d_leadership = sa - Character.skills.leadership;
	    if (d_leadership <= 0) d_leadership = 0.001;
	    
	    if (frabota.navyki.endurance){
		var d_skill = sa - Character.skills.endurance;
	    }
	    else{
		var d_skill = sa - Character.skills.hide;
	    }
	    if (d_skill <= 0) d_skill = 0.001;

	    var d_sum = d_aim + d_dodge + d_skill + d_leadership;
	    // окончание попытки.
	    
	    PK_S3_TEST.forty.ves.aim = d_aim / d_sum;
	    PK_S3_TEST.forty.ves.dodge = d_dodge / d_sum;
	    PK_S3_TEST.forty.ves.leadership = d_leadership / d_sum;
	    PK_S3_TEST.forty.ves.skill = d_skill / d_sum;
	    PK_S3_TEST.forty.items = [];
	    for (var f = PK_S3_TEST.so4etaniya[max_mask][max_index].ids.length - 1; f >= 0; --f){
		PK_S3_TEST.forty.items[f] = PK_S3_TEST.so4etaniya[max_mask][max_index].ids[f];
	    }
	    PK_S3_TEST.forty.old_attack = 23.5 + f_a + f_s + PK_S3_TEST.apply_fort_bonus_lead(f_l);
	    PK_S3_TEST.forty.old_defense = 8.5 + f_d + f_s + PK_S3_TEST.apply_fort_bonus_lead(f_l);
	}
	
    }
    if (max_index >= 0){
	var next = false;
	if (PK_S3_TEST.forty.max_value < max_value){
	    PK_S3_TEST.forty.max_value = max_value;
	    PK_S3_TEST.resultaty[frab].items = [];
	    for (var f = PK_S3_TEST.forty.items.length - 1; f >= 0; --f){
		fID = PK_S3_TEST.forty.items[f];
		if (fID > 0){
		    PK_S3_TEST.resultaty[frab].items[PK_S3_TEST.items[fID].type] = fID;
		}
	    }
	    if (!PK_S3_TEST.resultaty[frab].items.animal){
		for (var ff = 605; ff >= 600; --ff){
		    if (PK_S3_TEST.vozmozhnye_veschi[ff]){
		        PK_S3_TEST.resultaty[frab].items.animal = ff;
		        break;
		    }
		}
		if (!PK_S3_TEST.resultaty[frab].items.animal && PK_S3_TEST.vozmozhnye_veschi[607]) PK_S3_TEST.resultaty[frab].items.animal = 607;
	    }
	    PK_S3_TEST.forty.attack = PK_S3_TEST.forty.old_attack;
	    PK_S3_TEST.forty.defense = PK_S3_TEST.forty.old_defense;
	    next = true;
	}
	else if (PK_S3_TEST.forty.old_value < max_value){
	    PK_S3_TEST.forty.old_value = max_value;
	    next = true;
	}
	if (PK_S3_TEST.forty.old_value == PK_S3_TEST.forty.max_value){
	    next = false;
	}
	if (next){
	    PK_S3_TEST.otbor_nuzhnykh_fort(frab);
	    return;
	}
    }
    // вещи хранятся в результатах.
    PK_S3_TEST.resultaty[frab].dengi = 0;
    PK_S3_TEST.resultaty[frab].opyt = 0;
    PK_S3_TEST.resultaty[frab].vezenie = 0;
    PK_S3_TEST.resultaty[frab].boom = 0;


    if (PK_S3_TEST.forty.max_value <= 0){
	var aim = Character.skills.aim;
	var dodge = Character.skills.dodge;
	var leadership = Character.skills.leadership;
	var skill = 0;
	if (frabota.navyki.endurance){
	    skill += Character.skills.endurance;
	}
	else{
	    skill += Character.skills.hide;
	}
	PK_S3_TEST.resultaty[frab].items = [];
	var f_a = PK_S3_TEST.fort_bonus(aim);
	var f_d = PK_S3_TEST.fort_bonus(dodge);
	var f_s = PK_S3_TEST.fort_bonus(skill);
	var f_l = PK_S3_TEST.fort_bonus(leadership);
	PK_S3_TEST.forty.attack = 23.5 + f_a + f_s + PK_S3_TEST.apply_fort_bonus_lead(f_l);
	PK_S3_TEST.forty.defense = 8.5 + f_a + f_s + PK_S3_TEST.apply_fort_bonus_lead(f_l);
	PK_S3_TEST.forty.max_value = 0;
    }
    
    PK_S3_TEST.resultaty[frab].skills = {};
    var kompl = [];
    for (var i = 0; i < PK_S3_TEST.nabory.length; ++i){
	kompl[i] = 0;
	for (var j = 0; j < PK_S3_TEST.types.length; ++j){
	    var cID = PK_S3_TEST.resultaty[frab].items[PK_S3_TEST.types[j]];
	    if (cID&&(cID>0)&&(PK_S3_TEST.items[cID].set.key==PK_S3_TEST.nabory[i])){
		++kompl[i];
	    }
	}
    }
    var hnav = frabota.navyki;
    hnav.health = 1;
    for (var s in hnav){
	var sk = Character.skills[s];
	var z = {};
	z[s] = 1;
	for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	    var cID = PK_S3_TEST.resultaty[frab].items[PK_S3_TEST.types[i]];
	    if (cID&&(cID>0)){
		sk += PK_S3_TEST.summa_to(PK_S3_TEST.items[cID].bonus, z);
	    }
	}
	for (var k = 0; k < PK_S3_TEST.nabory.length; ++k){
	    if (kompl[k]>0){
		sk += PK_S3_TEST.summa_to(PK_S3_TEST.komplekty[PK_S3_TEST.nabory[k]][kompl[k]].bonus, z);
	    }
        }
	PK_S3_TEST.resultaty[frab].skills[s] = sk;
    }
    PK_S3_TEST.resultaty[frab].selfTO = Math.round(PK_S3_TEST.forty.attack*100)/100;
    PK_S3_TEST.resultaty[frab].bonus = Math.round(PK_S3_TEST.forty.defense*100)/100;
    PK_S3_TEST.resultaty[frab].TO = Math.round(PK_S3_TEST.forty.max_value*100)/100;
    PK_S3_TEST.forty.ves = {aim:1, dodge:1, leadership:1, skill:1};
    PK_S3_TEST.forty.is_zero = true;


    if (PK_S3_TEST.activity == 'nenuzhnoe'){
        for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	    if (PK_S3_TEST.resultaty[frab].items[PK_S3_TEST.types[i]]){
		PK_S3_TEST.ispolzuemye[PK_S3_TEST.resultaty[frab].items[PK_S3_TEST.types[i]]] = true;
	    }
	}
    }

    var progress = $('pk_s3_progress_bar');
    var current_task = $('current_task_box_text');
    var fval = 100 * PK_S3_TEST.setting.sej4as_rabota / PK_S3_TEST.setting.s4itaem_rabot;
    if (progress){
	progress.setAttribute ('value', parseInt(fval, 10));
    }
    if (current_task){
	var sx = new Array(parseInt(fval/3.3, 10)).join('#');
	var ss = new Array(parseInt(31 - fval/3.3, 10)).join('=');
	var sv = '|'+sx+ss+'|';
	current_task.textContent = sv;
    }
    setTimeout (PK_S3_TEST.otbor_nuzhnykh, PK_S3_TEST.rekurs.delay);
}

PK_S3_TEST.podgotavlivaem_rezultat_moving = function (){
    var progress = $('pk_s3_progress_bar');
    if (progress){
	progress.setAttribute ('value', parseInt((0.99 + PK_S3_TEST.setting.sej4as_rabota - 1) / PK_S3_TEST.setting.s4itaem_rabot * 100, 10));
    }
    var max_mask = Math.pow(2, PK_S3_TEST.types.length) - 1;
    var max_index = -1;
    var max_value = 0;
    var max_zver = 0;
    var irab = PK_S3_TEST.raboty.moving;
    var iRide = Character.skills.ride;
    for (var i = PK_S3_TEST.so4etaniya[max_mask].length - 1; i >= 0; --i){
	aID = 0;
	for (var j = PK_S3_TEST.so4etaniya[max_mask][i].ids.length; j >= 0; --j){
	    var cID = PK_S3_TEST.so4etaniya[max_mask][i].ids[j];
	    if ((cID >= 600)&&(cID < 700)){
		aID = cID;
	    }
	}
	var skorost = 100;
	if (aID){
	    //var skor_zverya = PK_S3_TEST.items[aID].speed;
	    //var skor_bonusov = PK_S3_TEST.so4etaniya[max_mask][i].speed / skor_zverya; // невероятная (пока?) скорость на других предметах
	    //skorost = 100 / skor_zverya + iRide + PK_S3_TEST.so4etaniya[max_mask][i].ride;
	    //skorost /= skor_bonusov;
	    skorost = 100 / PK_S3_TEST.so4etaniya[max_mask][i].speed + iRide + PK_S3_TEST.so4etaniya[max_mask][i].ride;
	    skorost *= (1 + PK_S3_TEST.so4etaniya[max_mask][i].kompl);
	}
	else{	// пеший идиот
	    skorost = 100 / PK_S3_TEST.so4etaniya[max_mask][i].speed * (1 + PK_S3_TEST.so4etaniya[max_mask][i].kompl);
	}
	if (skorost > max_value){
	    max_value = skorost;
	    max_index = i;
	    max_zver = aID;
	}
    }
    if (max_index >= 0){
	max_value *= PK_S3_TEST.bonus.speed;
        PK_S3_TEST.resultaty[irab] = {};
	PK_S3_TEST.resultaty[irab].bonus = Math.round(100 * (1 + PK_S3_TEST.so4etaniya[max_mask][max_index].kompl))+'%';
	PK_S3_TEST.resultaty[irab].selfTO = PK_S3_TEST.so4etaniya[max_mask][max_index].ride + iRide; //Character.skills
	PK_S3_TEST.resultaty[irab].TO = Math.round(max_value);
	PK_S3_TEST.resultaty[irab].sets = PK_S3_TEST.so4etaniya[max_mask][max_index].sets;
	PK_S3_TEST.resultaty[irab].items = [];
	PK_S3_TEST.resultaty[irab].itemsto = [];
	for (var i = PK_S3_TEST.so4etaniya[max_mask][max_index].ids.length - 1; i >= 0; --i){
	    cID = PK_S3_TEST.so4etaniya[max_mask][max_index].ids[i];
	    if (cID > 0){
		PK_S3_TEST.resultaty[irab].items[PK_S3_TEST.items[cID].type] = cID;
		PK_S3_TEST.resultaty[irab].itemsto[PK_S3_TEST.items[cID].type] = PK_S3_TEST.summa_to(PK_S3_TEST.items[cID].bonus, PK_S3_TEST.raboty[irab].navyki);
	    }
	}
	if (PK_S3_TEST.resultaty[irab].items.animal){
	    PK_S3_TEST.resultaty[irab].itemsto.animal = Math.round(100 / PK_S3_TEST.items[PK_S3_TEST.resultaty[irab].items.animal].speed) + '%';
	}
	PK_S3_TEST.resultaty[irab].skills = {};
	PK_S3_TEST.resultaty[irab].skills.ride = PK_S3_TEST.so4etaniya[max_mask][max_index].ride + iRide;
	PK_S3_TEST.resultaty[irab].dengi = 0;
	PK_S3_TEST.resultaty[irab].opyt = 0;
	PK_S3_TEST.resultaty[irab].vezenie = 0;
	PK_S3_TEST.resultaty[irab].boom = 99999;

        if (PK_S3_TEST.activity == 'nenuzhnoe'){
            for (var i = 0; i < PK_S3_TEST.types.length; ++i){
		if (PK_S3_TEST.resultaty[irab].items[PK_S3_TEST.types[i]]){
		    PK_S3_TEST.ispolzuemye[PK_S3_TEST.resultaty[irab].items[PK_S3_TEST.types[i]]] = true;
		}
	    }
	}
    }
    var progress = $('pk_s3_progress_bar');
    var current_task = $('current_task_box_text');
    var fval = 100 * PK_S3_TEST.setting.sej4as_rabota / PK_S3_TEST.setting.s4itaem_rabot;
    if (progress){
	progress.setAttribute ('value', parseInt(fval, 10));
    }
    if (current_task){
	var sx = new Array(parseInt(fval/3.3, 10)).join('#');
	var ss = new Array(parseInt(31 - fval/3.3, 10)).join('=');
	var sv = '|'+sx+ss+'|';
	current_task.textContent = sv;
    }
    setTimeout (PK_S3_TEST.otbor_nuzhnykh, PK_S3_TEST.rekurs.delay);
}


PK_S3_TEST.podgotavlivaem_rezultat_sleep = function (){
    var progress = $('pk_s3_progress_bar');
    if (progress){
	progress.setAttribute ('value', parseInt((0.99 + PK_S3_TEST.setting.sej4as_rabota - 1) / PK_S3_TEST.setting.s4itaem_rabot * 100, 10));
    }
    var max_mask = Math.pow(2, PK_S3_TEST.types.length) - 1;
    var max_index = -1;
    var max_value = 0;
    var max_value2 = 0;
    var irab = PK_S3_TEST.raboty.energy;
    var iHealth = Character.skills.health;
//    var baseHP = 90 + Character.level * 10 + iHealth * PK_S3_TEST.bonus.life;
    for (var i = PK_S3_TEST.so4etaniya[max_mask].length - 1; i >= 0; --i){
	var regeneration = PK_S3_TEST.so4etaniya[max_mask][i].regen;
	var health = PK_S3_TEST.so4etaniya[max_mask][i].heal;
	if (regeneration > max_value){
	    max_value = regeneration;
	    max_value2 = health;
	    max_index = i;
	}
	else if ((regeneration == max_value) && (health > max_value2)){
	    max_value = regeneration;
	    max_value2 = health;
	    max_index = i;
	}
    }
    if (max_index >= 0){
        PK_S3_TEST.resultaty[irab] = {};
	PK_S3_TEST.resultaty[irab].bonus = PK_S3_TEST.so4etaniya[max_mask][max_index].heal;
	PK_S3_TEST.resultaty[irab].selfTO = iHealth; //Character.skills
	PK_S3_TEST.resultaty[irab].TO = Math.round(max_value*10000)/100;
	PK_S3_TEST.resultaty[irab].sets = PK_S3_TEST.so4etaniya[max_mask][max_index].sets;
	PK_S3_TEST.resultaty[irab].items = [];
	PK_S3_TEST.resultaty[irab].itemsto = [];
	for (var i = PK_S3_TEST.so4etaniya[max_mask][max_index].ids.length - 1; i >= 0; --i){
	    cID = PK_S3_TEST.so4etaniya[max_mask][max_index].ids[i];
	    if (cID > 0){
		PK_S3_TEST.resultaty[irab].items[PK_S3_TEST.items[cID].type] = cID;
		PK_S3_TEST.resultaty[irab].itemsto[PK_S3_TEST.items[cID].type] = PK_S3_TEST.summa_to(PK_S3_TEST.items[cID].bonus, {health:1});
	    }
	}
 	if (!PK_S3_TEST.resultaty[irab].items.animal){
	    for (var i = 605; i >= 600; --i){
		if (PK_S3_TEST.vozmozhnye_veschi[i]){
		    PK_S3_TEST.resultaty[irab].items.animal = i;
		    break;
		}
	    }
	    if (!PK_S3_TEST.resultaty[irab].items.animal && PK_S3_TEST.vozmozhnye_veschi[607]) PK_S3_TEST.resultaty[irab].items.animal = 607;
	    if (PK_S3_TEST.resultaty[irab].items.animal){
		PK_S3_TEST.resultaty[irab].itemsto.animal = 0;
	    }
	}
	PK_S3_TEST.resultaty[irab].skills = {};
	PK_S3_TEST.resultaty[irab].skills.health = PK_S3_TEST.so4etaniya[max_mask][max_index].heal + iHealth;
	PK_S3_TEST.resultaty[irab].dengi = 0;
	PK_S3_TEST.resultaty[irab].opyt = 0;
	PK_S3_TEST.resultaty[irab].vezenie = 0;
	PK_S3_TEST.resultaty[irab].boom = 99999;

        if (PK_S3_TEST.activity == 'nenuzhnoe'){
            for (var i = 0; i < PK_S3_TEST.types.length; ++i){
		if (PK_S3_TEST.resultaty[irab].items[PK_S3_TEST.types[i]]){
		    PK_S3_TEST.ispolzuemye[PK_S3_TEST.resultaty[irab].items[PK_S3_TEST.types[i]]] = true;
		}
	    }
	}

   }
    var progress = $('pk_s3_progress_bar');
    var current_task = $('current_task_box_text');
    var fval = 100 * PK_S3_TEST.setting.sej4as_rabota / PK_S3_TEST.setting.s4itaem_rabot;
    if (progress){
	progress.setAttribute ('value', parseInt(fval, 10));
    }
    if (current_task){
	var sx = new Array(parseInt(fval/3.3, 10)).join('#');
	var ss = new Array(parseInt(31 - fval/3.3, 10)).join('=');
	var sv = '|'+sx+ss+'|';
	current_task.textContent = sv;
    }
    setTimeout (PK_S3_TEST.otbor_nuzhnykh, PK_S3_TEST.rekurs.delay);
}


PK_S3_TEST.vyvod_prostyh_rabot = function (){
    setTimeout(PK_S3_TEST.restore_text_message, 2000);
    PK_S3_TEST.show_window_rezultat();
}

PK_S3_TEST.equip_adds = function(rabota_id){
    for (var i = 0; i < PK_S3_TEST.types.length; ++i){// PK_S3_TEST.resultaty[rabota_id].items.length;++i){
	var qID = PK_S3_TEST.resultaty[rabota_id].items[PK_S3_TEST.types[i]];
	if (qID){
	    PK_S3_TEST.odevalo4ka.items.push(qID);
	}
    }
    if ((rabota_id > 0)&&(rabota_id < PK_S3_TEST.raboty.max)){
	var minimap_job = $('minimap_job_id');
	if (minimap_job){
	    minimap_job.value = rabota_id;
	}
    }
    setTimeout(PK_S3_TEST.equip_start,PK_S3_TEST.rekurs.delay);
    return;
}

PK_S3_TEST.equip_add = function(item_id) {
    PK_S3_TEST.odevalo4ka.items.push(item_id);
    setTimeout(PK_S3_TEST.equip_start,PK_S3_TEST.rekurs.delay);
    return;
}

PK_S3_TEST.equip_start = function(){
    PK_S3_TEST.odevalo4ka.count = 0;
    if ((!wman.getById(Wear.uid)) || (!(Bag.loaded))){
	Wear.open();
	PK_S3_TEST.odevalo4ka.bagazh = true;
	PK_S3_TEST.show_text_message ('Ожидаем открытия багажа...', 5000);
    }
    setTimeout(PK_S3_TEST.equip_wait_bagazh, 10);
}

PK_S3_TEST.equip_wait_bagazh = function(){
    if (++PK_S3_TEST.odevalo4ka.count > PK_S3_TEST.odevalo4ka.repeat){
	PK_S3_TEST.show_text_message ('Не удалось открыть окно багажа!', 5000);
	return;
    }
    if ((!wman.getById(Wear.uid)) || (!(Bag.loaded))){
	setTimeout(PK_S3_TEST.equip_wait_bagazh, PK_S3_TEST.odevalo4ka.wait_inventory);
	return;
    }
    PK_S3_TEST.odevalo4ka.count = 0;
    PK_S3_TEST.equip_carring();
}

PK_S3_TEST.equip_carring = function(){
    if (PK_S3_TEST.odevalo4ka.items.length == 0){
	if (Character.characterSex == 'male'){
	    PK_S3_TEST.show_text_message ('Ты оделся!', 5000);
	}
	else{
	    PK_S3_TEST.show_text_message ('Ты оделась!', 5000);
	}
	return;
    }
    PK_S3_TEST.show_text_message ('Одеваемся!', 1000);
    var eID = PK_S3_TEST.odevalo4ka.items[0];
    var type = (PK_S3_TEST.items[eID]) ? PK_S3_TEST.items[eID].type : ' ';
    if ((type==' ')||Wear.wear[type]){
	if ((type==' ')||(Wear.wear[type].obj.item_id == eID)){
	    //уже одето, выплёвываем из очереди
	    PK_S3_TEST.odevalo4ka.items.shift();
	    PK_S3_TEST.odevalo4ka.count = 0;
	    PK_S3_TEST.equip_carring();
	    return;
	}
    }
    var bag = Bag;
    var wear = Wear;
    var he_find = 0;
    for (var t = 0; (he_find == 0) && (t < PK_S3_TEST.types.length); ++t){
	var bag_type = bag.items[PK_S3_TEST.types[t]];
	for (var ii in bag_type){
	    if (bag_type[ii].obj.item_id == eID){
	       he_find = bag_type[ii];
	       break;
	    }
	}
    }
    if (he_find == 0){
	//не нашли такое, выплёвываем
	PK_S3_TEST.odevalo4ka.items.shift();
	PK_S3_TEST.equip_wait_bagazh();
	return;
    }
    wear.carry(he_find);
    PK_S3_TEST.odevalo4ka.count = 0;
    setTimeout(PK_S3_TEST.equip_wait_carry,PK_S3_TEST.odevalo4ka.wait_carry)
}

PK_S3_TEST.equip_wait_carry = function() {
    if (++PK_S3_TEST.odevalo4ka.count > PK_S3_TEST.odevalo4ka.repeat){
	// одеть не удалось, материмся и отказываемся от этой вещи
	PK_S3_TEST.show_text_message ('Вещь: '+PK_S3_TEST.items[PK_S3_TEST.odevalo4ka.items[0]].name+' надеть не удалось!', 3000);
	PK_S3_TEST.odevalo4ka.items.shift();
	PK_S3_TEST.equip_carring();
	return;
    }
    var eID = PK_S3_TEST.odevalo4ka.items[0];
    var type = PK_S3_TEST.items[eID].type;
    
    if (Wear.wear[type]&&(Wear.wear[type].obj.item_id == eID)){
	PK_S3_TEST.equip_carring();
	return;
    }
    setTimeout(PK_S3_TEST.equip_wait_carry,PK_S3_TEST.odevalo4ka.wait_carry);
}

PK_S3_TEST.equip_items_save = function(irabot){
    ind = PK_S3_TEST.cookies.save.length;
    for (var i = 0; i < PK_S3_TEST.cookies.save.length; ++i){
	if (PK_S3_TEST.cookies.save[i].name == PK_S3_TEST.raboty[irabot].rus_name){
	    ind = i;
	    break;
	}
    }
    PK_S3_TEST.cookies.save[ind] = {};
    PK_S3_TEST.cookies.save[ind].name = PK_S3_TEST.raboty[irabot].rus_name;
    PK_S3_TEST.cookies.save[ind].ids = [];
    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	if (PK_S3_TEST.resultaty[irabot].items[PK_S3_TEST.types[i]]){
	    PK_S3_TEST.cookies.save[ind].ids.push (PK_S3_TEST.resultaty[irabot].items[PK_S3_TEST.types[i]]);
	}
    }
    PK_S3_TEST.save_nabory();
    PK_S3_TEST.spam_bagazh_option();
}

PK_S3_TEST.equip_items_delete = function(irabot){
    name = PK_S3_TEST.raboty[irabot].rus_name;
    for (var i = PK_S3_TEST.cookies.save.length - 1; i >= 0; --i){
	if (PK_S3_TEST.cookies.save[i].name == name){
	    PK_S3_TEST.cookies.save.splice(i,1);
	}
    }
    PK_S3_TEST.save_nabory();
    PK_S3_TEST.spam_bagazh_option();
}

PK_S3_TEST.my_name_is = function (){
    if (Character&&Character.name){
	PK_S3_TEST.cookies.name = location.host.substr(0,4)+Character.name;
	PK_S3_TEST.vyvod.region = location.host.substr(0,2);
	setTimeout(PK_S3_TEST.load_nabory, 1000);
	setTimeout(PK_S3_TEST.load_raboty, 2000);
	setTimeout(PK_S3_TEST.check_raboty, 3000);
    }
    else{
	setTimeout(PK_S3_TEST.my_name_is, 1000);
    }
};

PK_S3_TEST.check_raboty = function (){
    if (!window.JobList) return;
    if (PK_S3_TEST.vyvod.region=='ru'){
	for (var i = 1; i < PK_S3_TEST.raboty.max; ++i){
	    if (JobList[i]&&JobList[i].name && (JobList[i].name != PK_S3_TEST.raboty[i].rus_name)){
	        PK_S3_TEST.informer += 'Неверная работа. Старое название: "'+PK_S3_TEST.raboty[i].rus_name+'", новое название: "'+JobList[i].name+'"\n';
	        PK_S3_TEST.raboty[i].rus_name = JobList[i].name;
	    }
	}
    }
    else{
	for (var i = 1; i < PK_S3_TEST.raboty.max; ++i){
	    if (JobList[i]){
		PK_S3_TEST.raboty[i].orig_name = JobList[i].name;
	    }
	}
    }
}

PK_S3_TEST.except_raboty = function (id, value){
    if (PK_S3_TEST.raboty[id]){
	PK_S3_TEST.raboty[id].except = value;
    }
    PK_S3_TEST.save_raboty();
}


PK_S3_TEST.set_cookie = function (name, value){
    expires = new Date();
    expires.setTime(expires.getTime() + (1000 * 60 * 60 * 24 * 180));
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + expires.toGMTString();
}

PK_S3_TEST.get_cookie = function (name) {
    var cookie = " " + document.cookie;
    var search = " " + escape(name) + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
	offset = cookie.indexOf(search);
	if (offset != -1) {
	    offset += search.length;
	    end = cookie.indexOf(";", offset)
	    if (end == -1) {
		end = cookie.length;
	    }
	    setStr = unescape(cookie.substring(offset, end));
	}
    }
    return(setStr);
};

PK_S3_TEST.save_nabory = function (){
    PK_S3_TEST.bsort(PK_S3_TEST.cookies.save, 'name');
    var str = '';
    for (var i = 0; i < PK_S3_TEST.cookies.save.length; ++i){
	str += (str=='')?'':'@';
	str += PK_S3_TEST.cookies.save[i].name + '~';
	var str2 = '';
	for (var j = 0; j < PK_S3_TEST.cookies.save[i].ids.length; ++j){
	    str2+= (str2=='') ? '' : ',';
	    str2+= PK_S3_TEST.cookies.save[i].ids[j];
	}
	str += str2;
    }
    PK_S3_TEST.set_cookie(PK_S3_TEST.cookies.name, str);

    PK_S3_TEST.show_text_message ('Наборы сохранены', 1500);    
}

PK_S3_TEST.save_raboty = function (){
    var str = '';
    for (var i = 1; i < 999; ++i){
	if (!PK_S3_TEST.raboty[i]) continue;
	if (PK_S3_TEST.raboty[i].except){
	    str += (str=='')?'':',';
	    str += i;
	}
    }
    PK_S3_TEST.set_cookie(PK_S3_TEST.cookies.name+'r', str);
};

PK_S3_TEST.load_nabory = function (){
    var str = PK_S3_TEST.get_cookie(PK_S3_TEST.cookies.name);
    PK_S3_TEST.cookies.save = [];
    if (!str||(str=='')||(str.length==0)) return;
    var ar1 = str.split('@');
    for (var i = 0; i < ar1.length; ++i){
	if (ar1[i].length == 0) continue;
	PK_S3_TEST.cookies.save[i] = {};
	var ar2 = ar1[i].split('~');
	PK_S3_TEST.cookies.save[i].name = ar2[0];
	PK_S3_TEST.cookies.save[i].ids = [];
	if (!ar2[1]) continue;
	var ar3 = ar2[1].split(',');
	for (var j = 0; j < ar3.length; ++j){
	    PK_S3_TEST.cookies.save[i].ids.push (ar3[j]);
	}
    }
    var izbytok = false;
    for (var i = PK_S3_TEST.cookies.save.length - 1; i >= 0; --i){
	if (!PK_S3_TEST.cookies.save[i]){
	    PK_S3_TEST.cookies.save.splice(i,1);
	}
    }
    PK_S3_TEST.bsort(PK_S3_TEST.cookies.save, 'name');
    for (var i = PK_S3_TEST.cookies.save.length - 1; i > 0; --i){
	    if (PK_S3_TEST.cookies.save[i].name == PK_S3_TEST.cookies.save[i-1].name){
		PK_S3_TEST.cookies.save.splice(i,1);
		izbytok = true;
	}
    }
    if (izbytok) PK_S3_TEST.save_nabory();
}

PK_S3_TEST.load_raboty = function (){
    var str = PK_S3_TEST.get_cookie(PK_S3_TEST.cookies.name+'r');
    if (!str||(str=='')||(str.length==0)) return;
    var ar = str.split(',');
    for (var i = 0; i < ar.length; ++i){
	if (PK_S3_TEST.raboty[ar[i]]) PK_S3_TEST.raboty[ar[i]].except = true;
    }
}


PK_S3_TEST.equip_motivation = function (job_name){
    PK_S3_TEST.load_nabory();
    for (var i = 0; i < PK_S3_TEST.cookies.save.length; ++i){
	if (PK_S3_TEST.cookies.save[i].name==job_name){
	    if (!PK_S3_TEST.cookies.save[i].ids) return;
	    for (var j = 0; j < PK_S3_TEST.types.length; ++j){
		var qID = PK_S3_TEST.cookies.save[i].ids[j]
		if (qID){
		    PK_S3_TEST.odevalo4ka.items.push(qID);
		}
	    }
	    setTimeout(PK_S3_TEST.equip_start,PK_S3_TEST.rekurs.delay);
	    return;
	}
    }
    PK_S3_TEST.show_text_message ('Нет сохранённого комплекта', 3000);
};

PK_S3_TEST.equip_add2 = function (){
    var elem = $('pk_s3_odevalo4ka_select2');
    if (!elem) return;
    var ind = elem.value - 1;
    if (!PK_S3_TEST.cookies.save[ind]) return;
    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	var qID = PK_S3_TEST.cookies.save[ind].ids[i]
	if (qID){
	    PK_S3_TEST.odevalo4ka.items.push(qID);
	}
    }
    setTimeout(PK_S3_TEST.equip_start,PK_S3_TEST.rekurs.delay);
    return;
}

PK_S3_TEST.equip_add3 = function (){
    var elem = $('pk_s3_odevalo4ka_select3');
    if (!elem) return;
    var ind = elem.value - 1;
    if (!PK_S3_TEST.cookies.save[ind]) return;
    for (var i = 0; i < PK_S3_TEST.types.length; ++i){
	var qID = PK_S3_TEST.cookies.save[ind].ids[i]
	if (qID){
	    PK_S3_TEST.odevalo4ka.items.push(qID);
	}
    }
    setTimeout(PK_S3_TEST.equip_start,PK_S3_TEST.rekurs.delay);
    return;
}

PK_S3_TEST.equip_save = function (){
    var inp = $('pk_s3_odevalo4ka_input');
    if (!inp) return;
    var name = inp.value;
    var ind = PK_S3_TEST.cookies.save.length;
    for (var i = 0; i < PK_S3_TEST.cookies.save.length; ++i){
	if (PK_S3_TEST.cookies.save[i].name == name){
	    ind = i;
	    break;
	}
    }
    PK_S3_TEST.cookies.save[ind] = {};
    PK_S3_TEST.cookies.save[ind].name = name;
    PK_S3_TEST.cookies.save[ind].ids = [];
    for (var itype = 0; itype < PK_S3_TEST.types.length; ++itype){
	var type = PK_S3_TEST.types[itype];
	if (Wear.wear[type]){
	    PK_S3_TEST.cookies.save[ind].ids.push (Wear.wear[type].obj.item_id);
	}
    }
    inp.value = '';
    PK_S3_TEST.save_nabory();
    PK_S3_TEST.spam_bagazh_option();
}

PK_S3_TEST.equip_del = function (){
    var elem = $('pk_s3_odevalo4ka_select2');
    if (!elem) return;
    var ind = elem.value - 1;
    PK_S3_TEST.cookies.save.splice(ind,1);
    PK_S3_TEST.save_nabory();
    PK_S3_TEST.spam_bagazh_option();
}

PK_S3_TEST.spam_bagazh_option = function (){
    var elem2 = $('pk_s3_odevalo4ka_select2');
    var elem3 = $('pk_s3_odevalo4ka_select3')
    while (elem2 && elem2.firstChild){
	elem2.removeChild(elem2.firstChild);
    }
    while (elem3 && elem3.firstChild){
	elem3.removeChild(elem3.firstChild);
    }
    for (var i = 0; i < PK_S3_TEST.cookies.save.length; ++i){
	var opt = new Element ('option', {'value':(i+1)});
	opt.textContent = PK_S3_TEST.cookies.save[i].name;
	if (elem2) elem2.appendChild(opt);
	if (elem3) elem3.appendChild(opt);
    }
}

PK_S3_TEST.spam_bagazh = function(){
    //if (window.TWPro) return;
    var wear_wind = $('wear_drop')
    if (!wear_wind) return;
    //if (!$('window_inventory_title')) return;
    if ($('pk_s3_odevalo4ka_all')) return;
    //var elem = $('bag');
    //if (!elem) return;
    PK_S3_TEST.load_nabory();
    var all = new Element ('div', {'id':'pk_s3_odevalo4ka_all', 'style':'float: left; padding: 5px 0px; position: relative; left: -10px; top: -60px;'});
    var span = new Element ('div', {'style':'cursor:pointer; font-weight:bold; color:white; padding: 0px 5px; display:inline; font-size:11px;'});
    span.textContent = 'удалить';
    span.addEventListener('click', PK_S3_TEST.equip_del, false);
    all.appendChild(span);
    var sel = new Element ('select', {'id':'pk_s3_odevalo4ka_select2', 'style':'width: 125px; background-color:#e8dab3; font-size:11px; height:18px;'});
    all.appendChild(sel);
    var span = new Element ('div', {'style':'cursor:pointer; font-weight:bold; color:white; padding: 0px 5px; display:inline; font-size:11px;'});
    span.textContent = 'надеть';
    span.addEventListener('click', PK_S3_TEST.equip_add2, false);
    all.appendChild(span);
    //elem.innerHTML = '';
    wear_wind.appendChild(all);

    //var elem2 = $('window_inventory_content').firstChild;
    //while (elem2 && (elem2.innerHTML != '<h2>Снаряжение</h2>')){
//	elem2 = elem2.nextSibling;
    //};
    //if (!elem2) return;
    var all2 = new Element ('div', {'id':'pk_s3_odevalo4ka_all2', 'style':'float:left; padding: 6px 0px; position: relative; left: -10px; top: -60px;'});
    var span = new Element ('div', {'style':'cursor:pointer; font-weight:bold; color: white; padding: 0px 5px; display:inline; font-size:11px;'});
    span.textContent = 'сохранить';
    span.addEventListener('click', PK_S3_TEST.equip_save, false);
    all2.appendChild(span);
    var inp = new Element ('input', {'id':'pk_s3_odevalo4ka_input', 'type':'text', 'value':'Новый набор', 'style':'width: 150px; background-color:#e8dab3; font-size:11px; height:13px;'});
    all2.appendChild(inp);
    //elem2.innerHTML = '';
    //elem2.appendChild(all2);
    wear_wind.appendChild(all2);
    var commb = $('item_trader_button');
    if (commb) commb.style.left = '220px';
    var equipb = $('equip_manager_button');
    if (equipb) equipb.style.left = '220px';

    PK_S3_TEST.spam_bagazh_option();
}

var PK_S3_TESTfuns = ['init','qsort','bsort','input_select_rdf', 'show_window_settings', 'minimize_window_settings', 'minimize_window_settings2', 'show_window_informer',
		 'minimize_window_informer', 'minimize_window_informer2', 'running_bar', 'summa_to', 'summa_to2', 'fort_bonus', 'apply_fort_bonus_lead', 'show_popup_message', 'second_init',
		 'waiting_inventory', 'compare_item', 'assign_item', 'print_item', 'parsing_inventory', 'cena_pods4eta', 'otbor_vozmozhnyh', 'otbor_nuzhnykh',
		 'otbor_nuzhnykh_fort', 'otbor_nuzhnykh_moving', 'otbor_nuzhnykh_sleep', 'otsev_nenuzhnykh', 'otsev_nenuzhnykh_fort', 'otsev_nenuzhnykh_moving',
		 'otsev_nenuzhnykh_sleep', 'polnyj_perebor', 'polnyj_perebor_fort', 'polnyj_perebor_moving', 'polnyj_perebor_sleep', 'podgotavlivaem_rezultat',
		 'podgotavlivaem_rezultat_fort', 'podgotavlivaem_rezultat_moving', 'podgotavlivaem_rezultat_sleep', 'sortirovka_rabot', 'print_raboty', 'vyvod_prostyh_rabot',
		 'show_window_rezultat', 'minimize_window_rezult', 'minimize_window_rezult2', 'equip_start', 'equip_wait_bagazh', 'equip_carring', 'equip_wait_carry', 'equip_add',
		 'equip_adds', 'my_name_is', 'set_cookie', 'get_cookie', 'spam_bagazh', 'spam_bagazh_option', 'load_nabory', 'save_nabory', 'equip_add2', 'equip_add3', 'equip_del',
		 'equip_save', 'equip_items_save', 'equip_items_delete', 'equip_motivation', 'four_init', 'restore_text_message', 'show_text_message', 'prostoj_otbor_to',
		 'podgotavlivaem_rezultat_to', 'check_raboty', 'except_raboty', 'load_raboty', 'save_raboty', 'vyvod_nenuzhnykh_items'];

pk_s3_code += 'if (window.PK_S3_TEST == undefined){ window.PK_S3_TEST = new Object();';
for (var i = 0; i < PK_S3_TESTfuns.length; ++i){
    var PK_S3_TESTfun = 'PK_S3_TEST.'+PK_S3_TESTfuns[i];
    //if (i<3) alert(eval(PK_S3_TESTfun.toString()));
    pk_s3_code += PK_S3_TESTfun + ' = ' + eval(PK_S3_TESTfun.toString()) + '\n';
};

pk_s3_code += '};\n	PK_S3_TEST.init();';
//pk_s3_code += " window.addEventListener('load', PK_S3_TEST.init, false);\n}";
pk_s3_script.innerHTML = pk_s3_code;
pk_s3_body.appendChild(pk_s3_script);

//aWindow.addEventListener('load', PK_S3_TEST.init, false);
