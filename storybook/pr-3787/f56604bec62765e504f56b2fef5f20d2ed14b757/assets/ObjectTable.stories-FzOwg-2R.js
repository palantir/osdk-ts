import{j as i}from"./iframe-Chf_oTGA.js";import{O as p}from"./object-table-DfZxQv0Z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-1EhuABCJ.js";import"./preload-helper-CDTIXXks.js";import"./Table-A1ezYdFI.js";import"./index-xJnBoHwJ.js";import"./Dialog-BcgX0pie.js";import"./cross-CrnBFQH-.js";import"./svgIconContainer-BH22RWVr.js";import"./useBaseUiId-hHX-f39p.js";import"./InternalBackdrop-CwX4t6qu.js";import"./composite-BoSTtwUc.js";import"./index-CxjHweEz.js";import"./index-BtccUsyA.js";import"./index-CWVms5Tp.js";import"./useEventCallback-BRqteG3d.js";import"./SkeletonBar-Djz_uQ63.js";import"./LoadingCell-6VEM_Qe8.js";import"./ColumnConfigDialog-CGaIoYIj.js";import"./DraggableList-IqnZskH8.js";import"./search-ygVixVNd.js";import"./Input-BFq9F5ks.js";import"./useControlled-VvgXxcWd.js";import"./isEqual-D1Q6ZEcL.js";import"./isObject--uK95e87.js";import"./Button-DKdaKz-_.js";import"./ActionButton-B0Pm9-CH.js";import"./Checkbox-Csz8M_77.js";import"./useValueChanged-BklgFBNq.js";import"./CollapsiblePanel-CUBqE99N.js";import"./MultiColumnSortDialog-xah2tayR.js";import"./MenuTrigger-BsfExqdA.js";import"./CompositeItem-C_RDCmWm.js";import"./ToolbarRootContext-GVFBeBA6.js";import"./getDisabledMountTransitionStyles-VZ9bw_0R.js";import"./getPseudoElementBounds-BkgIVNoQ.js";import"./chevron-down-BETM3MrF.js";import"./index-CMwyLjyb.js";import"./error-DgN3iPqH.js";import"./BaseCbacBanner-vCizbw2T.js";import"./makeExternalStore-BetVxvym.js";import"./Tooltip-C5E6djBP.js";import"./PopoverPopup-Crk7RKNj.js";import"./toNumber-aBr24n79.js";import"./useOsdkClient-VQg3IU_U.js";import"./tick-6ldMfmE5.js";import"./DropdownField-BdLbEKPf.js";import"./withOsdkMetrics-C4p6K-5h.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
