import{j as r,M as s}from"./iframe-BAjgPtEd.js";import{P as p}from"./pdf-viewer-CD7Dv3Dv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDamM37E.js";import"./preload-helper-CvSpShLn.js";import"./PdfViewer-CC1nyesI.js";import"./index-DkQET497.js";import"./BasePdfViewer-u7onZiNw.js";import"./BasePdfViewer.module.css-Njd3QO3w.js";import"./PdfViewerAnnotationLayer-B4ZI59hs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-3263-dpg.js";import"./PdfViewerOutlineSidebar-1LyWN4E6.js";import"./PdfViewerSidebarHeader-DYg601pt.js";import"./useBaseUiId-QgJXrsod.js";import"./useControlled-DSQPO38y.js";import"./CompositeRoot-B9vaGc1o.js";import"./CompositeItem-9sostI2N.js";import"./ToolbarRootContext-DYBHmzGt.js";import"./composite-17xRguTl.js";import"./svgIconContainer-RrdsKFgG.js";import"./PdfViewerSearchBar-Hr2acBiL.js";import"./chevron-up-DIX70cdp.js";import"./chevron-down-C_c1RpTk.js";import"./cross-Zmf20Klh.js";import"./PdfViewerSidebar-RAJpWsOK.js";import"./index-BC-EQLUC.js";import"./index-2jadBPxc.js";import"./index-DNkRyEMq.js";import"./PdfViewerToolbar-B0XtBzQZ.js";import"./Button-7st_Ze6e.js";import"./chevron-right-CYfLKWG6.js";import"./Input-BkIr6Cv-.js";import"./search-moMGOLYA.js";import"./spin-BF4DBwVd.js";import"./error-BPyKBfp3.js";import"./withOsdkMetrics-CitYO8jf.js";import"./makeExternalStore-ucFYf-xR.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
