import{j as r,M as s}from"./iframe-i61RpjX7.js";import{P as p}from"./pdf-viewer-DLPlUpqw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DWxr35RS.js";import"./preload-helper-BXpoIj2B.js";import"./PdfViewer-CcdHQORB.js";import"./index-DdznE6qG.js";import"./BasePdfViewer-BN-F87Xu.js";import"./BasePdfViewer.module.css-C3HiJ7_X.js";import"./PdfViewerAnnotationLayer-CjUOuzRw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-pQ0OzDAo.js";import"./PdfViewerOutlineSidebar-x2uStphq.js";import"./PdfViewerSidebarHeader-C1HZzXQa.js";import"./useBaseUiId-Dw1mKB5r.js";import"./useControlled-Bd2D0MOS.js";import"./CompositeRoot-CvUQeBmi.js";import"./CompositeItem-CfdrXiQ-.js";import"./ToolbarRootContext-BlDscewO.js";import"./composite-q6o4xbG3.js";import"./svgIconContainer-BKu8iYZ4.js";import"./PdfViewerSearchBar-BY5MSQyJ.js";import"./chevron-up-DLjrUeF4.js";import"./chevron-down-BtDuC_bB.js";import"./cross-BJRIAlLu.js";import"./PdfViewerSidebar-B3AlXmCJ.js";import"./index-DR7wvRAh.js";import"./index-B1Q3wqWk.js";import"./index-CFOl5jJr.js";import"./PdfViewerToolbar-USXfYa5E.js";import"./Button-B7Ybnvxm.js";import"./chevron-right-DMGwW-iV.js";import"./Input-BXW8qVNh.js";import"./search-DcyXoMY2.js";import"./spin-sa9HSp4C.js";import"./error-DfGDPEBO.js";import"./withOsdkMetrics-Cw5kaJur.js";import"./makeExternalStore-BnbaQL1F.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
