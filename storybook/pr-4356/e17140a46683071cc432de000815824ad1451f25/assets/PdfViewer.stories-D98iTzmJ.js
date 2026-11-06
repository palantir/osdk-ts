import{j as r,M as s}from"./iframe-wBrbDET_.js";import{P as p}from"./pdf-viewer-D5UHDM3r.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CKJjPnr4.js";import"./preload-helper-DyV1jABv.js";import"./PdfViewer-CVULVNb6.js";import"./index-Ncx2k3s4.js";import"./BasePdfViewer-DSk9XL2N.js";import"./BasePdfViewer.module.css-DY-Rglvs.js";import"./PdfViewerAnnotationLayer-1wh0vRsi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5U0t9mp9.js";import"./PdfViewerOutlineSidebar-6L_eQ33v.js";import"./PdfViewerSidebarHeader-Dp1uHi-e.js";import"./useBaseUiId-eK3I3qsA.js";import"./useControlled-2_Rn_F3e.js";import"./CompositeRoot-CE8MHmA0.js";import"./CompositeItem-BNWpWAX_.js";import"./ToolbarRootContext-BxvlpQpy.js";import"./composite-SIfyViZe.js";import"./svgIconContainer-Ct8cN05_.js";import"./PdfViewerSearchBar-BkUkBiTf.js";import"./chevron-up-iImrXYl6.js";import"./chevron-down-Dz6vupYI.js";import"./cross-Df39fOvA.js";import"./PdfViewerSidebar-ZX2oV73G.js";import"./index-_TwhdO3w.js";import"./index-CHgCkFBn.js";import"./index-CmelBQvM.js";import"./PdfViewerToolbar-CHNckTH5.js";import"./Button-DtJK54aF.js";import"./chevron-right-CM6XYapV.js";import"./Input-DFbvIuq-.js";import"./search-CoFWb8gE.js";import"./spin-8T9urguD.js";import"./error-lMxpxIBb.js";import"./withOsdkMetrics-mhV8EPst.js";import"./makeExternalStore-gYwFGl5I.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
