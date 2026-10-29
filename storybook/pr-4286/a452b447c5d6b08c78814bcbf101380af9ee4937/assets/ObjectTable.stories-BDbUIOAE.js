import{j as i}from"./iframe-BgMdPl3C.js";import{O as p}from"./object-table-D4oPfDXV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D9VaDEuh.js";import"./preload-helper-sBnEI_Ig.js";import"./Table-97Gw9S7_.js";import"./index-CpB1FxHm.js";import"./Dialog-BqmqocYn.js";import"./cross-D6oplnX9.js";import"./svgIconContainer-DMmYLpy9.js";import"./useBaseUiId-CxT5YLyS.js";import"./InternalBackdrop-BN-4yFF3.js";import"./composite-sAuyKpQi.js";import"./index-BXH-jRmH.js";import"./index-0YWULKcm.js";import"./index-Bz057Fgu.js";import"./useEventCallback-Cmb84_X1.js";import"./SkeletonBar-CojPQo60.js";import"./LoadingCell-B1K2l9o0.js";import"./ColumnConfigDialog-CWCZZhUo.js";import"./DraggableList-BumWgSPL.js";import"./search-CWQDb4l_.js";import"./Input-3QA4m500.js";import"./useControlled-Byq8R2zI.js";import"./Button-tnOg-ckf.js";import"./small-cross-BU2y1cKB.js";import"./ActionButton-DlS31NmR.js";import"./Checkbox-Dr7IxN4X.js";import"./useValueChanged-pacesa_7.js";import"./CollapsiblePanel-CzwDlkcV.js";import"./MultiColumnSortDialog-B8ujW6oW.js";import"./MenuTrigger-CGNumkog.js";import"./CompositeItem-D5EZoP9q.js";import"./ToolbarRootContext-D7J-gn0d.js";import"./getDisabledMountTransitionStyles-DvbK_Xe3.js";import"./getPseudoElementBounds-BNISWdkv.js";import"./chevron-down-CpM76MZN.js";import"./index-CIL9XgBZ.js";import"./error-CThhHbJ9.js";import"./BaseCbacBanner-DTtOB39W.js";import"./makeExternalStore-CU4m9b0Z.js";import"./Tooltip-ByGWv4u-.js";import"./PopoverPopup-DnrKPeJ4.js";import"./debounce-CPxVN93o.js";import"./useOsdkClient-D3kLb---.js";import"./tick-NEjLld8Y.js";import"./DropdownField-E-id6n8_.js";import"./isEqual-D0E7h3-i.js";import"./withOsdkMetrics-iUwzYuQQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
