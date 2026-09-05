import{j as r,M as s}from"./iframe-BWsptOx9.js";import{P as p}from"./pdf-viewer-BIycP6ob.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DmUj3y_n.js";import"./preload-helper-hck2-2iY.js";import"./PdfViewer-BGphTO__.js";import"./index-7iRS3JG9.js";import"./BasePdfViewer-BP2qjmFS.js";import"./BasePdfViewer.module.css-zDTV-z_a.js";import"./PdfViewerAnnotationLayer-DjRvaj6Y.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-336aN_iS.js";import"./PdfViewerOutlineSidebar-Za3G6muH.js";import"./PdfViewerSidebarHeader-B6hJNorp.js";import"./useBaseUiId-ITgInSIU.js";import"./useControlled-6nTFaGE5.js";import"./CompositeRoot-Cwnbo47Y.js";import"./CompositeItem-BCNmsXPB.js";import"./ToolbarRootContext-DeurAZ5u.js";import"./composite-BV3Gpi4q.js";import"./svgIconContainer-BOVctZiQ.js";import"./PdfViewerSearchBar-DoxZUKbA.js";import"./chevron-up-ChpJJWfv.js";import"./chevron-down-B0CcOxY_.js";import"./cross-BoUzuZNF.js";import"./PdfViewerSidebar-ooLW4Y82.js";import"./index-BoyJNymp.js";import"./index-YOpRnDEd.js";import"./index-DlVXSgR3.js";import"./PdfViewerToolbar-DP-KdaUQ.js";import"./Button-VsXDl_eG.js";import"./chevron-right-UtXUK7x4.js";import"./Input-DMLFbQ55.js";import"./search-CPZq-I8Z.js";import"./spin-p7WL9beS.js";import"./error-D4aggEwD.js";import"./withOsdkMetrics-B8dcDHgp.js";import"./makeExternalStore-De-Jb6J5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
