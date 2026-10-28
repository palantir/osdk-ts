import{j as r,M as s}from"./iframe-BFVvXCDn.js";import{P as p}from"./pdf-viewer-CgN7if1C.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DR5yOQNc.js";import"./preload-helper-50_WzFUV.js";import"./PdfViewer-D4VFAp7o.js";import"./index-QM5k4kGb.js";import"./BasePdfViewer-Dp7AsgRv.js";import"./BasePdfViewer.module.css-De7_ISgn.js";import"./PdfViewerAnnotationLayer-BRxexlT0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-erQNM-9b.js";import"./PdfViewerOutlineSidebar-DoSNWgYk.js";import"./PdfViewerSidebarHeader-DAMCkokH.js";import"./useBaseUiId-B694u7eA.js";import"./useControlled-DyhWa7C1.js";import"./CompositeRoot-BCN3NHPA.js";import"./CompositeItem-f5g69QxK.js";import"./ToolbarRootContext-CrlmdYIj.js";import"./composite-CzVxjBsa.js";import"./svgIconContainer-BV-Z1JXi.js";import"./PdfViewerSearchBar-C9wlBMX-.js";import"./chevron-up-DwgYDTTc.js";import"./chevron-down-BOFD2Flq.js";import"./cross-BFaVqKHr.js";import"./PdfViewerSidebar-CBq226zW.js";import"./index-BMCmLaDr.js";import"./index-iRevsRnR.js";import"./index-BOeHgaJB.js";import"./PdfViewerToolbar-BDu2Bsua.js";import"./Button-Dcbnl--f.js";import"./chevron-right-WpF64eiG.js";import"./Input-Dtig63-B.js";import"./search-CW9s8WSc.js";import"./spin-DitL_M4J.js";import"./error-DOU--p1t.js";import"./withOsdkMetrics-NltFnboY.js";import"./makeExternalStore-BWSWF8JC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
