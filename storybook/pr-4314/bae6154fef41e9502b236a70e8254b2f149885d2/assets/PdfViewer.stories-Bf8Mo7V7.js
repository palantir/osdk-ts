import{j as r,M as s}from"./iframe-DFabC9bf.js";import{P as p}from"./pdf-viewer-SPGtrDRZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CkNw_GEY.js";import"./preload-helper-BLxMvu58.js";import"./PdfViewer-q_pNtR5w.js";import"./index-DgsFchdG.js";import"./BasePdfViewer-o8cm4-Yc.js";import"./BasePdfViewer.module.css-vMBcZ2X-.js";import"./PdfViewerAnnotationLayer-BABXmYJ5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-v4Scndzb.js";import"./PdfViewerOutlineSidebar-r5mDD9Gc.js";import"./PdfViewerSidebarHeader-CIQfKh8r.js";import"./useBaseUiId-Dxr7oR41.js";import"./useControlled-B3kUZkdE.js";import"./CompositeRoot-DLXUO876.js";import"./CompositeItem-DUW332tM.js";import"./ToolbarRootContext-2AVlTjyA.js";import"./composite-BoRXQVH0.js";import"./svgIconContainer-CsYtoZH2.js";import"./PdfViewerSearchBar-Bx0YtvpT.js";import"./chevron-up-BKY2z0jN.js";import"./chevron-down-jy1hrUFA.js";import"./cross-ey58JM4H.js";import"./PdfViewerSidebar-CCHHeVeM.js";import"./index-aUHzwEmK.js";import"./index-BHWOd5Tr.js";import"./index-Gxd2oAE6.js";import"./PdfViewerToolbar-BfATDDVQ.js";import"./Button-DIvAKpTN.js";import"./chevron-right-BIquXlGI.js";import"./Input-BZyaCDxG.js";import"./search-B_WKOos_.js";import"./spin-PYC3xY90.js";import"./error-f3c_sZgu.js";import"./withOsdkMetrics-BCss4ydh.js";import"./makeExternalStore-D6-6uuSf.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
