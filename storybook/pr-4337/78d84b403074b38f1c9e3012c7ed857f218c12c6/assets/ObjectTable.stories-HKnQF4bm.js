import{j as i}from"./iframe-kWD-jdIM.js";import{O as p}from"./object-table-RGNDvId0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D248eg-o.js";import"./preload-helper-BYIpTBn0.js";import"./Table-BiUBNS3W.js";import"./index-DHpWRKQv.js";import"./Dialog-DxgQ0zFS.js";import"./cross-BSGzHacU.js";import"./svgIconContainer-B8XSgAJk.js";import"./useBaseUiId-C60jF_o-.js";import"./InternalBackdrop-DyR0_bnS.js";import"./composite-BmOV-aCZ.js";import"./index-DMVcTELQ.js";import"./index-D6dW0J7N.js";import"./index-GH3PvjFS.js";import"./useEventCallback-DlpvfO9F.js";import"./SkeletonBar-COIOzOry.js";import"./LoadingCell-AJKkJPU_.js";import"./ColumnConfigDialog-BHErHlOV.js";import"./DraggableList-SCDQOoOU.js";import"./search-Xv8sEjS-.js";import"./Input-DOuHVujQ.js";import"./useControlled-u0KjilF0.js";import"./Button-B37N9Ve_.js";import"./small-cross-B64fsBIe.js";import"./ActionButton-Ci0HXhBZ.js";import"./Checkbox-DVS3v9FZ.js";import"./useValueChanged-BFrDnBzs.js";import"./CollapsiblePanel-evQDlZSo.js";import"./MultiColumnSortDialog-BY4l5wpI.js";import"./MenuTrigger-rcHYECwR.js";import"./CompositeItem-BYdOgjmY.js";import"./ToolbarRootContext-QHke1z2n.js";import"./getDisabledMountTransitionStyles-Cfp--kIY.js";import"./getPseudoElementBounds-ARNy8nkD.js";import"./chevron-down-B5rYpa0g.js";import"./index-B2Y0AFjL.js";import"./error-DarRpeI1.js";import"./BaseCbacBanner-CAxX5Ilo.js";import"./makeExternalStore-V_raLWeu.js";import"./Tooltip-JdfuuPqa.js";import"./PopoverPopup-BL8XjTGc.js";import"./debounce-BUu0DgJ5.js";import"./useOsdkClient-DgtXvuGE.js";import"./tick-Bkqq1dN2.js";import"./DropdownField-B2rD9Nef.js";import"./isEqual-Dama8GfR.js";import"./withOsdkMetrics-CKT8uRvg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
