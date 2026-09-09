import{j as i}from"./iframe-Ca8QPFs7.js";import{O as p}from"./object-table-BQnp-YUD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D7gSHfBn.js";import"./preload-helper-COsmiGlU.js";import"./Table-f3uvHWsc.js";import"./index-TIjGnA-V.js";import"./Dialog-DwYyKS36.js";import"./cross-fEUgPw6t.js";import"./svgIconContainer-CTykICQ9.js";import"./useBaseUiId-EAvVFtG3.js";import"./InternalBackdrop-mNTf9SFF.js";import"./composite-TrXp-_T_.js";import"./index-B7VCz-93.js";import"./index-4Pm78iQf.js";import"./index-Ce6raiTT.js";import"./useEventCallback-DalbXHIL.js";import"./SkeletonBar-J8cR98yu.js";import"./LoadingCell-DaV3CQeG.js";import"./ColumnConfigDialog-CJ1DmrCD.js";import"./DraggableList-Co4aT-G4.js";import"./search-mtN4hQ3z.js";import"./Input-bPmf1b1D.js";import"./useControlled-D9cxw3en.js";import"./Button-CDLpEtAu.js";import"./small-cross-pwzIRu8R.js";import"./ActionButton-S14ncGS1.js";import"./Checkbox-BAN4WIan.js";import"./useValueChanged-8Z2upUib.js";import"./CollapsiblePanel-DuCqlcCL.js";import"./MultiColumnSortDialog-CnEQjc1h.js";import"./MenuTrigger-DRwe12ZK.js";import"./CompositeItem-Blj-310R.js";import"./ToolbarRootContext-vcNNCMZy.js";import"./getDisabledMountTransitionStyles-BOi8NXil.js";import"./getPseudoElementBounds-C_xfi5-U.js";import"./chevron-down-CLaQgAU8.js";import"./index-Bc2S_tLj.js";import"./error-iIOc5tuM.js";import"./BaseCbacBanner-CoMmKMEW.js";import"./makeExternalStore-DFNzrn-Z.js";import"./Tooltip-DQadFgFZ.js";import"./PopoverPopup-D2QR_oJe.js";import"./debounce-CPv0owLQ.js";import"./useOsdkClient-D4peXsmr.js";import"./tick-DO6aTuUx.js";import"./DropdownField-BUiYJ1tm.js";import"./isEqual-CqV2anur.js";import"./withOsdkMetrics-DWYY-gQH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
