import{j as i}from"./iframe-C0wU5abY.js";import{O as p}from"./object-table-Dhvjm-ye.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B8TBX6an.js";import"./preload-helper-DBF01-cG.js";import"./Table-Cs4nAklZ.js";import"./index-BLQzpxSF.js";import"./Dialog-H4eq0_bB.js";import"./cross-DjbVostP.js";import"./svgIconContainer-CMAKke71.js";import"./useBaseUiId-D1MC7GbA.js";import"./InternalBackdrop-BXvP6ib-.js";import"./composite-BoBrXPGo.js";import"./index-Ca4Lp3-b.js";import"./index-VDAEj1qs.js";import"./index-BwUmCcfv.js";import"./useEventCallback-eLcMhxZ3.js";import"./SkeletonBar-DtDAen1t.js";import"./LoadingCell-BwjVkPe8.js";import"./ColumnConfigDialog-Dkky9xjY.js";import"./DraggableList-BWlSR2rj.js";import"./search-Kac11RBU.js";import"./Input-CuYpucpk.js";import"./useControlled-jkUj0hrw.js";import"./Button-w-E8GgnT.js";import"./small-cross-Bvw5RS_6.js";import"./ActionButton-V_luHs6O.js";import"./Checkbox-CdSA0-13.js";import"./useValueChanged-1ACDE08l.js";import"./CollapsiblePanel-C7mj3pNQ.js";import"./MultiColumnSortDialog-CfkjEdsm.js";import"./MenuTrigger-DbXogBZY.js";import"./CompositeItem-Bqkqz40D.js";import"./ToolbarRootContext-CLHzdGXk.js";import"./getDisabledMountTransitionStyles-JrYbFoOK.js";import"./getPseudoElementBounds-DzWEJrnK.js";import"./chevron-down-BwqCCX_Z.js";import"./index-BPOkQniY.js";import"./error-B8Sv0Q4K.js";import"./BaseCbacBanner-D6FwOIx9.js";import"./makeExternalStore-DkrbDLqh.js";import"./Tooltip-BFq4U8nM.js";import"./isObject-D89gReL0.js";import"./debounce-_3Ys135D.js";import"./useOsdkClient-pdCcjq0j.js";import"./tick-Cow3RRx-.js";import"./DropdownField-CDiu5HIy.js";import"./isEqual-BuhfY4F8.js";import"./_baseIsEqual-u28xBK7e.js";import"./withOsdkMetrics-CY3k4xQQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
