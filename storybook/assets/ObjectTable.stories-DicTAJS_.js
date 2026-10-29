import{j as i}from"./iframe-CAIgECfm.js";import{O as p}from"./object-table-Bpg6Rjwr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C0Ym1UCi.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BOugih2v.js";import"./index-B3MYTMei.js";import"./Dialog-Dl5pUjsz.js";import"./cross-BQNRDOaU.js";import"./svgIconContainer-C3DKY__f.js";import"./useBaseUiId-D9Drx6D-.js";import"./InternalBackdrop-CszvMWda.js";import"./composite-JJXOCwqO.js";import"./index-oq0LOBzb.js";import"./index-Ufz-XkYv.js";import"./index-Bo8EBVtj.js";import"./useEventCallback-DEW-Jvqw.js";import"./SkeletonBar-BTrZKUFD.js";import"./LoadingCell-C4neaCCK.js";import"./ColumnConfigDialog-DRhbRBNs.js";import"./DraggableList-BeHdPllY.js";import"./search-DtjskLKm.js";import"./Input-DiYmIIHx.js";import"./useControlled-Dfbx34Uf.js";import"./Button-B8Prvm33.js";import"./small-cross-Dd4LJYDa.js";import"./ActionButton-Dm82L77i.js";import"./Checkbox-COVciVNz.js";import"./useValueChanged-5KOAJGnG.js";import"./CollapsiblePanel-DdLN5yGK.js";import"./MultiColumnSortDialog-CS7Povdk.js";import"./MenuTrigger-DN-7j7Vc.js";import"./CompositeItem-ByF2vx3e.js";import"./ToolbarRootContext-wvUb7vtw.js";import"./getDisabledMountTransitionStyles-Dte8P-y1.js";import"./getPseudoElementBounds-DK95qc36.js";import"./chevron-down-DmkBexVO.js";import"./index-euZ8olZi.js";import"./error-DOslEiGD.js";import"./BaseCbacBanner-DKHk2W2w.js";import"./makeExternalStore-1s6PxRaa.js";import"./Tooltip-BLisYypf.js";import"./PopoverPopup-BQG7iL0H.js";import"./debounce-B0a0YjK6.js";import"./useOsdkClient-C0sKTx_B.js";import"./tick-DJkFbBfA.js";import"./DropdownField-Cvt8oMSZ.js";import"./isEqual-l7qirsQ1.js";import"./withOsdkMetrics-BxbwCQgj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
