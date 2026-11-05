import{j as i}from"./iframe-22sgaWxv.js";import{O as p}from"./object-table-Drof33nU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-7jIZje6N.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BCezGTuh.js";import"./index-BHBAGN-s.js";import"./Dialog-DLhbH3bQ.js";import"./cross-BCwFnrJl.js";import"./svgIconContainer-BsVzcm6E.js";import"./useBaseUiId-CUViOtvX.js";import"./InternalBackdrop-QEZTLwT8.js";import"./composite-BTcqQx01.js";import"./index-C-ayeZqv.js";import"./index-H6bUqLk6.js";import"./index-BCMcuhrC.js";import"./useEventCallback-C-98vcNs.js";import"./SkeletonBar-DOTAFrq-.js";import"./LoadingCell-DoU3qEW4.js";import"./ColumnConfigDialog-B3QGycQ2.js";import"./DraggableList-Vthwf9hx.js";import"./search-D5hLmpm3.js";import"./Input-kE2itjKl.js";import"./useControlled-9hZ525gD.js";import"./Button-Tlz3cekG.js";import"./small-cross-BwMnv4hk.js";import"./ActionButton-Boe4PNYh.js";import"./Checkbox-BEcD_rA7.js";import"./useValueChanged-Cvkbwiqt.js";import"./CollapsiblePanel-CUWh3so1.js";import"./MultiColumnSortDialog-D_SHrlea.js";import"./MenuTrigger-cTtpbi20.js";import"./CompositeItem-C3Np8qjM.js";import"./ToolbarRootContext-D1WVL4z4.js";import"./getDisabledMountTransitionStyles-p4mAODiY.js";import"./getPseudoElementBounds-BLk4lSoh.js";import"./chevron-down-BNxx7PXr.js";import"./index-DzYoB3O-.js";import"./error-DkFYgz--.js";import"./BaseCbacBanner-DPu0oi4D.js";import"./makeExternalStore-D5ROsNAp.js";import"./Tooltip-CX0Gi3dR.js";import"./isObject-DGvkKeJp.js";import"./debounce-ASo6GI3m.js";import"./useOsdkClient-B3I5yVwR.js";import"./tick-DS5XO6DI.js";import"./DropdownField-B0HjgQSf.js";import"./isEqual-0dAV4SyG.js";import"./_baseIsEqual-Da6PSZBn.js";import"./withOsdkMetrics-BykLiONE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
