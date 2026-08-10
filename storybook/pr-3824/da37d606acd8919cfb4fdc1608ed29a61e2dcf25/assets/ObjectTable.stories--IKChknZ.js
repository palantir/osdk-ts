import{j as i}from"./iframe-B70S6Lmv.js";import{O as p}from"./object-table-BfTy7xib.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-j-r5nunf.js";import"./preload-helper-DvqZs_Ee.js";import"./Table-DiAKwS9Z.js";import"./index-DWnMAI4T.js";import"./Dialog-BI2LCIhj.js";import"./cross-RQeYgE-5.js";import"./svgIconContainer-DCrmifFa.js";import"./useBaseUiId-EwZnzvJa.js";import"./InternalBackdrop-swj0KUjw.js";import"./composite-DkMtiPjX.js";import"./index-CuOP0KH2.js";import"./index-BKhiojeG.js";import"./index-DjQQ9Ebf.js";import"./useEventCallback-BaRUcjQf.js";import"./SkeletonBar-XMBBLDKR.js";import"./LoadingCell-CJRIZTrX.js";import"./ColumnConfigDialog-bucvOWJ0.js";import"./DraggableList-yliEoYZI.js";import"./search-BA089tRt.js";import"./Input-aN0JqfYJ.js";import"./useControlled-BYkqALsw.js";import"./isEqual-Diwy372c.js";import"./isObject-Bau7kQmU.js";import"./Button-ChkfdyYN.js";import"./ActionButton-CmxK41cn.js";import"./Checkbox-Ldf5yhpW.js";import"./useValueChanged-C1efsP7L.js";import"./CollapsiblePanel-Df1NXogi.js";import"./MultiColumnSortDialog-Cpu5deyQ.js";import"./MenuTrigger-HI6uf4IZ.js";import"./CompositeItem-BVQtW5gx.js";import"./ToolbarRootContext-CMGSy6ZS.js";import"./getDisabledMountTransitionStyles-JyNwSVpS.js";import"./getPseudoElementBounds-Cqb5T_QV.js";import"./chevron-down-DGeK32yC.js";import"./index-BhkemeNm.js";import"./error-B37gQfOZ.js";import"./BaseCbacBanner-B0K-ZHth.js";import"./makeExternalStore-BEhTvj2Q.js";import"./Tooltip-JVwBppS1.js";import"./PopoverPopup-CsTcm8RG.js";import"./toNumber-wPLlggss.js";import"./useOsdkClient-e-zC0dYQ.js";import"./tick-DI3EVtTl.js";import"./DropdownField-X8THrraV.js";import"./withOsdkMetrics-DB3VOG4-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
