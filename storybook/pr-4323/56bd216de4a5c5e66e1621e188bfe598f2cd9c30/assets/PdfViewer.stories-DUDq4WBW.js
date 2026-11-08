import{j as r,M as s}from"./iframe-xO7-cFQE.js";import{P as p}from"./pdf-viewer-CeoMHsH8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CHbb4Ehh.js";import"./preload-helper-CjE4C0sP.js";import"./PdfViewer-DCrTU5Zp.js";import"./index-BOQrkF-F.js";import"./BasePdfViewer-Dpdj344x.js";import"./BasePdfViewer.module.css-CvOnhd6a.js";import"./PdfViewerAnnotationLayer-CUq1iwN4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8JNp2Gv.js";import"./PdfViewerOutlineSidebar-Btt2owgT.js";import"./PdfViewerSidebarHeader-HYyEJAyz.js";import"./useBaseUiId-DvKVHufz.js";import"./useControlled-Wgq9Q75K.js";import"./CompositeRoot-Bp7eweTA.js";import"./CompositeItem-BPvfL8qH.js";import"./ToolbarRootContext-D7XQqVeD.js";import"./composite-CWWmbaS7.js";import"./svgIconContainer-Bxzx9KVi.js";import"./PdfViewerSearchBar-OIMy1BoG.js";import"./chevron-up-CFt9WkeK.js";import"./chevron-down-hptZ4LWp.js";import"./cross-D5U-IDeN.js";import"./PdfViewerSidebar-Co9KqGp5.js";import"./index-DDxyKWUj.js";import"./index-BJwULR6g.js";import"./index-CXPZCOfE.js";import"./PdfViewerToolbar-L6HCVejU.js";import"./Button-BCHzki1U.js";import"./chevron-right-Dnafr4z9.js";import"./Input-99mwA4VF.js";import"./search-Bazo2FVF.js";import"./spin-D7rHkJGo.js";import"./error-n609TGyv.js";import"./withOsdkMetrics-BDGk6jsR.js";import"./makeExternalStore-Czx_Amad.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
