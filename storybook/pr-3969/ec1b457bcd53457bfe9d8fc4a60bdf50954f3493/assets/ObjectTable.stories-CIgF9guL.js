import{j as i}from"./iframe-DT3Pq7Dk.js";import{O as p}from"./object-table-g1XMDFd-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-PYQ0SFzv.js";import"./preload-helper-D2GrK1CJ.js";import"./Table-Bh-9mYaq.js";import"./index-AT_VLJBX.js";import"./Dialog-l-bas76Q.js";import"./cross-CW5vZ7KQ.js";import"./svgIconContainer-TdCO8fzr.js";import"./useBaseUiId-Laeorjq3.js";import"./InternalBackdrop--c_GjfBN.js";import"./composite-BLTBB5ty.js";import"./index-DzCFWbuW.js";import"./index-fPrU9AoD.js";import"./index-CN1cNOfe.js";import"./useEventCallback-BxHIphzr.js";import"./SkeletonBar-fo9N7Mio.js";import"./LoadingCell-i4o0PZ76.js";import"./ColumnConfigDialog-DCZ2hIsl.js";import"./DraggableList-CyEH8jAj.js";import"./search-riKbdAfC.js";import"./Input-Bb6sqNmB.js";import"./useControlled-CytQjpOe.js";import"./Button-DyNME9ua.js";import"./small-cross-DVimoYxF.js";import"./ActionButton-CB14cvAW.js";import"./Checkbox-BYlPaTiv.js";import"./useValueChanged-DaOIj_Om.js";import"./CollapsiblePanel-DKE9kt7B.js";import"./MultiColumnSortDialog-V1bLreRv.js";import"./MenuTrigger-DRejejB5.js";import"./CompositeItem-DwUvkpMk.js";import"./ToolbarRootContext-BXZtSj06.js";import"./getDisabledMountTransitionStyles-sPoOQ_E8.js";import"./getPseudoElementBounds-yDZ97H6Z.js";import"./chevron-down-puCe9vK2.js";import"./index-Cm0FOdoZ.js";import"./error-CJNV9pQn.js";import"./BaseCbacBanner-VqYtHkBJ.js";import"./makeExternalStore-Do_G056M.js";import"./Tooltip-DCOTkgJf.js";import"./PopoverPopup-qAtb92MM.js";import"./debounce-CfPojQAv.js";import"./useOsdkClient-CGIMjlzr.js";import"./tick-Dt4R6xeY.js";import"./DropdownField-C5cLUDqt.js";import"./isEqual-DHwQUV_q.js";import"./withOsdkMetrics-Bxhj5aXe.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
