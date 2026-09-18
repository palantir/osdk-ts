import{j as i}from"./iframe-Bnq7KqyA.js";import{O as p}from"./object-table-BwpDc25B.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cmhi7QBK.js";import"./preload-helper-B3THyb-s.js";import"./Table-OWEu-GPE.js";import"./index-Cp8jliQ7.js";import"./Dialog-DTomyIuC.js";import"./cross-CZ44W-gs.js";import"./svgIconContainer-v0UJxJ5s.js";import"./useBaseUiId-BLC23AR8.js";import"./InternalBackdrop-BNxRDTPk.js";import"./composite-DHkFKHco.js";import"./index-BjxSMAWD.js";import"./index-CAaYrkDS.js";import"./index-forTTHlP.js";import"./useEventCallback-Cv-IdHMI.js";import"./SkeletonBar-BH2Vcofq.js";import"./LoadingCell-D-VOauVN.js";import"./ColumnConfigDialog-vebwNUAA.js";import"./DraggableList-Bc3IwPLk.js";import"./search-BWQsUNEv.js";import"./Input-DqyWCSM_.js";import"./useControlled-lHaiJfgn.js";import"./Button-DTZ1WQtp.js";import"./small-cross-DHVafU_w.js";import"./ActionButton-kJY-Pi0n.js";import"./Checkbox-Ac1xA8sH.js";import"./useValueChanged-DgUwSG6f.js";import"./CollapsiblePanel-DA0tn_f0.js";import"./MultiColumnSortDialog-CJ5ZRoXQ.js";import"./MenuTrigger-DU9Lx3Ha.js";import"./CompositeItem-kZs7JwNO.js";import"./ToolbarRootContext-BytsqpZq.js";import"./getDisabledMountTransitionStyles-DQbfHBKK.js";import"./getPseudoElementBounds-BJWXZAWi.js";import"./chevron-down-Der9zcUh.js";import"./index-CcX-LmS8.js";import"./error-CzhS-DQY.js";import"./BaseCbacBanner-RaTrx7BD.js";import"./makeExternalStore-0aoYVRXh.js";import"./Tooltip-JLD8LHly.js";import"./PopoverPopup-CHUD5U3W.js";import"./debounce-B3lN2MVP.js";import"./useOsdkClient-DLVTWwhI.js";import"./tick-BYRbYgVJ.js";import"./DropdownField-C_c9mkH4.js";import"./isEqual-CwzDsxAX.js";import"./withOsdkMetrics-NPZms2--.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
