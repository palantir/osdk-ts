import{j as i}from"./iframe-D9x1t_vp.js";import{O as p}from"./object-table-Cd9VFz_z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C49Tne1E.js";import"./preload-helper-G-W5TAZO.js";import"./Table-D-dmi1MD.js";import"./index-DkawwfeN.js";import"./Dialog-BLyxmt60.js";import"./cross-B-D0ldT_.js";import"./svgIconContainer-GJo4FLSZ.js";import"./useBaseUiId-BXGjoli7.js";import"./InternalBackdrop-C5Ik5Fts.js";import"./composite-DbEdsmcW.js";import"./index-CDz91Otv.js";import"./index-DvF6dXob.js";import"./index-B5v3ZKm8.js";import"./useEventCallback-krj6U4d7.js";import"./SkeletonBar-CP1BDtVG.js";import"./LoadingCell-B4rVMJ4V.js";import"./ColumnConfigDialog-C4Zysgf-.js";import"./DraggableList-CSUV0r3I.js";import"./search-C5Hx3O16.js";import"./Input-BURRu-rg.js";import"./useControlled-B_3qzWS0.js";import"./Button-Dn0Wamri.js";import"./small-cross-sMMaN9EK.js";import"./ActionButton-C1dVj4zE.js";import"./Checkbox-LmMfFJQa.js";import"./useValueChanged-DpwRfbwV.js";import"./CollapsiblePanel-DYQ1sJgE.js";import"./MultiColumnSortDialog-CWdW0w0p.js";import"./MenuTrigger-23dZsPJo.js";import"./CompositeItem-DbzCphWS.js";import"./ToolbarRootContext-CB_Eo7a2.js";import"./getDisabledMountTransitionStyles-C_9Bw_r_.js";import"./getPseudoElementBounds-ZlfF0Rjy.js";import"./chevron-down-BPV9QsLo.js";import"./index-BuAwYtSM.js";import"./error-BA6zdh3z.js";import"./BaseCbacBanner-C9zQ2cua.js";import"./makeExternalStore-DFF9EkpS.js";import"./Tooltip-CsqLoml-.js";import"./PopoverPopup-BLCb0pYf.js";import"./debounce-CBcbM-BZ.js";import"./useOsdkClient-D8vUR2ip.js";import"./tick-Ct0EC7-q.js";import"./DropdownField-DLdDRCMy.js";import"./isEqual-D71CH4xY.js";import"./withOsdkMetrics-C_ks6dJ2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
