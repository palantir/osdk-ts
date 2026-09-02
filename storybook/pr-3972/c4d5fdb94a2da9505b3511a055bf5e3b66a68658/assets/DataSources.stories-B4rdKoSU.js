import{j as r}from"./iframe-DZOL1fAY.js";import{O as b}from"./object-table-SSJOUKzl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D7cC_nsH.js";import{u as g}from"./useOsdkClient-eW2Kmz8P.js";import"./preload-helper-3H1iqF3g.js";import"./Table-B62G5e17.js";import"./index-Dn4isnDY.js";import"./Dialog-cPcGwNln.js";import"./cross-86m0rjnN.js";import"./svgIconContainer-B6vD6Ghc.js";import"./useBaseUiId-Cvxi0iS7.js";import"./InternalBackdrop-DYc2T3en.js";import"./composite-T0X3QkXF.js";import"./index-C11ji0i2.js";import"./index-DZ_Yay9Y.js";import"./index-DFd2jDKC.js";import"./useEventCallback-ItCAOyRH.js";import"./SkeletonBar-LYReqkUo.js";import"./LoadingCell-D05YBGhE.js";import"./ColumnConfigDialog-BKBMAzyi.js";import"./DraggableList-Dhhz3Grx.js";import"./search-B2NPYcqq.js";import"./Input-VXijC7GT.js";import"./useControlled-DRhy3GQv.js";import"./Button-DsiRqDn-.js";import"./small-cross-BoSvEJri.js";import"./ActionButton-BsaHD9YU.js";import"./Checkbox-D9uKkogi.js";import"./useValueChanged-DcZiCWMF.js";import"./CollapsiblePanel-fLJD7V0z.js";import"./MultiColumnSortDialog-BWc9Kkx2.js";import"./MenuTrigger-CsR5DxY2.js";import"./CompositeItem-BqTSWS-d.js";import"./ToolbarRootContext-BSvTmWDd.js";import"./getDisabledMountTransitionStyles-BhFC88vd.js";import"./getPseudoElementBounds-Ba8N0Q3i.js";import"./chevron-down-BzBCSFbA.js";import"./index-COxjItVW.js";import"./error-DjEgQQ85.js";import"./BaseCbacBanner-CRUr-lWy.js";import"./makeExternalStore-BS_yphcb.js";import"./Tooltip-DHwsWy8-.js";import"./PopoverPopup-ZYkmOrRT.js";import"./debounce-DZH3gqyd.js";import"./tick-D-SuASFY.js";import"./DropdownField-Sc-mwTM2.js";import"./isEqual-DNKlfwvT.js";import"./withOsdkMetrics-2IcQnEf1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
