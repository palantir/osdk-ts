import{j as i}from"./iframe-DOoViGQC.js";import{O as p}from"./object-table-fsv2meK0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DS4zAWuk.js";import"./preload-helper-D6M-lWMp.js";import"./Table-XlWncKwC.js";import"./index-x4gpFwBp.js";import"./Dialog-BUVOhGz-.js";import"./cross-BAqH0G--.js";import"./svgIconContainer-DDehFQ37.js";import"./useBaseUiId-CEA0ov3F.js";import"./InternalBackdrop-Cvfzz2Gg.js";import"./composite-DG_OLYDF.js";import"./index-uZqGKRzq.js";import"./index-C5WAn5Dx.js";import"./index-oSIBYKmR.js";import"./useEventCallback-2cQhO8Od.js";import"./SkeletonBar-yxb5jjnx.js";import"./LoadingCell-B8vGHO6K.js";import"./ColumnConfigDialog-DOx981jG.js";import"./DraggableList-uTc7RtXZ.js";import"./search-BtSuJQ9M.js";import"./Input-Bq0XAGaR.js";import"./useControlled-DyFvS3eo.js";import"./Button-DnpTR9kP.js";import"./small-cross-CkiB4kAk.js";import"./ActionButton-CT-L5CB7.js";import"./Checkbox-Dk0n7HNT.js";import"./useValueChanged-sHXiC0u3.js";import"./CollapsiblePanel--B4cqlmx.js";import"./MultiColumnSortDialog-C3caRr3a.js";import"./MenuTrigger-DB0T_UbP.js";import"./CompositeItem-C-YvkCMY.js";import"./ToolbarRootContext-BICNcApQ.js";import"./getDisabledMountTransitionStyles-FChDzxHp.js";import"./getPseudoElementBounds-CCgIuocG.js";import"./chevron-down-BssNm1rB.js";import"./index-v0gYgaE5.js";import"./error-CMiAPzhy.js";import"./BaseCbacBanner-Bxst7se4.js";import"./makeExternalStore-_9NPeB4S.js";import"./Tooltip-Ct-G7N11.js";import"./isObject-B3qfbi9s.js";import"./debounce-DshVKYBV.js";import"./useOsdkClient-BvJQMhJJ.js";import"./tick-BcBfo_Ik.js";import"./DropdownField-CW8S6woh.js";import"./isEqual-D0Vlcsqm.js";import"./_baseIsEqual-BXzcdte9.js";import"./withOsdkMetrics-DkYGNx1N.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
