import{j as i}from"./iframe-CV7MwmCP.js";import{O as p}from"./object-table-Cj1nijnb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cb4Vww-5.js";import"./preload-helper-DaalMKrO.js";import"./Table-BJuxhHcS.js";import"./index-CcmSo4f0.js";import"./Dialog-BGtR0xP5.js";import"./cross-BCKmMZfz.js";import"./svgIconContainer-BUwlxwM3.js";import"./useBaseUiId-D02gbCJt.js";import"./InternalBackdrop-apLUccr2.js";import"./composite-C5wlKwIo.js";import"./index-Cbmw9Aiw.js";import"./index-DZAiGofL.js";import"./index-D1Ud-UQP.js";import"./useEventCallback-CBeA15IC.js";import"./SkeletonBar-B7jUP9zd.js";import"./LoadingCell-CnAgf7pz.js";import"./ColumnConfigDialog-BqSXyCAB.js";import"./DraggableList-ShbNYLF5.js";import"./search-ZA-JuIRw.js";import"./Input-LBPH7NI5.js";import"./useControlled-B_AlXpDe.js";import"./Button-DL3cpirA.js";import"./small-cross-CClaOzes.js";import"./ActionButton-DR2X-pvt.js";import"./Checkbox-_FZGFlQq.js";import"./useValueChanged-CgXUX70Z.js";import"./CollapsiblePanel-BHKHfMPs.js";import"./MultiColumnSortDialog-KMRCcWQd.js";import"./MenuTrigger-qmOJgo_k.js";import"./CompositeItem-DeeqYyog.js";import"./ToolbarRootContext-m0BDUoDq.js";import"./getDisabledMountTransitionStyles-dYTq3w9c.js";import"./getPseudoElementBounds-Dav5DWq0.js";import"./chevron-down-DSa8oKzx.js";import"./index-BT2TFY4S.js";import"./error-CMXtHiOW.js";import"./BaseCbacBanner-C3roT97X.js";import"./makeExternalStore-D2__KQ0O.js";import"./Tooltip-UQeFx1yB.js";import"./PopoverPopup-CtCkbput.js";import"./debounce-C_lpTgYJ.js";import"./useOsdkClient-C63pRinH.js";import"./tick-0LVn8dGI.js";import"./DropdownField-CaQvqdAI.js";import"./isEqual-DsMCDxpD.js";import"./withOsdkMetrics-B-y4GUW2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
