import{j as r}from"./iframe-pmNjzkSa.js";import{O as b}from"./object-table-OoaCicb2.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DG6g6EGL.js";import{u as g}from"./useOsdkClient-ClOHwVNK.js";import"./preload-helper-_91snrAe.js";import"./Table-DzuLxgjp.js";import"./index-DgbX2nfK.js";import"./Dialog-Dj_XmNIk.js";import"./cross-Dqi4IPXt.js";import"./svgIconContainer-BZe9E0fd.js";import"./useBaseUiId-yuPZM35O.js";import"./InternalBackdrop-jkPUR_Oo.js";import"./composite-CDFQZzUv.js";import"./index-Dk_LArqT.js";import"./index-CQnyyv3M.js";import"./index-CsLpz_wj.js";import"./useEventCallback-C-U0AvIK.js";import"./SkeletonBar-IQnueAmy.js";import"./LoadingCell-CvaNdxne.js";import"./ColumnConfigDialog-BGuSFe2m.js";import"./DraggableList-xMh6LhJ_.js";import"./search-Bxht82Ps.js";import"./Input-EJedlwTO.js";import"./useControlled-CWeh_fXo.js";import"./isEqual-Br5cO1iA.js";import"./isObject-05QMv73L.js";import"./Button-DcauLdOh.js";import"./ActionButton-CDJfJ1hj.js";import"./Checkbox-Dc3wsZor.js";import"./useValueChanged-DLwXBoLF.js";import"./CollapsiblePanel-DQIcivTP.js";import"./MultiColumnSortDialog-BLgWJwC1.js";import"./MenuTrigger-Cz7S7zn4.js";import"./CompositeItem-mJLhl0rA.js";import"./ToolbarRootContext-zyqED4Pq.js";import"./getDisabledMountTransitionStyles-BiGVZN_K.js";import"./getPseudoElementBounds-C18EUD7j.js";import"./chevron-down-BS9Gs3vv.js";import"./index-trp_UBRu.js";import"./error-BfEBsCaT.js";import"./BaseCbacBanner-sQVjtfVl.js";import"./makeExternalStore-ZxXmouAx.js";import"./Tooltip-CphYaAGS.js";import"./PopoverPopup-bE2595rX.js";import"./toNumber-0rnyOSLY.js";import"./tick-D0gSuB9T.js";import"./DropdownField-TOuNLrGn.js";import"./withOsdkMetrics-Ua95Z_9x.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
