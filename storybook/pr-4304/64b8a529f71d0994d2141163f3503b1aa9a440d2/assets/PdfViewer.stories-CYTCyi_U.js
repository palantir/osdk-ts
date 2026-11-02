import{j as r,M as s}from"./iframe-BnrsOFns.js";import{P as p}from"./pdf-viewer-DOGjqYvA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BbGSXl7c.js";import"./preload-helper-C6w5d29Q.js";import"./PdfViewer-BJRUiEuP.js";import"./index-tNt1Rsha.js";import"./BasePdfViewer-DZuCM-U1.js";import"./BasePdfViewer.module.css-CK7Ab9yX.js";import"./PdfViewerAnnotationLayer-DyAXSvrm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-IFu38hit.js";import"./PdfViewerOutlineSidebar-DgQmXOmk.js";import"./PdfViewerSidebarHeader-CXU8o4nN.js";import"./useBaseUiId-CnooZjs2.js";import"./useControlled-BkaP8RLt.js";import"./CompositeRoot-DO44Qm0Q.js";import"./CompositeItem-CoclYseh.js";import"./ToolbarRootContext-DKbWnJ_n.js";import"./composite-D8-ppVWB.js";import"./svgIconContainer-DHTpClH2.js";import"./PdfViewerSearchBar-BiIjGSJm.js";import"./chevron-up-C1tOweU3.js";import"./chevron-down-CJXJGt0n.js";import"./cross-DmYEQL4N.js";import"./PdfViewerSidebar-DJS9PY4i.js";import"./index-D5j7HDb2.js";import"./index-BGU_qlki.js";import"./index-COCOeC7h.js";import"./PdfViewerToolbar-8tPcrr9B.js";import"./Button-CQyg3zRK.js";import"./chevron-right-AdbL7vla.js";import"./Input-Bh0uDmot.js";import"./search-Ch8w7dwR.js";import"./spin-BzwnExdx.js";import"./error-5DZ7K3HO.js";import"./withOsdkMetrics-zFHODIcB.js";import"./makeExternalStore-EV-ALQ58.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
