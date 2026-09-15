import{j as i}from"./iframe-nH92Qb6I.js";import{O as p}from"./object-table-Cn307sAw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CKhJ5nHa.js";import"./preload-helper-DVpIcuXN.js";import"./Table-CsP27jwx.js";import"./index-wUFT2bRw.js";import"./Dialog-BNhXnAKa.js";import"./cross-HApDVAUs.js";import"./svgIconContainer-CCtPkDCx.js";import"./useBaseUiId-Dbvfrb6U.js";import"./InternalBackdrop-CHH-xVa7.js";import"./composite-B2ptXcYf.js";import"./index-CYsOJOxV.js";import"./index-CcpfuVHT.js";import"./index-CPIitDS-.js";import"./useEventCallback-Pw8NUu2g.js";import"./SkeletonBar-Bynzqc4g.js";import"./LoadingCell-BARv7fv5.js";import"./ColumnConfigDialog-B96lYMgM.js";import"./DraggableList-MQ6bmFCg.js";import"./search-D5Opa-iA.js";import"./Input-DzMyb8hK.js";import"./useControlled-B8icxwdl.js";import"./Button-w7xoCEq9.js";import"./small-cross-BSOPXnkj.js";import"./ActionButton-DoSazfb4.js";import"./Checkbox-DaAcI3Qo.js";import"./useValueChanged-DlL26KZ1.js";import"./CollapsiblePanel-CapZ9VU7.js";import"./MultiColumnSortDialog-BWMO_1Qm.js";import"./MenuTrigger-DO3ORZXC.js";import"./CompositeItem-BF333Zgu.js";import"./ToolbarRootContext-DlwWE9QZ.js";import"./getDisabledMountTransitionStyles-BhkjVSc5.js";import"./getPseudoElementBounds-fd5QWVwB.js";import"./chevron-down-CBmuqb-m.js";import"./index-DgFSfdtE.js";import"./error-BXUm0BgQ.js";import"./BaseCbacBanner-t3zs4vsg.js";import"./makeExternalStore-CLbnsWAa.js";import"./Tooltip-DSvaFKNo.js";import"./PopoverPopup-Cu27jEST.js";import"./debounce-By_2G3GA.js";import"./useOsdkClient-CgXm7UOo.js";import"./tick-oJtSbIPn.js";import"./DropdownField-n4Cp-XVI.js";import"./isEqual-DJbuM-Nd.js";import"./withOsdkMetrics-Cz8MJ3YO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
