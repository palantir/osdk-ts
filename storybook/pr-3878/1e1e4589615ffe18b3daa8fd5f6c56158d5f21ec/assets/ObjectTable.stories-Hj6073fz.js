import{j as i}from"./iframe-D3DqoIpf.js";import{O as p}from"./object-table-5-cStO1F.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BMI-ISkN.js";import"./preload-helper-Bur1EzB5.js";import"./Table-DnIRlfeH.js";import"./index-BThkDgxi.js";import"./Dialog-Dt93nrAE.js";import"./cross-CAMhptAD.js";import"./svgIconContainer-CoUDa19N.js";import"./useBaseUiId-BOGuxokK.js";import"./InternalBackdrop-CX5pFpyQ.js";import"./composite-DOJBzh5B.js";import"./index-BF36rFqh.js";import"./index-CaWcagsp.js";import"./index-CLu7smVU.js";import"./useEventCallback-BwRfc_LO.js";import"./SkeletonBar-DhPBeMf1.js";import"./LoadingCell-DYjb1NAx.js";import"./ColumnConfigDialog-B-slaITe.js";import"./DraggableList-hn4vdS_9.js";import"./search-DzOWxMYj.js";import"./Input-Ba9sqiE-.js";import"./useControlled-R3QnTpFh.js";import"./Button-D1m-bnZN.js";import"./small-cross-Cx3vpP8Z.js";import"./ActionButton-BmFxbrY9.js";import"./Checkbox-BnWvCHaF.js";import"./useValueChanged-h8m0Y_Ok.js";import"./CollapsiblePanel-CvE2FJWC.js";import"./MultiColumnSortDialog-B3C3keJ9.js";import"./MenuTrigger-Do9R63Sr.js";import"./CompositeItem-DmhK9sjv.js";import"./ToolbarRootContext-FLVSUoPt.js";import"./getDisabledMountTransitionStyles-MKKxqo0-.js";import"./getPseudoElementBounds-DoOAyvUg.js";import"./chevron-down-BYhG0KSh.js";import"./index-CAWoAfLN.js";import"./error-DmP3oCyF.js";import"./BaseCbacBanner-CCzrCVQf.js";import"./makeExternalStore-CWigMI40.js";import"./Tooltip-BFQd_OrJ.js";import"./PopoverPopup-Cv0Kt1cr.js";import"./debounce-QvYOae8J.js";import"./useOsdkClient-BZ2Q6Hqc.js";import"./tick-C5EOZ80L.js";import"./DropdownField-CwjqwoqN.js";import"./isEqual-DNuZwAZe.js";import"./withOsdkMetrics-Dzhtom8t.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
