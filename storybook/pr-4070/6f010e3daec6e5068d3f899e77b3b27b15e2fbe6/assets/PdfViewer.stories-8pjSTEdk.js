import{j as r,M as s}from"./iframe-cnARutXL.js";import{P as p}from"./pdf-viewer-xCcuO-c3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cx4_YOOi.js";import"./preload-helper-BmFSLRtI.js";import"./PdfViewer-D0yOQq5e.js";import"./index-DFLlU5DH.js";import"./BasePdfViewer--0HR7V4w.js";import"./BasePdfViewer.module.css-LWMHQTKn.js";import"./PdfViewerAnnotationLayer-1S-zeXsp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYHkCgLb.js";import"./PdfViewerOutlineSidebar-Db-mFTyL.js";import"./PdfViewerSidebarHeader-CnpotAH2.js";import"./useBaseUiId-D3qiS2j7.js";import"./useControlled-C2e7ttGZ.js";import"./CompositeRoot-DrKWShkE.js";import"./CompositeItem-BZ25FDYT.js";import"./ToolbarRootContext-Cpm7XsDL.js";import"./composite-B8QB1mMF.js";import"./svgIconContainer-BYzMgWJS.js";import"./PdfViewerSearchBar-C3N4W8-Q.js";import"./chevron-up-BbrRiePx.js";import"./chevron-down-B7Voti3u.js";import"./cross-PEBZaCxU.js";import"./PdfViewerSidebar-CgLp-F_C.js";import"./index-W_p-C1mB.js";import"./index-BH1BAqhj.js";import"./index-WfGsRQkJ.js";import"./PdfViewerToolbar-MZHm8Nq4.js";import"./Button-6fdr9V7a.js";import"./chevron-right-D8c7DQsu.js";import"./Input-DDwYvpo2.js";import"./search-C7s-xGFv.js";import"./spin-Dmmmcudp.js";import"./error-D4N7FIX9.js";import"./withOsdkMetrics-Cob5tlpP.js";import"./makeExternalStore-CokpyCaz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
