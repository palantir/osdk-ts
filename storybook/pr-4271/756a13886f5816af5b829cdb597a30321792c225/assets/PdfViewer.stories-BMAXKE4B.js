import{j as r,M as s}from"./iframe-D150H4vz.js";import{P as p}from"./pdf-viewer-D6URd2-b.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CI0_1Ydf.js";import"./preload-helper-BarckMkV.js";import"./PdfViewer-BXzE7STD.js";import"./index-cVrSJLbz.js";import"./BasePdfViewer-Dh0H5eGh.js";import"./BasePdfViewer.module.css-n-9oXpvg.js";import"./PdfViewerAnnotationLayer-T7m9A82h.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BrUIw1N5.js";import"./PdfViewerOutlineSidebar-BF4sa4VU.js";import"./PdfViewerSidebarHeader-D55nfjeS.js";import"./useBaseUiId-BEwnCbr0.js";import"./useControlled-lhlupqEn.js";import"./CompositeRoot-OC0bPKWm.js";import"./CompositeItem-iPCNYUwO.js";import"./ToolbarRootContext-G9KEnSun.js";import"./composite-B_0CI6wq.js";import"./svgIconContainer-VUxlTV2E.js";import"./PdfViewerSearchBar-DWF_2I59.js";import"./chevron-up-h8KkmWmE.js";import"./chevron-down-BtdYGIbe.js";import"./cross-6mUh6O0a.js";import"./PdfViewerSidebar-Dr1UWYUz.js";import"./index-CwtLN-AV.js";import"./index-Cy-heBPu.js";import"./index-N3sDVMXC.js";import"./PdfViewerToolbar-D5Tkdfe5.js";import"./Button-wEOF9kbC.js";import"./chevron-right-TTJiucs8.js";import"./Input-D0LXp2w8.js";import"./search-B_D2n4ON.js";import"./spin-DnYo6fHw.js";import"./error-EjSx_YOh.js";import"./withOsdkMetrics-BMpR6FdW.js";import"./makeExternalStore-BIWQlVyv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
