import{j as i}from"./iframe-9M9bsBp7.js";import{O as p}from"./object-table-DDnD0LEF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C1TbNHTu.js";import"./preload-helper-BM4z56U2.js";import"./Table-BKceQGeK.js";import"./index-Btt-Erli.js";import"./Dialog-Bku0utZc.js";import"./cross-DvXvrJje.js";import"./svgIconContainer-CoivixKV.js";import"./useBaseUiId-Cecht4K8.js";import"./InternalBackdrop-BuQOhnSQ.js";import"./composite-cToRjaCy.js";import"./index-B06OZyEr.js";import"./index-C09389ae.js";import"./index-CaAK8RE7.js";import"./useEventCallback-BxVQKK6u.js";import"./SkeletonBar-DKCIreol.js";import"./LoadingCell-LB1z4xG-.js";import"./ColumnConfigDialog-BnTBp42F.js";import"./DraggableList-B77NFbTe.js";import"./search-DEkxxSSE.js";import"./Input-C7jKYdT3.js";import"./useControlled-w4bpKx_N.js";import"./Button-B2MqrRbr.js";import"./small-cross-C1-2zuyF.js";import"./ActionButton-Z_LMZ47a.js";import"./Checkbox-DwDZuJ7K.js";import"./useValueChanged-BO1qKB30.js";import"./CollapsiblePanel-BGWSCfkH.js";import"./MultiColumnSortDialog-MZcHdsU0.js";import"./MenuTrigger-CN7QcYrc.js";import"./CompositeItem-BB1LLivk.js";import"./ToolbarRootContext-CZOvTlyr.js";import"./getDisabledMountTransitionStyles-jVmoLSfS.js";import"./getPseudoElementBounds-BmjLOFWn.js";import"./chevron-down-DZ9BB8z3.js";import"./index-C5SnP7CW.js";import"./error-p3mSXq-q.js";import"./BaseCbacBanner-D8B4w9Kg.js";import"./makeExternalStore-DWMnQhkI.js";import"./Tooltip-B6hOpv8p.js";import"./PopoverPopup-D0gRA-kc.js";import"./debounce-Uz0h7tBs.js";import"./useOsdkClient-NGrFWkeq.js";import"./tick-0BTgBl0v.js";import"./DropdownField-BBxZ-1T3.js";import"./isEqual-CuHdL2kt.js";import"./withOsdkMetrics-DfgPxehB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
