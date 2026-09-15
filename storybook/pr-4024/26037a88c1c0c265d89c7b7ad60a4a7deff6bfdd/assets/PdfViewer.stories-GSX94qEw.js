import{j as r,M as s}from"./iframe-aV2EncWj.js";import{P as p}from"./pdf-viewer-B-to-Oxk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Co6Ha2RR.js";import"./preload-helper-BEXd_GfO.js";import"./PdfViewer-CkUWNVUi.js";import"./index-DAg7UqCb.js";import"./BasePdfViewer-BnQsCww8.js";import"./BasePdfViewer.module.css-1GEEQ9hu.js";import"./PdfViewerAnnotationLayer-CG-6UM8J.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CABYRPVD.js";import"./PdfViewerOutlineSidebar-BBniT1D-.js";import"./PdfViewerSidebarHeader-DXENXGzP.js";import"./useBaseUiId-C7CCsH5x.js";import"./useControlled-hdV7mmig.js";import"./CompositeRoot-DD8UAhAQ.js";import"./CompositeItem-DvEec9Z1.js";import"./ToolbarRootContext-C9SuiabC.js";import"./composite-Dq2CI2j-.js";import"./svgIconContainer-BCVXBQ-1.js";import"./PdfViewerSearchBar-Fsa1Dyid.js";import"./chevron-up-DCgzMmiW.js";import"./chevron-down-ZHnmZ23u.js";import"./cross-dxy14_5g.js";import"./PdfViewerSidebar-CbdjcoPI.js";import"./index-C659o23F.js";import"./index-hA2PEeQp.js";import"./index-BfjZxAF2.js";import"./PdfViewerToolbar-Cp8A4AUm.js";import"./Button-D_vltk0m.js";import"./chevron-right-RfuGXSgH.js";import"./Input-DvwYRcaH.js";import"./search-eiqCYccO.js";import"./spin-DsGxr65k.js";import"./error-Bsy631Mv.js";import"./withOsdkMetrics-DJdEIIDz.js";import"./makeExternalStore-DG-eMtQv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
