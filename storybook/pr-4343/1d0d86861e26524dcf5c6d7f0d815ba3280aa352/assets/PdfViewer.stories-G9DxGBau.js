import{j as r,M as s}from"./iframe-DdqwQQfw.js";import{P as p}from"./pdf-viewer-L2wPq--V.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-c7n_ucsq.js";import"./preload-helper-Do8DhNTP.js";import"./PdfViewer-BX6oLdmX.js";import"./index-BEo5fRZG.js";import"./BasePdfViewer-CND7EW3Q.js";import"./BasePdfViewer.module.css-ZxyWqwOQ.js";import"./PdfViewerAnnotationLayer-DM_9TtDc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-aojFZA8B.js";import"./PdfViewerOutlineSidebar-ClYkfH0y.js";import"./PdfViewerSidebarHeader-BNpJcy3V.js";import"./useBaseUiId-Bcpg3lGk.js";import"./useControlled-DlTcdMFR.js";import"./CompositeRoot-CLlf3n7V.js";import"./CompositeItem-rVjlE15s.js";import"./ToolbarRootContext-BDaRyBS_.js";import"./composite-BS7fyn0m.js";import"./svgIconContainer-z_HFHagN.js";import"./PdfViewerSearchBar-BsGn2LEY.js";import"./chevron-up-CmCXNRx6.js";import"./chevron-down-RBc_HqKE.js";import"./cross-D_2LRYUd.js";import"./PdfViewerSidebar-BYh2EWHz.js";import"./index-ByyVIpwn.js";import"./index-DUGkPzpV.js";import"./index-DqbF2orL.js";import"./PdfViewerToolbar-g72nddx2.js";import"./Button-D31p01oo.js";import"./chevron-right-CVO2S0jx.js";import"./Input-Ddm5AThx.js";import"./search-BAD3BF_p.js";import"./spin-uI0843al.js";import"./error-BE-sE7Te.js";import"./withOsdkMetrics-VwlQjk8h.js";import"./makeExternalStore-C_arn_CF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
