import{j as i}from"./iframe-BBEsiyhw.js";import{O as p}from"./object-table-Dq8XXRr-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C0eK2yPz.js";import"./preload-helper-BmblPu1v.js";import"./Table-pFVgEkXm.js";import"./index-ClnGgge0.js";import"./Dialog-BUh_BioF.js";import"./cross-D8hf1lyL.js";import"./svgIconContainer-BftRkbDY.js";import"./useBaseUiId-B3oGhb6T.js";import"./InternalBackdrop-ChnKIul8.js";import"./composite-CotiRSPy.js";import"./index-BjsoHb5F.js";import"./index-DalDu3QI.js";import"./index--qEH9jKV.js";import"./useEventCallback-B1mH3cgs.js";import"./SkeletonBar-CnHRJgGL.js";import"./LoadingCell-WYQo3n6Z.js";import"./ColumnConfigDialog-DrGLRuHz.js";import"./DraggableList-C1o2JZQo.js";import"./search-CUaj7sUK.js";import"./Input-BCyCFswy.js";import"./useControlled-BD3zVyK-.js";import"./Button-C37aiOXg.js";import"./small-cross-CYF_B5Lg.js";import"./ActionButton-i2asGAmE.js";import"./Checkbox-BLIvRp7L.js";import"./useValueChanged-B8GX47Ef.js";import"./CollapsiblePanel-BBI2Wh35.js";import"./MultiColumnSortDialog-CgdSH3_A.js";import"./MenuTrigger-BuN-Dfsd.js";import"./CompositeItem-BDqi7Zsx.js";import"./ToolbarRootContext-BkzilyRu.js";import"./getDisabledMountTransitionStyles-BdiTBQkJ.js";import"./getPseudoElementBounds-Cdat2o12.js";import"./chevron-down-DqgLlLlb.js";import"./index-BK2KAOIj.js";import"./error-DhmHSkrO.js";import"./BaseCbacBanner-DZDVC8eH.js";import"./makeExternalStore-oMnnQc1q.js";import"./Tooltip-CwE-ESs7.js";import"./PopoverPopup-CuSOAdrR.js";import"./debounce-CpTZuqbj.js";import"./useOsdkClient-Dj0AF7_N.js";import"./tick-kQvs8Sxv.js";import"./DropdownField-BOu_gmsx.js";import"./isEqual-Bn_yEad4.js";import"./withOsdkMetrics-J9vpDrpe.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
