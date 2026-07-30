import{j as i}from"./iframe-BpLfy_7x.js";import{O as p}from"./object-table-CL0RxuLw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-N5wHs1Hc.js";import"./preload-helper-hhne1Nkw.js";import"./Table-BwK3TnxG.js";import"./index-CI-PQox6.js";import"./Dialog-DMcE_XRG.js";import"./cross-PuYX_-t_.js";import"./svgIconContainer-BJcxFCQJ.js";import"./useBaseUiId-DLhvCT2w.js";import"./InternalBackdrop-Cg_--_dl.js";import"./composite-D6MrKr0W.js";import"./index-CqzGtbz4.js";import"./index-CS2EtUA3.js";import"./index-DwBmIhXs.js";import"./useEventCallback-BV_slrjv.js";import"./SkeletonBar-BzHVnwiO.js";import"./LoadingCell-Bk1UD4jE.js";import"./ColumnConfigDialog-BoVBRbX8.js";import"./DraggableList-zk1lRqcV.js";import"./search-CWqxR7My.js";import"./Input-B6V3A2xO.js";import"./useControlled-DQnuFJYA.js";import"./isEqual-BKD4Aek-.js";import"./isObject-CsyTGM2I.js";import"./Button-ByGcR2jl.js";import"./ActionButton-tsCNhUs0.js";import"./Checkbox-NjQGrJij.js";import"./useValueChanged-Bpm4XFJy.js";import"./CollapsiblePanel-nl4mApkG.js";import"./MultiColumnSortDialog-DjwA5Ul2.js";import"./MenuTrigger-CUguWp68.js";import"./CompositeItem-Dh49dnMe.js";import"./ToolbarRootContext-CZ4baxUR.js";import"./getDisabledMountTransitionStyles-BDsUR9tp.js";import"./getPseudoElementBounds-Cd9zz7lc.js";import"./chevron-down-BWdhcgKJ.js";import"./index-DsR_IMSl.js";import"./error-gXA04YBk.js";import"./BaseCbacBanner-2LazQZjv.js";import"./makeExternalStore-GYdWhjGR.js";import"./Tooltip-CvFV6amD.js";import"./PopoverPopup-C83W7I3e.js";import"./toNumber-DnkrpAWO.js";import"./useOsdkClient-m5GobuOi.js";import"./tick-Pu-HkBZn.js";import"./DropdownField-CZQQBYxn.js";import"./withOsdkMetrics-C4NgfUdQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
