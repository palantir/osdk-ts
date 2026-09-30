import{j as i}from"./iframe-mIKFVahX.js";import{O as p}from"./object-table-hPMOmqJR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CaxnGVcn.js";import"./preload-helper-DQmtxJ1O.js";import"./Table-Brx6eFBd.js";import"./index-eiO_d1ck.js";import"./Dialog-BSESTF6k.js";import"./cross-UeuWwKaz.js";import"./svgIconContainer-CQHualxO.js";import"./useBaseUiId-CgEi7PVt.js";import"./InternalBackdrop-Cdrrn7aO.js";import"./composite-D6bfVeDu.js";import"./index-Dr8o4W-0.js";import"./index-CRsq_c05.js";import"./index-Pl8i-n3y.js";import"./useEventCallback-ByOT_zkS.js";import"./SkeletonBar-Uz0c5MYh.js";import"./LoadingCell-DXFzSvcB.js";import"./ColumnConfigDialog-lI0l1iiB.js";import"./DraggableList-CdQWcTkz.js";import"./search-BUcn5JQ5.js";import"./Input-C9PDTVtY.js";import"./useControlled-XyEjnDFJ.js";import"./Button-D5NXSYW3.js";import"./small-cross-CuoPPjey.js";import"./ActionButton-D0IxPZVx.js";import"./Checkbox-CxqJmRtZ.js";import"./useValueChanged-BD4JYKkh.js";import"./CollapsiblePanel--mOZhS6t.js";import"./MultiColumnSortDialog-CO8YBk6o.js";import"./MenuTrigger-Cs75RSzs.js";import"./CompositeItem-CiILW6_Z.js";import"./ToolbarRootContext-xG4QpLCn.js";import"./getDisabledMountTransitionStyles-BBJk5-bd.js";import"./getPseudoElementBounds-BHyVtr05.js";import"./chevron-down-BpXaL00s.js";import"./index-ug1vsAFu.js";import"./error-Jm4hVuYR.js";import"./BaseCbacBanner-C-c4cvyr.js";import"./makeExternalStore-BtEilyBA.js";import"./Tooltip-DaMgYhHZ.js";import"./PopoverPopup-DVmf3a0F.js";import"./debounce-ahFHSZsE.js";import"./useOsdkClient-Dtz0cA44.js";import"./tick-D0ywqUCl.js";import"./DropdownField-DRer5ayG.js";import"./isEqual-k-eFjD6c.js";import"./withOsdkMetrics-f8AFQ5tL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
