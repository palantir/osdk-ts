import{j as r,M as s}from"./iframe-D3lsV3bM.js";import{P as p}from"./pdf-viewer-BKzxAvo6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CZA88s45.js";import"./preload-helper-B0DSvxC2.js";import"./PdfViewer-v6ssdxn1.js";import"./index-D11sJHPZ.js";import"./BasePdfViewer-Dw4XQpLG.js";import"./BasePdfViewer.module.css-D331TLTP.js";import"./PdfViewerAnnotationLayer-CE28xoJo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BFPDHoNB.js";import"./PdfViewerOutlineSidebar-C1qdxMr8.js";import"./PdfViewerSidebarHeader-CK9GpocM.js";import"./useBaseUiId-6o6e03Dj.js";import"./useControlled-bq-ZFaDd.js";import"./CompositeRoot-DRJCFUeS.js";import"./CompositeItem-DJyMopxi.js";import"./ToolbarRootContext-Bgqyz9vO.js";import"./composite-9R0QeF6F.js";import"./svgIconContainer-DfM6sw_L.js";import"./PdfViewerSearchBar-B060vH3b.js";import"./chevron-up-DPaPf_g6.js";import"./chevron-down-1CFj8X53.js";import"./cross-_tMTONVW.js";import"./PdfViewerSidebar-DzpJFeHB.js";import"./index-Cr0VJDXn.js";import"./index-BLDv51Tl.js";import"./index-Dxb68UZ2.js";import"./PdfViewerToolbar-C_JioBFu.js";import"./Button-DakXe1NE.js";import"./chevron-right-ZZPpKzBb.js";import"./Input-CiqPSABQ.js";import"./search-O4ijEoIs.js";import"./spin-BbRQsUP1.js";import"./error-XRO96CTm.js";import"./withOsdkMetrics-CyI1jVrw.js";import"./makeExternalStore-l2x05IWc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
