import{j as i}from"./iframe-bA068ynB.js";import{O as p}from"./object-table-BOJPUH3M.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ynpcIbCY.js";import"./preload-helper-C9VsmxhQ.js";import"./Table-QfQxDgch.js";import"./index-DBROM1hX.js";import"./Dialog-zP62slpV.js";import"./cross-Bkk1ngCc.js";import"./svgIconContainer-ImDrBsfn.js";import"./useBaseUiId-BMBSefl3.js";import"./InternalBackdrop-CAp1E-tm.js";import"./composite-HNoPL5_Y.js";import"./index-rNZjrxqa.js";import"./index-NJJaf9yA.js";import"./index-B_XB1-MU.js";import"./useEventCallback-l7OAvfu_.js";import"./SkeletonBar-CPuvZGqb.js";import"./LoadingCell-BOttGxxP.js";import"./ColumnConfigDialog-AWh268ua.js";import"./DraggableList-3qYbN4Vj.js";import"./search-bHymEml7.js";import"./Input-Ca6oOOwx.js";import"./useControlled-Cpl65TMC.js";import"./Button-Dqcog7jP.js";import"./small-cross-BNxAoOIY.js";import"./ActionButton-DZrngljD.js";import"./Checkbox-DkUamXVL.js";import"./useValueChanged-g4lOY34t.js";import"./CollapsiblePanel-DlBdk-qD.js";import"./MultiColumnSortDialog-XZXFn790.js";import"./MenuTrigger-BhVkwwlK.js";import"./CompositeItem-yupHDpkm.js";import"./ToolbarRootContext-CUI-NHrb.js";import"./getDisabledMountTransitionStyles-GSnN3fW6.js";import"./getPseudoElementBounds-kM-G-LqQ.js";import"./chevron-down-C3KFPXv7.js";import"./index-BpjGzWVl.js";import"./error-BWkfH6c5.js";import"./BaseCbacBanner-B0HhO3pu.js";import"./makeExternalStore-VPZ76tFl.js";import"./Tooltip-KSItXnvL.js";import"./PopoverPopup-B2AfGcIN.js";import"./debounce-z6aUSNpd.js";import"./useOsdkClient-C4faDiEE.js";import"./tick-wfH5aW9V.js";import"./DropdownField-D4gWGmzj.js";import"./isEqual-Jfqc8hVd.js";import"./withOsdkMetrics-CtZfcEFb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
