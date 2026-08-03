import{j as i}from"./iframe-BZPmmk4P.js";import{O as p}from"./object-table-TdvugDe8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-6jANRlM_.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dlz-lYXd.js";import"./index-YprcwoL3.js";import"./Dialog-B-HDchYi.js";import"./cross-DFdy-FQA.js";import"./svgIconContainer-B4NoFBSG.js";import"./useBaseUiId-DlX5x9RU.js";import"./InternalBackdrop-DBxVJh0e.js";import"./composite-CLHhRxo7.js";import"./index-CIOjucrA.js";import"./index-DA0MCU0C.js";import"./index-iAc0qUa2.js";import"./useEventCallback-B_i3wrsy.js";import"./SkeletonBar-Ca9EXSp2.js";import"./LoadingCell-CE3149pJ.js";import"./ColumnConfigDialog-Da-oiPyV.js";import"./DraggableList--HGkMY1D.js";import"./search-Dsvd_0gV.js";import"./Input-dytyLcfC.js";import"./useControlled-wsohqWtM.js";import"./isEqual-B1I8Xh1t.js";import"./isObject-BkcmaaZf.js";import"./Button-DcV7IA-r.js";import"./ActionButton-89hK2jNF.js";import"./Checkbox-rE0u2mBX.js";import"./useValueChanged-RxRuEOcD.js";import"./CollapsiblePanel-BMamQnmf.js";import"./MultiColumnSortDialog-DdGdsEer.js";import"./MenuTrigger-B0NrLQW4.js";import"./CompositeItem-Bc6vhKBa.js";import"./ToolbarRootContext-D0N7lU5l.js";import"./getDisabledMountTransitionStyles-B8l5wKWi.js";import"./getPseudoElementBounds-CiUtrG9T.js";import"./chevron-down-D5amVYwn.js";import"./index-BzfQ8r3a.js";import"./error-Ctnqq7qU.js";import"./BaseCbacBanner-HZGmZG_b.js";import"./makeExternalStore-CZiN_ybo.js";import"./Tooltip-BLqeS2PA.js";import"./PopoverPopup-DMVAzrmB.js";import"./toNumber-W8uVLdvZ.js";import"./useOsdkClient-CC2-r7xP.js";import"./tick-Zue1YGCM.js";import"./DropdownField-BDXw0V-e.js";import"./withOsdkMetrics-B48JLbxj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
