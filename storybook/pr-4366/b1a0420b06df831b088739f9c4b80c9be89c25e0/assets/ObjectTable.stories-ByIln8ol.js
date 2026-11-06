import{j as i}from"./iframe-CNCsodpO.js";import{O as p}from"./object-table-XuAfOsME.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Co3d_hQb.js";import"./preload-helper-BcSdXRr8.js";import"./Table-Bwb-19Mt.js";import"./index-DZaiIimE.js";import"./Dialog-D6UwLMk_.js";import"./cross-ByI78NKq.js";import"./svgIconContainer-D0BYcghd.js";import"./useBaseUiId-BM8If8HJ.js";import"./InternalBackdrop-DpvX0-2J.js";import"./composite-D-lHYX2y.js";import"./index-JERw882y.js";import"./index-BiV4_PIL.js";import"./index-DnBAC0DA.js";import"./useEventCallback-BC6LGbHR.js";import"./SkeletonBar-CtqMhpLq.js";import"./LoadingCell-USQtKWyS.js";import"./ColumnConfigDialog-Cfc9mSRc.js";import"./DraggableList-e3jVF2rK.js";import"./search-BLGSqUK3.js";import"./Input-DEq1aCXP.js";import"./useControlled-jyzXrKzG.js";import"./Button-DdjGWYgj.js";import"./small-cross-bytaAr9i.js";import"./ActionButton-DJLD6pzf.js";import"./Checkbox-DS6veKru.js";import"./useValueChanged-B79ahhhf.js";import"./CollapsiblePanel-Bey-NPEU.js";import"./MultiColumnSortDialog-B0nX3_Xv.js";import"./MenuTrigger-CSit46lD.js";import"./CompositeItem-CznsiIYk.js";import"./ToolbarRootContext-D2snF5qH.js";import"./getDisabledMountTransitionStyles-CZyt8PVf.js";import"./getPseudoElementBounds-CBt4F6dS.js";import"./chevron-down-QtQgwZHW.js";import"./index-ikLawp9H.js";import"./error-vSyclIj9.js";import"./BaseCbacBanner-CSV7xl3u.js";import"./makeExternalStore-MQ-cLLpt.js";import"./Tooltip-A2wRUbEy.js";import"./isObject-BeJ3unj3.js";import"./debounce-BN80GkFI.js";import"./useOsdkClient-D5sei-fs.js";import"./tick-B29x5y3C.js";import"./DropdownField-ChmGLrin.js";import"./isEqual-CCg3GprE.js";import"./_baseIsEqual-h7eCMjyK.js";import"./withOsdkMetrics-DJIl7LC3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
