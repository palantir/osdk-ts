import{j as i}from"./iframe-C4-lP8MT.js";import{O as p}from"./object-table-q7iifnDS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dn7Igo9L.js";import"./preload-helper-CLU8VynA.js";import"./Table-Bh3nxQAR.js";import"./index-BPrqSg8L.js";import"./Dialog-HuTkQ0Yv.js";import"./cross-C5IhJG8w.js";import"./svgIconContainer-C35V9iJM.js";import"./useBaseUiId-BA37nhWP.js";import"./InternalBackdrop-Czrv2a3X.js";import"./composite-C3w6zzv8.js";import"./index-Durq-W9B.js";import"./index-0ek5BBKP.js";import"./index-DnBDnb42.js";import"./useEventCallback-B-ZzyaSM.js";import"./SkeletonBar-BzAjKV_r.js";import"./LoadingCell-CAckMhZq.js";import"./ColumnConfigDialog-DlcSbtq3.js";import"./DraggableList-CKn1w3jR.js";import"./search-DXJOhDBp.js";import"./Input-Cq_NK47B.js";import"./useControlled-BXZQNRVM.js";import"./isEqual-CyH4xiTJ.js";import"./isObject-OdYax4RL.js";import"./Button-HQnEKdTM.js";import"./ActionButton-DPjyIH8b.js";import"./Checkbox-CIlmLHbe.js";import"./useValueChanged-BqdWWPTB.js";import"./CollapsiblePanel-Bn6kNsx8.js";import"./MultiColumnSortDialog-DYkl2iU7.js";import"./MenuTrigger-CY__s7GI.js";import"./CompositeItem-jotECSdG.js";import"./ToolbarRootContext-D7LXR6yD.js";import"./getDisabledMountTransitionStyles-BVfGpSsZ.js";import"./getPseudoElementBounds-BOMJwAxf.js";import"./chevron-down-DN58DXsa.js";import"./index-C2Jw7BZY.js";import"./error-sldn-yGv.js";import"./BaseCbacBanner-ifqN0fs5.js";import"./makeExternalStore-MEf7s0X9.js";import"./Tooltip-DUNzpEu4.js";import"./PopoverPopup-CeDc1J2y.js";import"./toNumber-BPSz6AWD.js";import"./useOsdkClient-BHP9oIf7.js";import"./tick-DuzzvOOG.js";import"./DropdownField-BcvP-9_S.js";import"./withOsdkMetrics-DpO8t0Tu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
