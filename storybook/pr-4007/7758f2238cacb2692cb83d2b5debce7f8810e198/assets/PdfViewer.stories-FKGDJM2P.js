import{j as r,M as s}from"./iframe-DugxyHXW.js";import{P as p}from"./pdf-viewer-BPwnOfIW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-XdsMi-gI.js";import"./preload-helper-sKHH7dZZ.js";import"./PdfViewer-ChbxdHFw.js";import"./index-BnymHSBX.js";import"./BasePdfViewer-vutO62i1.js";import"./BasePdfViewer.module.css-CeKEJ1Xq.js";import"./PdfViewerAnnotationLayer-CkR3O93P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQ9Avfei.js";import"./PdfViewerOutlineSidebar-CjpP1sBu.js";import"./PdfViewerSidebarHeader-CI0iWtV4.js";import"./useBaseUiId-DXSoLqlj.js";import"./useControlled-CrSksIZl.js";import"./CompositeRoot-C2tdVxuj.js";import"./CompositeItem-V75ZZ8Nq.js";import"./ToolbarRootContext-Cl7j9rKh.js";import"./composite-B6PfDTrv.js";import"./svgIconContainer-BhR3_WjC.js";import"./PdfViewerSearchBar-IrCU8C9w.js";import"./chevron-up-BEwplToX.js";import"./chevron-down-BHed8mrw.js";import"./cross-BSDPKBN8.js";import"./PdfViewerSidebar-2VRaqyPm.js";import"./index-BbAAxPka.js";import"./index-DEsgQO2-.js";import"./index-C1eIh-0N.js";import"./PdfViewerToolbar-CSJZAMz1.js";import"./Button-Dr2gNfRq.js";import"./chevron-right-BN4KCm0_.js";import"./Input-D5dfXCf5.js";import"./search-HmVN54vs.js";import"./spin-BtgrrrCG.js";import"./error-DAzclkpO.js";import"./withOsdkMetrics-x8dgsXC7.js";import"./makeExternalStore-WS2cTnp-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
