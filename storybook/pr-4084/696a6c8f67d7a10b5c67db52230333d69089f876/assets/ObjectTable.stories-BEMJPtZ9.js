import{j as i}from"./iframe-Btqvg51n.js";import{O as p}from"./object-table-Kr1LIz9k.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BXhTadTj.js";import"./preload-helper-syhdZDkE.js";import"./Table-C-PPsSqH.js";import"./index-BD28I-pc.js";import"./Dialog-Bb1DWAWa.js";import"./cross-4sLVfr-a.js";import"./svgIconContainer-DO6E7UDs.js";import"./useBaseUiId-BkjQeUzK.js";import"./InternalBackdrop-XTodM-Lf.js";import"./composite-DISAoOje.js";import"./index-C-bm7M0d.js";import"./index-DI6u9RXJ.js";import"./index-C1ab4uqR.js";import"./useEventCallback-Birv-DIv.js";import"./SkeletonBar-g4Zrl_9a.js";import"./LoadingCell-BKaFduDq.js";import"./ColumnConfigDialog-BUzzW8EJ.js";import"./DraggableList-CZHyxGin.js";import"./search-CS3jZQxq.js";import"./Input-DshYp2Vv.js";import"./useControlled-sKyg4XQp.js";import"./Button-Cjefz3Ec.js";import"./small-cross-DDu4FjQa.js";import"./ActionButton-DPOxkhPL.js";import"./Checkbox-B2j86Kyh.js";import"./useValueChanged-CGpXR8sb.js";import"./CollapsiblePanel-P1TD94b_.js";import"./MultiColumnSortDialog-C6PMzrn_.js";import"./MenuTrigger-D40aaK9L.js";import"./CompositeItem-QpGH5PhM.js";import"./ToolbarRootContext-AyD5CGSz.js";import"./getDisabledMountTransitionStyles-Dj_QuE4i.js";import"./getPseudoElementBounds-DXcg_kO_.js";import"./chevron-down-HGlEUxE6.js";import"./index-DFfg-m3O.js";import"./error-BHl0yOWM.js";import"./BaseCbacBanner-DvqMmJ1G.js";import"./makeExternalStore-D879CjGU.js";import"./Tooltip-C9dIavbW.js";import"./PopoverPopup-Dknz7An3.js";import"./debounce-BAYS4VQz.js";import"./useOsdkClient-CDUGXlsx.js";import"./tick-BmuiIbFi.js";import"./DropdownField-DQbsKt9D.js";import"./isEqual-tsaj_REN.js";import"./withOsdkMetrics-D8UgdzXc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
