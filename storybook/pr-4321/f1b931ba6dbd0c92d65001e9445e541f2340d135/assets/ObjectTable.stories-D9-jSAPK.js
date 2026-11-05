import{j as i}from"./iframe-BhDMRuCM.js";import{O as p}from"./object-table-BcZq9KiG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-hxw7XmgE.js";import"./preload-helper-L4oI3E3x.js";import"./Table-Bs84qWgC.js";import"./index-DBdWVfZr.js";import"./Dialog-C1YcdSal.js";import"./cross-B8g5lC7t.js";import"./svgIconContainer-DvnFME-C.js";import"./useBaseUiId-DsydWgv8.js";import"./InternalBackdrop-BhWEQZmU.js";import"./composite-D7bHzIxr.js";import"./index-DO7zbhCL.js";import"./index-DbLkd8ga.js";import"./index-DqjKS_CZ.js";import"./useEventCallback-CyRRrF3x.js";import"./SkeletonBar-BtXVrziY.js";import"./LoadingCell-Ck5vmbXI.js";import"./ColumnConfigDialog-Cm1OyTA0.js";import"./DraggableList-wstUa1B_.js";import"./search-B2ohHoFm.js";import"./Input-DwhP00hs.js";import"./useControlled-BwLkCqLj.js";import"./Button-CqxlV9z0.js";import"./small-cross-CD_34XFY.js";import"./ActionButton-CeCQyXSo.js";import"./Checkbox-De7MjfoN.js";import"./useValueChanged-BkQAOqLx.js";import"./CollapsiblePanel-4GkiMrTG.js";import"./MultiColumnSortDialog-CGjENZPh.js";import"./MenuTrigger-C0XPDMSP.js";import"./CompositeItem-BUYvwABx.js";import"./ToolbarRootContext-DcA5VE7P.js";import"./getDisabledMountTransitionStyles-CM0ztPZS.js";import"./getPseudoElementBounds-BmSKtFW_.js";import"./chevron-down-CJ-s6D7k.js";import"./index-AAIJN6Ah.js";import"./error-Dy988hUQ.js";import"./BaseCbacBanner-04fZ3ODA.js";import"./makeExternalStore-Bbk8Brxu.js";import"./Tooltip-okrVPvXT.js";import"./isObject-B1y-rg-V.js";import"./debounce-B52DysiE.js";import"./useOsdkClient-BjgYjtiw.js";import"./tick-Dp3tm096.js";import"./DropdownField-BgP4Cuvb.js";import"./isEqual-DnPJMYFH.js";import"./_baseIsEqual-pcV0WeiE.js";import"./withOsdkMetrics-BI0vBwDP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
