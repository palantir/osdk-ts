import{j as r,M as s}from"./iframe-D07_tlNY.js";import{P as p}from"./pdf-viewer-Da89LmOD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CWv4NNWv.js";import"./preload-helper-BZ5VSi4J.js";import"./PdfViewer-DYiCScoY.js";import"./index-BQ0PEMCN.js";import"./BasePdfViewer-rbOvSoYP.js";import"./BasePdfViewer.module.css-fmUBrwz2.js";import"./PdfViewerAnnotationLayer-J7oRR_qK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_R31C_v.js";import"./PdfViewerOutlineSidebar-BllbR4RT.js";import"./PdfViewerSidebarHeader-eJfeG94v.js";import"./useBaseUiId-B0wQwkXS.js";import"./useControlled-BOVJlk7U.js";import"./CompositeRoot-B2IZOYeQ.js";import"./CompositeItem-B62DALdv.js";import"./ToolbarRootContext-A8nSy6Lb.js";import"./composite-gwuj_Yg_.js";import"./svgIconContainer-BLgeYPC8.js";import"./PdfViewerSearchBar-CsjmOfiu.js";import"./chevron-up-CmAacVBF.js";import"./chevron-down-Dm8M3XHE.js";import"./cross-cfoeTeHb.js";import"./PdfViewerSidebar-F4o_aZRx.js";import"./index-B2TS2X4n.js";import"./index-EmEIjE8b.js";import"./index-Dy14VnsS.js";import"./PdfViewerToolbar-B88jWZgK.js";import"./Button-xkyJItTT.js";import"./chevron-right-L8aUqCbd.js";import"./Input-C_nbkkcq.js";import"./search-c3tWQKm6.js";import"./spin-DeBvGscZ.js";import"./error-D7fddi8p.js";import"./withOsdkMetrics-CK10C4kZ.js";import"./makeExternalStore-DW0gV4Fp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
