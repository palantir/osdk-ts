import{j as r,M as s}from"./iframe-CGwmlW2r.js";import{P as p}from"./pdf-viewer-XBu1WBcJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQaac8qE.js";import"./preload-helper-CVIGiO6F.js";import"./PdfViewer-B3_uBImF.js";import"./index-CjgswMxd.js";import"./BasePdfViewer-78TVCC2c.js";import"./BasePdfViewer.module.css-ObQXPNv_.js";import"./PdfViewerAnnotationLayer-C9rAXC9M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-HC6p7jn5.js";import"./PdfViewerOutlineSidebar-CJX3x_Ji.js";import"./PdfViewerSidebarHeader-BT22T0eG.js";import"./useBaseUiId-Bm2cFh6B.js";import"./useControlled-DsP0nmCG.js";import"./CompositeRoot-Bh5nsKzg.js";import"./CompositeItem-7T1omaB9.js";import"./ToolbarRootContext-CxtjwMoV.js";import"./composite-BJmQcV2t.js";import"./svgIconContainer-BTPb8DLH.js";import"./PdfViewerSearchBar-kz3CMSLM.js";import"./chevron-up-CSORMd0b.js";import"./chevron-down-CfoUsUUp.js";import"./cross-DQgNlB5k.js";import"./PdfViewerSidebar-Y8Qh-VkB.js";import"./index-Z2JS55l6.js";import"./index-DxRKQXJQ.js";import"./index-CafwHe0h.js";import"./PdfViewerToolbar-T8L1sCaa.js";import"./Button-DFUwv3AU.js";import"./chevron-right-C59xzDTe.js";import"./Input-pi6zEsGe.js";import"./search-DcxUYSzD.js";import"./spin-B_MPtgds.js";import"./error-CgUQsRwJ.js";import"./withOsdkMetrics-DDzV_xju.js";import"./makeExternalStore-B5u8APGM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
