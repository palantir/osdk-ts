import{j as r,M as s}from"./iframe-BjbHRI0z.js";import{P as p}from"./pdf-viewer-CTKJg1dW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DGgH-zn_.js";import"./preload-helper-BUM7BTsm.js";import"./PdfViewer-DdXhWmAZ.js";import"./index-CGlA5dXU.js";import"./BasePdfViewer-BMrJnmLA.js";import"./BasePdfViewer.module.css-ecXa31kX.js";import"./PdfViewerAnnotationLayer-EDw1oq51.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQaj90Fh.js";import"./PdfViewerOutlineSidebar-DIRtowj0.js";import"./PdfViewerSidebarHeader-DMPIgyFP.js";import"./useBaseUiId-BfNPJ7-Z.js";import"./useControlled-rSaw5pb5.js";import"./CompositeRoot-DtrPK98k.js";import"./CompositeItem-BUg5QAEv.js";import"./ToolbarRootContext-BIp7KVlb.js";import"./composite-BFEQAufL.js";import"./svgIconContainer-BQW7jGob.js";import"./PdfViewerSearchBar-BB87KkD0.js";import"./chevron-up-CW2vtVbA.js";import"./chevron-down-C9nnJYZM.js";import"./cross-DFCaIKoy.js";import"./PdfViewerSidebar-fq478Ic1.js";import"./index-D90yLxts.js";import"./index-CI8QNR9V.js";import"./index-CiZKopjl.js";import"./PdfViewerToolbar-SENzxmax.js";import"./Button-D9KcyGxn.js";import"./chevron-right-BholYkBx.js";import"./Input-BVornoU9.js";import"./search-DugTyXej.js";import"./spin-D4tWVlt0.js";import"./error-Cl6EUNrf.js";import"./withOsdkMetrics-BjQ5Qn0j.js";import"./makeExternalStore-CeeAAQpn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
