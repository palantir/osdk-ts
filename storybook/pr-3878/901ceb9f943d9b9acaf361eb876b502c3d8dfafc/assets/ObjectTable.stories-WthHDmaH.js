import{j as i}from"./iframe-BOatYE2J.js";import{O as p}from"./object-table-B_GKwaoz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-qvVsQxOW.js";import"./preload-helper-Chit4ifE.js";import"./Table-2wznzWpW.js";import"./index-BTbb2drj.js";import"./Dialog-BwPuGRRl.js";import"./cross-DZBv_JyD.js";import"./svgIconContainer-BIZPnmJE.js";import"./useBaseUiId-C3kAyh59.js";import"./InternalBackdrop-B0G1EUFd.js";import"./composite-Cutn8tDa.js";import"./index-CYDTlvor.js";import"./index-B1tLDNpR.js";import"./index-CxfJdBYp.js";import"./useEventCallback-CHJ8IA9Z.js";import"./SkeletonBar-DBIjsYWu.js";import"./LoadingCell-d-h7484d.js";import"./ColumnConfigDialog-rxN8c4np.js";import"./DraggableList-DJcegf_n.js";import"./search-DeiNtXAA.js";import"./Input-CNyJfF3s.js";import"./useControlled-Gz1ZIwEo.js";import"./Button-BPHruMxe.js";import"./small-cross-Cr4POQeq.js";import"./ActionButton-D0XX66qy.js";import"./Checkbox-Cy69mI4B.js";import"./useValueChanged-DaoI3wNN.js";import"./CollapsiblePanel-DuRPtwt5.js";import"./MultiColumnSortDialog-BTXotG44.js";import"./MenuTrigger-aW11Js_E.js";import"./CompositeItem-Cc_WknAx.js";import"./ToolbarRootContext-DP6Z5eRQ.js";import"./getDisabledMountTransitionStyles-C5-4kkSQ.js";import"./getPseudoElementBounds-D7Flotzx.js";import"./chevron-down-qv6CxIZl.js";import"./index-C7IRvIDp.js";import"./error-SJA0nUb8.js";import"./BaseCbacBanner-PumyHqdF.js";import"./makeExternalStore-uURBDsal.js";import"./Tooltip-BrfRi3aQ.js";import"./PopoverPopup-BHiQJeAc.js";import"./debounce-CCaPPTId.js";import"./useOsdkClient-DdxPj0N7.js";import"./tick-Dz18GSdv.js";import"./DropdownField-DbWikUpM.js";import"./isEqual-DbaqOO8-.js";import"./withOsdkMetrics-C8K4o6bx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
