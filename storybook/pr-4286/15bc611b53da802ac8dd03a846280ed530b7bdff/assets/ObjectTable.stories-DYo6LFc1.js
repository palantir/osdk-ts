import{j as i}from"./iframe-C5CLXfWS.js";import{O as p}from"./object-table-B8Yj1udP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dabh4yzE.js";import"./preload-helper-CmQDAWyb.js";import"./Table-BRmy04Uy.js";import"./index-DtGlOU-M.js";import"./Dialog-Danu4XaP.js";import"./cross-B3o49gy1.js";import"./svgIconContainer-BIzzh223.js";import"./useBaseUiId-CqeeK3OI.js";import"./InternalBackdrop-KXNey9yS.js";import"./composite-B3s1Z_B-.js";import"./index-BXJypcxy.js";import"./index-DGZrjFba.js";import"./index-Bj1EDllN.js";import"./useEventCallback-CYKoO3bJ.js";import"./SkeletonBar-DJb7Lu6W.js";import"./LoadingCell-C8UIseRW.js";import"./ColumnConfigDialog-Cvjl-BoI.js";import"./DraggableList-CyvyTj6Q.js";import"./search-aAg3Ft0P.js";import"./Input-D-cxIIFp.js";import"./useControlled-CzKtgw0j.js";import"./Button-W3Mp6JlA.js";import"./small-cross-B2iIdYeI.js";import"./ActionButton-DJweMjUH.js";import"./Checkbox-BcjmR6da.js";import"./useValueChanged-CJyGnTsK.js";import"./CollapsiblePanel-SGmn3J0J.js";import"./MultiColumnSortDialog-jnhFZAk_.js";import"./MenuTrigger-BdAsiuB8.js";import"./CompositeItem-Dx1-4fNK.js";import"./ToolbarRootContext-Bvt9zfPy.js";import"./getDisabledMountTransitionStyles-CS5zUVVl.js";import"./getPseudoElementBounds-DjH8mNuQ.js";import"./chevron-down-k0OiGtOZ.js";import"./index-CaADRcIm.js";import"./error-aTWH99uz.js";import"./BaseCbacBanner-DFCES3sy.js";import"./makeExternalStore-BfuCy0xW.js";import"./Tooltip-ClnzFWaz.js";import"./PopoverPopup-Dll2LQIE.js";import"./debounce-CAC4DZOe.js";import"./useOsdkClient-lAi3FL1U.js";import"./tick-BDZpZu1S.js";import"./DropdownField-DaRMR6LA.js";import"./isEqual-ZgcjThM9.js";import"./withOsdkMetrics-BjF1sUNW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
