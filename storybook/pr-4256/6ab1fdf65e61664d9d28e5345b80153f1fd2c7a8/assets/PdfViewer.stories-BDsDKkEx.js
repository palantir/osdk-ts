import{j as r,M as s}from"./iframe-BUAKey-b.js";import{P as p}from"./pdf-viewer-DBRNlGcA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-vWv5ugON.js";import"./preload-helper-8ONSILo-.js";import"./PdfViewer-UcB_Yl_F.js";import"./index-C_XWLLnL.js";import"./BasePdfViewer-Bm8fl9r6.js";import"./BasePdfViewer.module.css-_iNhhoSV.js";import"./PdfViewerAnnotationLayer-C80Zn9in.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--5g5s6c7.js";import"./PdfViewerOutlineSidebar-CMsB5_Kj.js";import"./PdfViewerSidebarHeader-CACNdJrZ.js";import"./useBaseUiId-C8Y4NjI4.js";import"./useControlled-DbbiJxEI.js";import"./CompositeRoot-DIrCbZh9.js";import"./CompositeItem-D3aderF4.js";import"./ToolbarRootContext-CFT1kSbY.js";import"./composite-B5eojsZ9.js";import"./svgIconContainer-R7EcdMMS.js";import"./PdfViewerSearchBar-BNg_52JR.js";import"./chevron-up-CwcsU2Qp.js";import"./chevron-down-B1umsHcu.js";import"./cross-DIKNxaCS.js";import"./PdfViewerSidebar-BGZCwe0N.js";import"./index-BxV1QnRa.js";import"./index-0X59r-jL.js";import"./index-BVUJd12s.js";import"./PdfViewerToolbar-DHPiBKJx.js";import"./Button-BiKKO9jr.js";import"./chevron-right-DS7oB1kc.js";import"./Input-XOa6KB6m.js";import"./search-BpOSeHLA.js";import"./spin-9uym2QUv.js";import"./error-K70cMOqt.js";import"./withOsdkMetrics-CgOQk5ql.js";import"./makeExternalStore-BoGnPwwN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
