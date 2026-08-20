import{j as i}from"./iframe-DHxsU2_I.js";import{O as p}from"./object-table-Wmcnqtqi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CE7TaeNe.js";import"./preload-helper-BR3ABpJE.js";import"./Table-CQZZcuKq.js";import"./index-vnjM7992.js";import"./Dialog-BlJuLB3G.js";import"./cross-RIzAoTK6.js";import"./svgIconContainer-B2plqKMw.js";import"./useBaseUiId-pTRtJO1U.js";import"./InternalBackdrop-DUaK7Jhb.js";import"./composite-6SoNaUP7.js";import"./index-CDRJBt8l.js";import"./index-BjXFS9V3.js";import"./index-C4c1CFQV.js";import"./useEventCallback-CqytFUcr.js";import"./SkeletonBar-Tdn8qzhi.js";import"./LoadingCell-BixbKxJ-.js";import"./ColumnConfigDialog-CkumhtfO.js";import"./DraggableList-BFqnGUBM.js";import"./search-Cyzg0Z92.js";import"./Input-CHAbdjgV.js";import"./useControlled-DDSoMtR7.js";import"./Button-DytbmDZO.js";import"./small-cross-Bagi3YzR.js";import"./ActionButton-Dwew71_H.js";import"./Checkbox-DPm7-wkJ.js";import"./useValueChanged-BI16DUVB.js";import"./CollapsiblePanel-DHckIMdd.js";import"./MultiColumnSortDialog-R7s0XjIw.js";import"./MenuTrigger-BxdhLVXv.js";import"./CompositeItem-B_q3XIVN.js";import"./ToolbarRootContext-Brnit9i4.js";import"./getDisabledMountTransitionStyles-uvRwRUIa.js";import"./getPseudoElementBounds-Eh1BWRFI.js";import"./chevron-down-zF0nXAC0.js";import"./index-COpwRMNV.js";import"./error-CPSw0Cte.js";import"./BaseCbacBanner-WtSiJJpE.js";import"./makeExternalStore-BfJvolns.js";import"./Tooltip-CJPtjYYA.js";import"./PopoverPopup-CEuqgSR5.js";import"./debounce-tNYRe4e5.js";import"./useOsdkClient-CORV7Qba.js";import"./tick-CquZwjil.js";import"./DropdownField-BRqSpCyG.js";import"./isEqual-DIqld6JC.js";import"./withOsdkMetrics-flaJFZYR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
