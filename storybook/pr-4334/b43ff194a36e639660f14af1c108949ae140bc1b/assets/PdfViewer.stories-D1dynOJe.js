import{j as r,M as s}from"./iframe-hYuZ0Daw.js";import{P as p}from"./pdf-viewer-zwym0cho.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DY9XA15f.js";import"./preload-helper-57_0CTpI.js";import"./PdfViewer-k9W9McLr.js";import"./index-C5Pc6OCn.js";import"./BasePdfViewer-DXwQ6PrV.js";import"./BasePdfViewer.module.css-BmTr7wh5.js";import"./PdfViewerAnnotationLayer-DMCqsu7d.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DUazPSgZ.js";import"./PdfViewerOutlineSidebar-Cnhnql2G.js";import"./PdfViewerSidebarHeader-7-wrOS7b.js";import"./useBaseUiId-C66Z_YyS.js";import"./useControlled-DfUelnOD.js";import"./CompositeRoot-vPGXhzPi.js";import"./CompositeItem-DDypA9GI.js";import"./ToolbarRootContext-BfU0Mx90.js";import"./composite-fETYQEVT.js";import"./svgIconContainer-D3B1FGG8.js";import"./PdfViewerSearchBar-DppHHkFd.js";import"./chevron-up-BsNTvuy5.js";import"./chevron-down-BZn2JFfs.js";import"./cross-h0YrhL7d.js";import"./PdfViewerSidebar-5LtD98kA.js";import"./index-DmRE2MXK.js";import"./index-DCXcCpux.js";import"./index-BzM9XWI0.js";import"./PdfViewerToolbar-BhNXvf5Q.js";import"./Button-BT_Xkrjb.js";import"./chevron-right-B05aYShb.js";import"./Input-BtSxbTtJ.js";import"./search-De2ktKMh.js";import"./spin-YZQfkOds.js";import"./error-C958vJ-j.js";import"./withOsdkMetrics-Bun4Nw5t.js";import"./makeExternalStore-CDcr6d7h.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
