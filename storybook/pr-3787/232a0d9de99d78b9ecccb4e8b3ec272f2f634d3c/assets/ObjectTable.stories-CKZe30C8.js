import{j as i}from"./iframe-CDM8VvCL.js";import{O as p}from"./object-table-BsWHLv7x.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-X6RmTu9u.js";import"./preload-helper-DfBWA75O.js";import"./Table-DNz2f0EG.js";import"./index-C6PbldxU.js";import"./Dialog-Cw7DA-a5.js";import"./cross-DMe_NFrB.js";import"./svgIconContainer-C1O7d22_.js";import"./useBaseUiId-YyZMVoz3.js";import"./InternalBackdrop-3sJqJhUy.js";import"./composite-BMzBsQCY.js";import"./index-C2c3YLny.js";import"./index-DgkciYYF.js";import"./index-BMPydb50.js";import"./useEventCallback--wvu9urt.js";import"./SkeletonBar-CCO1CZRx.js";import"./LoadingCell-BnU3j0Og.js";import"./ColumnConfigDialog-BAT6TgRk.js";import"./DraggableList-CSkLY4Wt.js";import"./search-ChMgyiyS.js";import"./Input-B__e197v.js";import"./useControlled-CPS_mZpC.js";import"./isEqual-Cw7ELw8L.js";import"./isObject-DOvv4t3H.js";import"./Button-Dow9ecKk.js";import"./ActionButton-D1zapzbS.js";import"./Checkbox-DWiRPOgD.js";import"./useValueChanged-CJQfTB0a.js";import"./CollapsiblePanel-DUVWmcbN.js";import"./MultiColumnSortDialog-Cu--lc5T.js";import"./MenuTrigger-DVnc9IN2.js";import"./CompositeItem-DG32YQLD.js";import"./ToolbarRootContext-eNrqlMGW.js";import"./getDisabledMountTransitionStyles-BcYqQrLA.js";import"./getPseudoElementBounds-CLK-CIxy.js";import"./chevron-down-GK8uglpz.js";import"./index-C_gjknLZ.js";import"./error-BLTG8w8a.js";import"./BaseCbacBanner-qQd0gBK1.js";import"./makeExternalStore-DhNYhl9Y.js";import"./Tooltip-CrrdlhKL.js";import"./PopoverPopup-K7nHHNKP.js";import"./toNumber-BqSuiLcc.js";import"./useOsdkClient-6YFeBNNr.js";import"./tick-BWD1BWlb.js";import"./DropdownField-CzJ5Q7Vg.js";import"./withOsdkMetrics-C30IttKx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
